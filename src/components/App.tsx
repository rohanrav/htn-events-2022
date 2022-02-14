import React, { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { getAllEvents } from "../query/eventsQuery";

import { AppProvider, Banner, Frame, Loading, Toast } from "@shopify/polaris";
import theme from "../theme";
import Main from "./Main";
import NavBar from "./NavBar";
import Login from "./Login";
import Event from "./Event";
import Footer from "./Footer";

const App: React.FC<{}> = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isToastActive, setToastActive] = useState(false);
  const { loading, error, data } = useQuery(getAllEvents);

  const setLoggedInCallback = useCallback((loggedIn) => {
    setLoggedIn(loggedIn);
    toggleToast();
  }, []);

  const toggleToast = useCallback(
    () => setToastActive((isToastActive) => !isToastActive),
    []
  );

  const renderToastMarkup = () => {
    if (!isToastActive) return <></>;
    return (
      <Toast
        content={
          isLoggedIn ? "Logged In Successfully" : "Logged Out Successfully"
        }
        onDismiss={toggleToast}
      />
    );
  };

  const loadingMarkup = (
    <Frame>
      <Loading />
    </Frame>
  );

  const errorMarkup = (
    <Banner title="Error" onDismiss={() => {}} status="critical">
      <p>There has been a fatal error, please check back later.</p>
    </Banner>
  );

  return (
    <div style={{ height: "56px" }}>
      <AppProvider theme={theme} i18n={{}}>
        {loading && loadingMarkup}
        {error && errorMarkup}
        <BrowserRouter>
          {!error && !loading && (
            <Frame
              topBar={
                <NavBar
                  isLoggedIn={isLoggedIn}
                  events={data.sampleEvents}
                  setLoggedInCallback={setLoggedInCallback}
                />
              }
            >
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main isLoggedIn={isLoggedIn} events={data.sampleEvents} />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <Login
                      isLoggedIn={isLoggedIn}
                      setLoggedInCallback={setLoggedInCallback}
                    />
                  }
                />
                <Route
                  path="/event/:id"
                  element={<Event isLoggedIn={isLoggedIn} />}
                />
              </Routes>
              <Footer />
              {renderToastMarkup()}
            </Frame>
          )}
        </BrowserRouter>
      </AppProvider>
    </div>
  );
};

export default App;

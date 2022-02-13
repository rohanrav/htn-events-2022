import React, { useCallback, useState } from "react";
import NavBar from "./NavBar";
// import { User } from "../user";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import { AppProvider, Frame } from "@shopify/polaris";
import theme from "../theme";

import { useQuery } from "@apollo/client";
import { getAllEvents } from "../query/eventsQuery";
import Login from "./Login";

const App: React.FC<{}> = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { loading, error, data } = useQuery(getAllEvents);

  const setLoggedInCallback = useCallback(
    (loggedIn) => setLoggedIn(loggedIn),
    []
  );

  if (loading) return <div>"LOADING"</div>;
  else if (error) {
    console.log(error);
    return <div>"ERROR"</div>;
  } else {
    console.log(data);
  }

  return (
    <>
      <div style={{ height: "56px" }}>
        <AppProvider theme={theme} i18n={{}}>
          <Frame
            topBar={
              <NavBar
                isLoggedIn={isLoggedIn}
                events={data.sampleEvents}
                setLoggedInCallback={setLoggedInCallback}
              />
            }
          >
            <BrowserRouter>
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
                {/* <Route path="/events/:id" element={} /> */}
              </Routes>
            </BrowserRouter>
          </Frame>
        </AppProvider>
      </div>
    </>
  );
};

export default App;

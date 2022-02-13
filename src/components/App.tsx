import React from "react";
import NavBar from "./NavBar";
// import { User } from "../user";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import { AppProvider, Frame } from "@shopify/polaris";
import theme from "../theme";
// import { useState } from "react";

import { useQuery } from "@apollo/client";
import { getAllEvents } from "../query/eventsQuery";

const App: React.FC<{}> = () => {
  const { loading, error, data } = useQuery(getAllEvents);

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
                isLoggedIn={true}
                user={null}
                events={data.sampleEvents}
              />
            }
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main events={data.sampleEvents} />} />
                {/* <Route path="/login" element={} />
                <Route path="/events/:id" element={} /> */}
              </Routes>
            </BrowserRouter>
          </Frame>
        </AppProvider>
      </div>
    </>
  );
};

export default App;

import React, { useContext, useState, useEffect } from "react";
import AppContext from "./context/app-context";
import "./App.css";
import Exercises from "./Components/Exercises/Exercises";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Hero from "./Components/Layout/Hero";
import AppProvider from "./context/AppProvider";
import Loader from "./Components/Helper/Loader";

const App = () => {
  const appContext = useContext(AppContext);

  return (
    <AppProvider>
      <div className="app-container">
        <Header />
        {appContext.loading ? (
          <Loader />
        ) : (
          <>
            <Hero />
            <Exercises />
            <Footer />
          </>
        )}
      </div>
    </AppProvider>
  );
};

export default App;

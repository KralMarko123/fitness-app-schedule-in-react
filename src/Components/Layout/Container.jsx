import React, { useContext, useState, useEffect } from "react";
import Exercises from "../Exercises/Exercises";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Loader from "../Helper/Loader";
import AppContext from "../../context/app-context";
import "./Container.css";

const Container = () => {
  const appContext = useContext(AppContext);
  const [loading, setLoading] = useState(appContext.loading);
  useEffect(() => {
    setLoading(appContext.loading);
  }, [appContext.loading]);
  return (
    <div className="app-container">
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Exercises />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Container;

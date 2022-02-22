import React , { useContext, useState, useEffect } from 'react';
import Exercises from "./Components/Exercises/Exercises";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Hero from "./Components/Layout/Hero";
import Loader from "./Components/Helper/Loader";
import AppContext from "./context/app-context";

const Container = ()=>{

    const appContext = useContext(AppContext);
    const [loading,setLoading] = useState(appContext.loading)
    useEffect(() => {
      setLoading(appContext.loading)
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
    )
}

export default Container;
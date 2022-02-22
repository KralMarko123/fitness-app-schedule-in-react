import React, { useContext, useState, useEffect } from "react";
import "./Hero.css";
import AppContext from "../../context/app-context";
import upper from "../../images/upper.jpg";
import lower from "../../images/lower.jpg";
import rest from "../../images/rest.jpg";
import push from "../../images/push.jpg";
import pull from "../../images/pull.jpg";

const Hero = () => {
  const appContext = useContext(AppContext);
  const [imgSrc, setImgSrc] = useState(upper);
  const [title, setTitlte] = useState("UPPER");

  useEffect(() => {
    switch (appContext.activeDay) {
      case "monday":
        setImgSrc(upper);
        setTitlte("UPPER");
        break;
      case "tuesday":
        setImgSrc(lower);
        setTitlte("LOWER");
        break;
      case "thursday":
        setImgSrc(push);
        setTitlte("PUSH");
        break;
      case "friday":
        setImgSrc(pull);
        setTitlte("PULL");
        break;
      default:
        setImgSrc(rest);
        setTitlte("REST");
        break;
    }
  }, [appContext.activeDay]);

  return (
    <div
      className="hero-container"
      style={{
        background: `linear-gradient(transparent, black), url(${imgSrc})`,
      }}
    >
      <h1 className="hero-container__title">{title}</h1>
    </div>
  );
};

export default Hero;

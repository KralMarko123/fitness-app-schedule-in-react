import React, { useContext } from "react";
import AppContext from "../../context/app-context";
import { appReducer, defaultAppState } from "../../context/AppProvider";

import "./Header.css";

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const Header = () => {
  const appContext = useContext(AppContext);
  const choseDayHandler = (day) => {
    appContext.dispatch({ type: "LOADING" });

    setTimeout(
    ()=>  appContext.dispatch({ type: "CHANGED_DAY", dayName: day }),
      2000
    );
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {days.map((day) => (
          <>
            <li
              className={`navbar-list__link ${
                appContext.activeDay === day ? "active" : ""
              }`}
              key={day}
              data-day={day}
              onClick={() => choseDayHandler(day)}
            >
              {day}
            </li>
            {day === "sunday" ? null : <li>/</li>}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Header;

import React, { useContext } from "react";
import "./Header.css";
import AppContext from "../../context/app-context";

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
    appContext.chooseDay(day);
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
              onClick={choseDayHandler.bind(this, day)}
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

import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/app-context";
import Card from "../Helper/Card";
import "./Exercises.css";

const Exercises = () => {
  const appContext = useContext(AppContext);

  const [exercises, setActiveExercises] = useState(appContext.upper);

  useEffect(() => {
    switch (appContext.activeDay) {
      case "monday":
        setActiveExercises(appContext.upper);
        break;
      case "tuesday":
        setActiveExercises(appContext.lower);
        break;
      case "wednesday":
        setActiveExercises(null);
        break;
      case "thursday":
        setActiveExercises(appContext.push);
        break;
      case "friday":
        setActiveExercises(appContext.pull);
        break;
      case "saturday":
        setActiveExercises(null);
        break;
      case "sunday":
        setActiveExercises(null);
        break;
      default:
        break;
    }
  }, [
    appContext.activeDay,
    appContext.lower,
    appContext.pull,
    appContext.push,
    appContext.upper,
  ]);

  return exercises !== null ? (
    exercises.map((exercise) => (
      <Card
        key={exercise.name}
        name={exercise.name}
        sets={exercise.sets}
        reps={exercise.reps}
      />
    ))
  ) : (
    <h1 className="rest-day__title">Rest up, you've earned it.</h1>
  );
};

export default Exercises;

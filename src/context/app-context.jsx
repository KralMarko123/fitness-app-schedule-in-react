import { React, createContext } from "react";

const AppContext = createContext({
  activeDay: "",
  loading: undefined,
  upper: [{}],
  lower: [{}],
  push: [{}],
  pull: [{}],
  addExercise: (day, name, sets, reps) => {},
  removeExercise: (name) => {},
  chooseDay: (day) => {},
});

export default AppContext;

import { createContext } from "react";

const AppContext = createContext({
  activeDay: "",
  loading: false,
  upper: [{}],
  lower: [{}],
  push: [{}],
  pull: [{}],
  addExercise: (day, name, sets, reps) => {},
  removeExercise: (name) => {},
  chooseDay: (day) => {},
});

export default AppContext;

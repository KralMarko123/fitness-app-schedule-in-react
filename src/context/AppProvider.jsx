import { React, useReducer } from "react";
import AppContext from "./app-context";

export const defaultAppState = {
  activeDay: "monday",
  loading: false,
  upper: [
    {
      name: "bench press",
      sets: 4,
      reps: "4 - 6",
    },
    {
      name: "Chest-Supported row",
      sets: 3,
      reps: "6 - 8",
    },
    {
      name: "standing overhead press",
      sets: 3,
      reps: "8 - 10",
    },
    {
      name: "lat pulldown",
      sets: 3,
      reps: "10 - 12",
    },
    {
      name: "high to low cable flies",
      sets: 3,
      reps: "12 - 15",
    },
  ],
  lower: [
    {
      name: "back squat",
      sets: 4,
      reps: "6 - 8",
    },
    {
      name: "bulgarian split squat",
      sets: 4,
      reps: "8 - 10",
    },
    {
      name: "deadlift",
      sets: 4,
      reps: "6 - 8",
    },
    {
      name: "leg press calf raise",
      sets: 3,
      reps: "6 - 8",
    },
    {
      name: "seated weighted calf raise",
      sets: 3,
      reps: "10 - 15",
    },
  ],
  push: [
    {
      name: "incline dumbbell press",
      sets: 3,
      reps: "8 - 10",
    },
    {
      name: "flat dumbbell press",
      sets: 3,
      reps: "8 - 10",
    },
    {
      name: "lateral raises (Cable & Dumbbell)",
      sets: 4,
      reps: "8 - 12",
    },
    {
      name: "Push-Ups",
      sets: 3,
      reps: "10+",
    },
    {
      name: "overhead rope extensions",
      sets: 3,
      reps: "12 - 15",
    },
  ],
  pull: [
    {
      name: "Pull-Ups",
      sets: 3,
      reps: "6 - 8",
    },
    {
      name: "seated row",
      sets: 3,
      reps: "8 - 10",
    },
    {
      name: "kneeling face pulls",
      sets: 4,
      reps: "10 - 15",
    },
    {
      name: "incline dumbbell curls",
      sets: 3,
      reps: "8 - 10",
    },
    {
      name: "hammer curls",
      sets: 3,
      reps: "8 - 10",
    },
  ],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      
      return { ...state, loading: true };

    case "CHANGED_DAY":
      return { ...state, activeDay: action.dayName, loading: false };

    default:
      return defaultAppState;
  }
};

const AppProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(appReducer, defaultAppState);

  const appContext = {
    activeDay: appState.activeDay,
    loading: appState.loading,
    upper: appState.upper,
    lower: appState.lower,
    push: appState.push,
    pull: appState.pull,
    dispatch: dispatch,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default AppProvider;

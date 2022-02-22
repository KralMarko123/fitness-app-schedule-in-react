import React from "react";
import AppProvider from "./context/AppProvider";
import Container from "./Components/Layout/Container";
import "./App.css";

const App = (props) => {
  return (
    <AppProvider>
      <Container />
    </AppProvider>
  );
};

export default App;

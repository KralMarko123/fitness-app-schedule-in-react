import React from "react";
import "./App.css";

import Container from "./Container";
import AppProvider from "./context/AppProvider";

const App = (props) => {
 
  return (
    <AppProvider>
     
      <Container />
    </AppProvider>
  );
};

export default App;

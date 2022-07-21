import React from "react";
import "./App.css";
import Converter from "./components/Converter";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <div>
        <Menu />
      </div>
      <Converter />
    </div>
  );
}

export default App;

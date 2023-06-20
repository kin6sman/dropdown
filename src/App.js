import React from "react";
import Dropdown from "./components/DropDown";
import './App.css'

const App = () => {
  const dropdownItems = [
    { label: "Yes", value: 1 },
    { label: "No", value: 2 },
    { label: "Probably Not", value: 3 },
  ];

  return (
    <div className="App">
      <h1>Dropdown Example</h1>
      <p>Should you use a dropbox</p>
      <Dropdown items={dropdownItems} />
    </div>
  );
};

export default App;

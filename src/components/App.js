import React, { Component, useState } from "react";
import "../styles/App.css";
import MyComponent from "./MyComponent";

const App = () => {
  return (
    <div id="main">
      <div id="root">
        <MyComponent />
      </div>
    </div>
  );
};

export default App;

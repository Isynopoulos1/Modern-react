//Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// to create a component of my App

function getButtonText() {
  return "Click on me";
}
//create a react component

const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter name:{" "}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};
//Take the react component and show it on the screen

ReactDOM.render(<App />, document.getElementById("root"));

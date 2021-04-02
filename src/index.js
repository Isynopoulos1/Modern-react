//Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

//create a react component

const App = () => {
  const buttonText = { text: "click me  " };
  const style = { backgroundColor: "blue", color: "white" };
  //usar una const para quitar el react component Enter Name:
  const labelText = "Enter  name";
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};
//Take the react component and show it on the screen

ReactDOM.render(<App />, document.getElementById("root"));

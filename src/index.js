import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// new Date(year, month, day, hours, minutes, seconds)
// let currDate = new Date(2020, 7, 31, 23);
let today = new Date();
let currTime = today.getHours();

let time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let greeting = "";
const cssStyle = {};

if (currTime >= 0 && currTime < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currTime >= 12 && currTime < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "Black";
}

ReactDOM.render(
  <>
    <h1 style={{ textAlign: "center" }}>
      Dynamic Greeting Website Using ReactJs
    </h1>
    <p style={{ textAlign: "center" }}>Current Time {time}</p>
    <div className="container">
      <h1>
        Hello there ! <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);

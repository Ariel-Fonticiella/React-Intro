import React from "react";
import { render } from "react-dom";

// This will be the overarching component for our app.
const App = () => (
  // With arrow-functions, if it's a one-liner, it will be an "implicit return", so we don't use curley braces. The Airbnb ESlint rules require that if you have a function that just immediately returns, it must use the "implicit return".

  // Because we are still writing JavaScript with JSX, we cannot use the keyword "class" as it is a reserved word in JavaScript. Instead we will use the keyword "className".
  <div className="app">
    <div className="landing">
      <h1>vidChll</h1>
      <input type="text" placeholder="Search" />
      <a> or Browse All</a>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));

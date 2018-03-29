import React from "react";
import { render } from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Landing from "./Landing";

<<<<<<< HEAD
const App = () => (
  <HashRouter>
    <div className="app">
      {/* This is one route of our application. It's saying that the path to get there is "/" so it's the home page. And the "exact" means it must "exactly" match that path. If "exact" was not included, if you made a request to "/foo" it would still match the "/" path. So if the left side of it matches the route, it's going to match on it. This is why you need to do "exact". */}

      <Route exact path="/" component={Landing} />
    </div>
  </HashRouter>
=======
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
>>>>>>> 5de2fa7aedb397fe84d098a93905d598e0776bbf
);

render(<App />, document.getElementById("app"));

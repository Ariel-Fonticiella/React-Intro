import React from "react";
import { render } from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Search from "./search";

const App = () => (
  <HashRouter>
    <div className="app">
      {/* This is one route of our application. It's saying that the path to get there is "/" so it's the home page. And the "exact" means it must "exactly" match that path. If "exact" was not included, if you made a request to "/foo" it would still match the "/" path. So if the left side of it matches the route, it's going to match on it. This is why you need to do "exact". */}
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </HashRouter>
);

render(<App />, document.getElementById("app"));

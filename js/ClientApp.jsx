import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        {/* This is one route of our application. It's saying that the path to get there is "/" so it's the home page. And the "exact" means it must "exactly" match that path. If "exact" was not included, if you made a request to "/foo" it would still match the "/" path. So if the left side of it matches the route, it's going to match on it. This is why you need to do "exact". */}
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        {/* Basically this line says "if nothing matches the two routes above, then render this 404" */}
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));

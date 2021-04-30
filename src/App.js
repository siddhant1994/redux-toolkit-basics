import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/">
            <Players />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

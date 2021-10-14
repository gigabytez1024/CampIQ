import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import TripPlannerComponent from "./tripplanner";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>CampIQ</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/tripplanner"} className="nav-link">
                  Trip Planner
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/trippplanner" component={TripPlannerComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

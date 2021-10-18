import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import TripPlannerComponent from "./tripplanner";
import Location from "./location";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Toolbar, Card, AppBar, CardHeader, CardContent, Typography, Button } from "@material-ui/core";
import theme from "../theme";
import logo from "./campIQLogo.jpg";
import PackList from "./packlist";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar color="primary" variant="dense">
          <Typography variant="h6" color="black">
            <div class="center-image">
              <img src={logo} />
            </div>
          </Typography>
        </AppBar>
        <Router>
          <Card style={{ marginTop: "50%" }}>
            <div>
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
                  <li>
                    <Link to={"/location"} className="nav-link">
                      Locations
                    </Link>
                  </li>
                </ul>
              </nav>
              <hr />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tripplanner" component={TripPlannerComponent} />
                <Route exact path="/packlist" component={PackList} />
                <Route exact path="/location" component={Location} />
              </Switch>
            </div>
          </Card>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

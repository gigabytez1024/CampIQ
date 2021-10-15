import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import TripPlannerComponent from "./tripplanner";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Toolbar, Card, AppBar, CardHeader, CardContent, Typography, Button } from "@material-ui/core";
import theme from "../theme";
import logo from "./campIQLogo.jpg";

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
                </ul>
              </nav>
              <hr />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tripplanner" component={TripPlannerComponent} />
              </Switch>
            </div>
          </Card>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

import React, { useState } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Reorder from "@material-ui/icons/Reorder";
import Home from "./home";
import TripPlannerComponent from "./tripplanner";
import Location from "./location";
import AddReview from "./addreview";
import PackListComponent from "./packlist";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Toolbar,
  AppBar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import theme from "assets/theme/theme.js";
import logo from "./campIQLogo.jpg";
import AccountBenefits from "./accountbenefits";

// plugins styles from node_modules
import "react-perfect-scrollbar/dist/css/styles.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "quill/dist/quill.core.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// plugins styles downloaded
import "assets/plugins/nucleo/css/nucleo.css";
// core styles
import "assets/scss/argon-dashboard-pro-material-ui.scss?v1.0.0";

const App = () => {
  const [item, setItem] = useState({ msg: null, anchorEl: null });

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <div className="center-image">
              <img src={logo} />
            </div>
          </Typography>
          <IconButton
            onClick={handleClick}
            color="inherit"
            style={{ marginLeft: "auto", paddingRight: "1vh" }}
          >
            <Reorder />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/home" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              to="/accountbenefits"
              onClick={handleClose}
            >
              Account Benefits
            </MenuItem>
            <MenuItem component={Link} to="/tripplanner" onClick={handleClose}>
              Trip Planner
            </MenuItem>
            <MenuItem component={Link} to="/addreview" onClick={handleClose}>
              Add a Review
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route
          exact
          path="/accountbenefits"
          render={() => <AccountBenefits />}
        />
        <Route path="/tripplanner" render={() => <TripPlannerComponent />} />
        <Route exact path="/addreview" render={() => <AddReview />} />
        <Route path="/packlist" render={() => <PackListComponent />} />
        <Route path="/home" component={Home} />
      </div>
    </MuiThemeProvider>
  );
};

export default App;

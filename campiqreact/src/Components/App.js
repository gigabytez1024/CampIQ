import React, { useState } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Reorder from "@material-ui/icons/Reorder";
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
// Components
import Home from "./home";
import AccountBenefits from "./accountbenefits";
import TripPlannerComponent from "./tripplanner";
import AddReview from "./addreview";
import FindCampground from "./findcampground";
import Memories from "./memories";
import { logout } from "../firebase";
import PackListComponent from "./packlist";
import CreateAccount from "./createaccount";
import Login from "./login";
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
import Booking from "./booking";
import TripSummaryComponent from "./tripsummary";

const App = () => {

  const [item, setItem] = useState({ msg: null, anchorEl: null });

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // Logout and redirect user to home page
  const handleLogout = () => {
    setAnchorEl(null);
    logout();
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
            <MenuItem component={Link} to="/login" onClick={handleClose}>
              Login
            </MenuItem>
            <MenuItem component={Link} to="/accountbenefits" onClick={handleClose}>
              Account Benefits
            </MenuItem>
            <MenuItem component={Link} to="/tripplanner" onClick={handleClose}>
              Trip Planner
            </MenuItem>
            <MenuItem component={Link} to="/addreview" onClick={handleClose}>
              Add a Review
            </MenuItem>
                 <MenuItem component={Link} to="/tripSummaryComponent" onClick={handleClose}>
              Trip Summary test link (to be removed)
            </MenuItem>
                    <MenuItem component={Link} to="/login" onClick={handleClose}>
              Log in
            </MenuItem>
            <MenuItem
              component={Link} to="/findcampground" onClick={handleClose}>
              Find Campground
            </MenuItem>
            <MenuItem component={Link} to="/memories" onClick={handleClose}>
              Memories
            </MenuItem>
            <MenuItem component={Link} to="/home" onClick={handleLogout}>
              Logout
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
        <Route path="/findcampground" render={() => <FindCampground />} />
        <Route path="/memories" render={() => <Memories/>}/>
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/createaccount" render={() => <CreateAccount/>}/>
        <Route path="/home" component={Home} />
        <Route path="/booking" component={Booking}/>
      </div>
    </MuiThemeProvider>
  );
};

export default App;

import React, { useState } from "react";
import { Route, Link, Redirect, useHistory } from "react-router-dom";
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
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
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
import Booking from "./booking";
import ResetPassword from "./resetpassword";
import TripSummaryComponent from "./tripsummary";
import Dashboard from "./dashboard";
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
  const [user] = useAuthState(auth);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // If logged in redirect to dashboard, if not logged in redirect to login page
  const handleUsers = () => {
    setAnchorEl(null);
    if (user)
      history.replace("/dashboard");
    else
      history.replace("/login");
  }

  // Logout and redirect user to home page
  const handleLogout = () => {
    setAnchorEl(null);
    logout();
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar style={{ paddingTop: "1vh" }}>
          <Typography variant="h6" color="inherit">
            <div>
              <img src={logo} alt="logo"/>
            </div>
          </Typography>
          <IconButton
            onClick={handleClick}
            color="inherit"
            style={{ marginLeft: "auto", paddingRight: "1vh" }}
          >
            <Reorder style={{ transform: "scale(2)" }} />
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
            <MenuItem component={Link} to="/findcampground" onClick={handleClose}>
              Find Campground
            </MenuItem>
            <MenuItem onClick={handleUsers}>
              Account Dashboard
            </MenuItem>
            <MenuItem component={Link} to="/accountbenefits" onClick={handleClose}>
              Account Benefits
            </MenuItem>
            <MenuItem component={Link} to="/home" onClick={handleLogout}>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <div>
        <Route path="/" render={() => <Redirect to="/home" />} />
        <Route path="/login" render={() => <Login/>}/>
        <Route path="/findcampground" render={() => <FindCampground />} />
        <Route path="/accountbenefits" render={() => <AccountBenefits />} />
        <Route path="/createaccount" render={() => <CreateAccount/>} />
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route path="/tripplanner" render={() => <TripPlannerComponent />} />
        <Route path="/packlist" render={() => <PackListComponent />} />
        <Route path="/booking" component={Booking} />
        <Route path="/addreview" render={() => <AddReview />} />
        <Route path="/memories" render={() => <Memories/>}/>
        <Route path="/resetpassword" render={() => <ResetPassword/>} />
        <Route path="/tripsummary" render={() => <TripSummaryComponent/>} />
        <Route path="/home" component={Home} />
      </div>
    </MuiThemeProvider>
  );
};

export default App;

import React from "react";
import clsx from "clsx";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// @material-ui/icons components

import FileCopy from "@material-ui/icons/FileCopy";
import LocationOn from "@material-ui/icons/LocationOn";
import {
  TravelExplore,
  AddLocation,
  RateReview,
  CardTravel,
} from "@mui/icons-material";
import Report from "@material-ui/icons/Report";

// core components
import componentStyles from "assets/theme/components/dropdowns/apps-dropdown.js";

const useStyles = makeStyles(componentStyles);

const firstItems = [
  {
    name: "Find Campground",
    icon: TravelExplore,
    color: "bgGradientError",
    url: "/findcampground",
  },
  {
    name: "Trip Planner",
    icon: AddLocation,
    color: "bgGradientWarning",
    url: "/tripplanner",
  },
  {
    name: "Add Review",
    icon: RateReview,
    color: "bgGradientInfo",
    url: "/addreview",
  },
];

const secondItems = [
  {
    name: "Memories",
    icon: Report,
    color: "bgGradientSuccess",
    url: "/memories",
  },
  {
    name: "Maps",
    icon: LocationOn,
    color: "bgGradientPurple",
    url: "/tripsummary",
  },
  {
    name: "Trip Summary",
    icon: CardTravel,
    color: "bgGradientYellow",
    url: "/tripsummary",
  },
];

export default function AppsDropdown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "dropdowns-apps-dropdown-id";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      classes={{ paper: classes.menuPaper }}
    >
      <Grid container classes={{ root: classes.gridContainerRoot }}>
        {firstItems.map((prop, key) => (
          <Grid item xs={4} key={key} classes={{ root: classes.gridItemRoot }}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              component={Link}
              to={prop.url}
            >
              <Avatar
                component="span"
                classes={{
                  root: clsx(classes.avatarRoot, classes[prop.color]),
                }}
              >
                <Box
                  component={prop.icon}
                  width="1.25rem!important"
                  height="1.25rem!important"
                />
              </Avatar>
            </Button>
            <Box
              component="small"
              display="block"
              marginTop=".75rem"
              fontSize=".8125rem"
              fontWeight="600"
            >
              {prop.name}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container classes={{ root: classes.gridContainerRoot }}>
        {secondItems.map((prop, key) => (
          <Grid item xs={4} key={key} classes={{ root: classes.gridItemRoot }}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              component={Link}
              to={prop.url}
            >
              <Avatar
                component="span"
                classes={{
                  root: clsx(classes.avatarRoot, classes[prop.color]),
                }}
              >
                <Box
                  component={prop.icon}
                  width="1.25rem!important"
                  height="1.25rem!important"
                />
              </Avatar>
            </Button>
            <Box
              component="small"
              display="block"
              marginTop=".75rem"
              fontSize=".8125rem"
              fontWeight="600"
            >
              {prop.name}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Menu>
  );

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        classes={{
          label: classes.buttonLabel,
        }}
      >
        <Box
          component={FileCopy}
          width="1rem!important"
          height="1rem!important"
        />
      </IconButton>
      {renderMenu}
    </>
  );
}

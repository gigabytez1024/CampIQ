import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  Typography,
  Grid,
  Container,
  Box,
  CardContent,
  Button,
} from "@material-ui/core";
import theme from "assets/theme/theme.js";
import { makeStyles } from "@material-ui/core/styles";
import CardActivityFeed from "./Cards/Dashboard/CardActivityFeed";
import CardLightTableSortable from "./Cards/Sortable/CardLightTableSortable";
import { Link } from "react-router-dom";
import AuthFooter from "./Footers/AuthFooter";
import CardCalendar from "./Cards/Dashboard/CardCalendar";
import componentStyles from "assets/theme/views/admin/dashboard.js";
import componentStylesCardDeck from "assets/theme/components/cards/card-deck";
import AdminNavbar from "./AdminNavbar";
const useStyles = makeStyles(componentStyles);
const useStylesCardDeck = makeStyles(componentStylesCardDeck);
const Dashboard = () => {
  const classes = { ...useStyles(), ...useStylesCardDeck() };
  return (
    <MuiThemeProvider theme={theme}>
      <Card>
        <AdminNavbar />
        <CardHeader
          className={classes.cardHeader}
          title="Account Dashboard"
          titleTypographyProps={{
            component: Box,
            marginBottom: "0!important",
            variant: "h1",
          }}
        ></CardHeader>
        <Container
          maxWidth={true}
          component={Box}
          marginTop="1rem"
          classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Grid item xs={12} xl={2}>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  component={Link}
                  to="/findcampground"
                >
                  Find a Campground
                </Button>
              </div>
              <br />
            </Grid>
            <Grid item xs={12} xl={2}>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  component={Link}
                  to="/tripplanner"
                >
                  Trip Planner
                </Button>
              </div>
              <br />
            </Grid>
            <Grid item xs={12} xl={2}>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  component={Link}
                  to="/addreview"
                >
                  Add a Review
                </Button>
              </div>
              <br />
            </Grid>
            <Grid item xs={12} xl={2}>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  component={Link}
                  to="/memories"
                >
                  Memories
                </Button>
              </div>
              <br />
            </Grid>
            <Grid item xs={12} xl={2}>
              <div style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  component={Link}
                  to="/tripsummary"
                >
                  Trip Summary
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container></Grid>
        </Container>
        <CardContent style={{ paddingTop: 10 }}></CardContent>
        <Container
          maxWidth={false}
          component={Box}
          marginTop="1rem"
          classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Grid item xs={12} xl={6}>
              <CardActivityFeed />
            </Grid>
            <Grid item xs={12} xl={6}>
              <CardLightTableSortable />
              <CardCalendar />
            </Grid>
          </Grid>
          <Grid container></Grid>
        </Container>
        <AuthFooter />
      </Card>
    </MuiThemeProvider>
  );
};
export default Dashboard;

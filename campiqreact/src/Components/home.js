import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  Typography,
  Grid,
  Container,
  Box,
} from "@material-ui/core";
import theme from "assets/theme/theme.js";
import { makeStyles } from "@material-ui/core/styles";
import CardActivityFeed from "./Cards/Dashboard/CardActivityFeed";
import CardLightTableSortable from "./Cards/Sortable/CardLightTableSortable";
import componentStyles from "assets/theme/views/admin/dashboard.js";
import componentStylesCardDeck from "assets/theme/components/cards/card-deck";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(componentStyles);
const useStylesCardDeck = makeStyles(componentStylesCardDeck);
const Home = () => {
  const classes = { ...useStyles(), ...useStylesCardDeck() };
  return (
    <MuiThemeProvider theme={theme}>
      <Card>
        <p style={{ textAlign: "center" }}>
          {/* <img src="globe.png" style={{ width: 300, marginBottom: 0 }} /> */}
        </p>
        <CardHeader
          title="CampIQ"
          style={{ color: theme.palette.secondary.main, textAlign: "center" }}
        />
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
            </Grid>
          </Grid>
          <Grid container></Grid>
        </Container>
        <Typography
          color="secondary"
          style={{ float: "right", paddingRight: "1vh", fontSize: "smaller" }}
        >
          &copy;5Starz
        </Typography>
                <ToastContainer />

      </Card>
    </MuiThemeProvider>
  );
};
export default Home;

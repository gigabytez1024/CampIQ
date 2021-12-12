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
import CardCampsite from "./Cards/CardCampsite";
import AuthFooter from "./Footers/AuthFooter";
import componentStyles from "assets/theme/views/admin/dashboard.js";
import componentStylesCardDeck from "assets/theme/components/cards/card-deck";
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
        <Container
          maxWidth={false}
          component={Box}
          marginTop="1rem"
          classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Grid item xs={12} xl={3}>
              <CardCampsite
                img={1}
                name="Test"
                date="Test"
                link="#"
                description="Test Description"
              />
            </Grid>
            <Grid item xs={12} xl={3}>
              <CardCampsite
                img={2}
                name="Test"
                date="Test"
                link="#"
                description="Test Description"
              />
            </Grid>
            <Grid item xs={12} xl={3}>
              <CardCampsite
                img={3}
                name="Test"
                date="Test"
                link="#"
                description="Test Description"
              />
            </Grid>
            <Grid item xs={12} xl={3}>
              <CardCampsite
                img={4}
                name="Test"
                date="Test"
                link="#"
                description="Test Description"
              />
            </Grid>
          </Grid>
          <Grid container></Grid>
        </Container>
        <AuthFooter />
      </Card>
    </MuiThemeProvider>
  );
};
export default Home;

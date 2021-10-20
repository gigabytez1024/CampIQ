import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardHeader, Typography } from "@material-ui/core";
import theme from "../theme";
import home from "./homepage.PNG";

const Home = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Card>
        <p style={{ textAlign: "center" }}>{/* <img src="globe.png" style={{ width: 300, marginBottom: 0 }} /> */}</p>
        <CardHeader title="CampIQ" style={{ color: theme.palette.secondary.main, textAlign: "center" }} />
        <Typography color="secondary" style={{ float: "right", paddingRight: "1vh", fontSize: "smaller" }}>
          &copy;5Starz
        </Typography>
      </Card>
    </MuiThemeProvider>
  );
};
export default Home;

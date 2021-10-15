import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Toolbar, Card, AppBar, CardHeader, CardContent, Typography, Button } from "@material-ui/core";
import theme from "../theme";
import logo from "./campIQLogo.jpg";
import Image from "react-image-resizer";
import { Link } from "react-router-dom";

const TripPlannerComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Card style={{ marginTop: "20%" }}>
        <CardHeader title="Plan Your Upcoming Trip" style={{ textAlign: "center" }} />
        <CardContent>
          <p></p>
          <Link to="/packlist">
            <Button variant="contained" color="secondary" align="left">
              What to Bring
            </Button>
          </Link>

          <Button variant="contained" color="secondary" style={{ marginLeft: "25%" }}>
            Book A Site
          </Button>
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
};
export default TripPlannerComponent;

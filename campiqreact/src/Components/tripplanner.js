import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Toolbar, Card, AppBar, CardHeader, CardContent, Typography, Button } from "@material-ui/core";
import theme from "../theme";
import { Link, Route } from "react-router-dom";
import PackList from "./packlist";

const TripPlannerComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Card style={{ marginTop: "20%" }}>
        <CardHeader title="Plan Your Upcoming Trip" style={{ textAlign: "center" }} />
        <CardContent>
          <p></p>
          <Button variant="contained" color="secondary" align="left" component={Link} to="/packlist">
            What to Bring
          </Button>
          <Button variant="contained" color="secondary" style={{ marginLeft: "25%" }}>
            Book A Site
          </Button>
        </CardContent>
      </Card>
      <div>
        <Route path="/packlist" render={() => <PackList />} />
      </div>
    </MuiThemeProvider>
  );
};
export default TripPlannerComponent;

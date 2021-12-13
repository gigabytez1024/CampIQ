import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Button } from "@material-ui/core";
import theme from "../theme";
import { Link } from "react-router-dom";

const TripPlannerComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Card>
        <CardHeader title="Plan Your Upcoming Trip" style={{ textAlign: "center" }} />
        <CardContent>
          <div style={{ textAlign: "center"}}>
              <Button component={Link} to="/packlist"
                  variant="contained"
                  color="secondary"
                  fullWidth
              >
                  What to Bring
              </Button>
          </div>
          <div style={{ textAlign: "center", paddingTop: "2vh" }}>
              <Button component={Link} to="/booking"
                  variant="contained"
                  color="secondary"
                  fullWidth
              >
                  Book A Site
              </Button>
          </div>
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
};
export default TripPlannerComponent;

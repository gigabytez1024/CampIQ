import React, { useReducer, useEffect } from "react";
import { Card, Typography, TextField, CardContent, Button, Paper } from "@material-ui/core";
import { Container } from "@material-ui/core";

function TripPlannerComponent() {
  return (
    <Container>
      <Paper>
        <Typography>Plan your trip</Typography>
        <Button variant="contained" color="primary">
          Camping List
        </Button>
        <Button variant="contained" color="primary">
          Book a Site
        </Button>
      </Paper>
    </Container>
  );
}

export default TripPlannerComponent;

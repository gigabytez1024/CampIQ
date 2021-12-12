import React from "react";
import { Link } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { 
    Card, 
    CardHeader, 
    CardContent, 
    Button, 
    Typography
} from "@material-ui/core";
import theme from "../theme";


const Dashboard = () => {
    return (
        <MuiThemeProvider theme={theme}>
        <Card>
            <CardHeader title="Account Dashboard" style={{ textAlign: "center", paddingBottom: 0 }} />
            <CardContent style={{ paddingTop: 10}}>
                <div style={{ textAlign: "center"}}>
                    <Button variant="contained" color="secondary" fullWidth component={Link} to="/findcampground">
                        Find a Campground
                    </Button>
                </div>
                <br/>
                <div style={{ textAlign: "center"}}>
                    <Button variant="contained" color="secondary" fullWidth component={Link} to="/tripplanner">
                        Trip Planner
                    </Button>
                </div>
                <br/>
                <div style={{ textAlign: "center"}}>
                    <Button variant="contained" color="secondary" fullWidth component={Link} to="/addreview">
                        Add a Review
                    </Button>
                </div>
                <br/>
                <div style={{ textAlign: "center"}}>
                    <Button variant="contained" color="secondary" fullWidth component={Link} to="/memories">
                        Memories
                    </Button>
                </div>
                <br/>
                <div style={{ textAlign: "center"}}>
                    <Button variant="contained" color="secondary" fullWidth component={Link} to="/tripsummary">
                        Trip Summary
                    </Button>
                </div>
            </CardContent>
        </Card>
        </MuiThemeProvider>
    );
};

export default Dashboard;
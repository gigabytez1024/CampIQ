import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { 
    Card, 
    CardHeader, 
    CardContent, 
    Button, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemIcon,
    Typography
} from "@material-ui/core";
import theme from "../theme";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StartIcon from "@material-ui/icons/Star";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import PhotoIcon from "@material-ui/icons/Photo";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";

const AccountBenefits = () => {
    return (
        <MuiThemeProvider theme={theme}>
        <Card>
            <CardHeader title="Account Benefits" style={{ textAlign: "center", paddingBottom: 0 }} />
            <CardContent style={{ paddingTop: 10}}>
                <Typography variant="subtitle2">
                    Account holders have access to the following tools to ensure the perfect camping trip, from beginning to end:
                </Typography>
                <List dense>
                    <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <DashboardIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Account Holder Dashboard"
                            secondary={
                                <ul>
                                    <li>Compatibility Surveys</li>
                                    <li>Favourite Locations</li>
                                    <li>Add Payment Methods</li>
                                    <li>Edit Profile</li>
                                </ul>
                            }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <StartIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Location Rating System"
                            secondary={
                                <ul>
                                    <li>Add Ratings</li>
                                    <li>View/Create Reviews</li>
                                </ul>
                            }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <CardTravelIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Trip Planning Tools"
                            secondary={
                                <ul>
                                    <li>Create Packing List</li>
                                    <li>Get Directions</li>
                                </ul>
                            }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemIcon>
                            <PhotoIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Personal Memories Page"
                            secondary={
                                <ul>
                                    <li>View List of Locations Visited</li>
                                    <li>Save Text/Photo Memories</li>
                                </ul>
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <MoneyOffIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                            primary="Account Creation is FREE"
                        />
                    </ListItem>
                </List>
                <div style={{ textAlign: "center" }}>
                    <Button variant="contained" color="secondary" component={Link} to="/createaccount">
                        Create Account
                    </Button>
                </div>
            </CardContent>
        </Card>
        </MuiThemeProvider>
    );
};
export default AccountBenefits;
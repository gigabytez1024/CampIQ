import React, { useReducer, useEffect } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardHeader,
    TextField,
} from '@material-ui/core';
import Autocomplete from "@material-ui/lab/Autocomplete";
import theme from '../theme';
import { useLocation } from "react-router-dom";

const Review = (props) => {
    let campsite = "UNKNOWN";
    console.log(props);
    if (props.location.state.campsite) {
        campsite = props.location.state.campsite;
    }

    return (
        <MuiThemeProvider theme={theme}>
            <Card>
                <CardHeader title={<p>Submit a review for: <b>{campsite}</b></p>} style={{ textAlign: "center" }} />
                <div style={{ margin: 20 }}>
                    <textarea style={{ width: '100%', height: '12vh' }}></textarea>
                </div>
            </Card>
        </MuiThemeProvider >
    );
};
export default Review;
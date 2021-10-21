import React from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
} from '@material-ui/core';
import theme from '../theme';
import { Redirect } from 'react-router-dom'

const Review = (props) => {
    let campsite = "";
    console.log(props);
    if (props.location.state != null) {
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
    }
    else {
        return <Redirect to='/location' />
    }
};
export default Review;
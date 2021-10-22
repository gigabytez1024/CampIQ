import React, { useState } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardHeader,
    TextField,
} from '@material-ui/core';
import Autocomplete from "@material-ui/lab/Autocomplete";
import theme from '../theme';
import Location from "./location";

const AddReview = () => {
    let [campsite, setCampsite] = useState("");
    let [campsiteChosen, setCampsiteChosen] = useState(false);

    const chosenSite = (campsite) => {
        setCampsite(campsite);
        setCampsiteChosen(true);
    }


    return (
        <MuiThemeProvider theme={theme}>
            <Location campsite={chosenSite} />
            {
                campsiteChosen && (
                    <Card>
                        <CardHeader title={<p>Submit a review for: <b>{campsite}</b></p>} style={{ textAlign: "center" }} />
                        <div style={{ margin: 20 }}>
                            <textarea style={{ width: '100%', height: '12vh' }}></textarea>
                        </div>
                    </Card>
                )
            }
        </MuiThemeProvider >
    );
};
export default AddReview;
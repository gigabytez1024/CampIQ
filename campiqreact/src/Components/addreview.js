import React, { useState } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
} from '@material-ui/core';
import theme from '../theme';
import Location from "./location";
import ReactStars from "react-rating-stars-component";

const AddReview = () => {
    let [campsite, setCampsite] = useState("");
    let [campsiteChosen, setCampsiteChosen] = useState(false);

    const chosenSite = (campsite) => {
        setCampsite(campsite);
        setCampsiteChosen(true);
    }


    return (
        <MuiThemeProvider theme={theme}>
            {
                !campsiteChosen && (
                    <Location campsite={chosenSite} />
                )
            }
            {
                campsiteChosen && (
                    <Card>
                        <CardHeader title={<h1>{campsite}</h1>} style={{ textAlign: "center" }} />
                        {/* image? */}
                        <div style={{ margin: 20 }}>
                            <div class="row" style={{ marginLeft: 20 }}>
                                <div style={{ marginRight: 54, marginTop: 20 }}>
                                    <h4>App Score: </h4>
                                </div>
                                <ReactStars
                                    size={40}
                                    isHalf={true}
                                    value={3}   //will query from database
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <div class="row" style={{ marginLeft: 20 }}>
                                <div style={{ marginRight: 40, marginTop: 20 }}>
                                    <h4>Users Score: </h4>
                                </div>
                                <ReactStars
                                    size={40}
                                    isHalf={true}
                                    value={2.5} //will query from database
                                    a11y={true}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>

                            <div style={{ margin: 20, marginBottom: 0 }}>
                                <h2>Submit a review</h2>
                                <div class="row" style={{ marginLeft: 0 }}>
                                    <p>Attribute: </p>
                                    <ReactStars
                                        size={20}
                                        isHalf={true}
                                        a11y={true}
                                        activeColor="#ffd700"
                                    />
                                </div>
                                <textarea style={{ width: '100%', height: '10vh' }}></textarea>
                            </div>
                        </div>
                    </Card>
                )
            }
        </MuiThemeProvider >
    );
};
export default AddReview;
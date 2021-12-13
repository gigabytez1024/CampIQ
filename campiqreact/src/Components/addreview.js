import React, { useState, useEffect } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    Button
} from '@material-ui/core';
import theme from '../theme';
import Location from "./location";
import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
    let [campsite, setCampsite] = useState("");
    let [campsiteChosen, setCampsiteChosen] = useState(false);
    let [reviewSet, setReviewSet] = useState(false);
    let [newRating, setNewRating] = useState(0);

    function notify() {
        toast("🏕️ Rating Saved!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
    }

    useEffect(() => {
        setCampsite("");
        setCampsiteChosen(false);
        setReviewSet(false);
    }, []);

    const GRAPHURL = "http://localhost:5000/graphql";
    const chosenSite = async (campsite) => {
        setCampsite(campsite);
        setCampsiteChosen(true);
        setReviewSet(false);
        try {
            let response = await fetch(GRAPHURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    query: `query {campgroundbyname(campsitename:"${campsite}") {googlerating, userrating} }`,
                }),
            });
            let json = await response.json();
            render(
                <ReactStars
                    size={40}
                    value={json.data.campgroundbyname.googlerating}
                    edit={false}
                    activeColor="#ffd700"
                />,
                document.getElementById("googlerating")
            );
            render(
                <ReactStars
                    size={40}
                    value={json.data.campgroundbyname.userrating}
                    edit={false}
                    activeColor="#ffd700"
                />,
                document.getElementById("userrating")
            );
        } catch (error) {
            console.log(error);
        }
    }

    const ratingChanged = (newRating) => {
        setNewRating(newRating);
    };

    const submitReview = async () => {
        try {
            let response = await fetch(GRAPHURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    query: `mutation{updateRating(campsitename:"${campsite}", rating: ${newRating}) {campsitename} }`,
                }),
            });
            let json = await response.json();
            console.log(json);
            if (json.data.updateRating.campsitename !== "") {
                setReviewSet(true);
                setCampsite("");
                setCampsiteChosen(false);
                notify();
            }
        } catch (error) {
            notify();
            console.log(error);
        }
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
                        <div style={{ margin: 20 }}>
                            <div class="row" style={{ marginLeft: 20 }}>
                                <div style={{ marginRight: 54, marginTop: 20 }}>
                                    <h4>App Score: </h4>
                                </div>
                                <div id="googlerating" />
                            </div>
                            <div class="row" style={{ marginLeft: 20 }}>
                                <div style={{ marginRight: 40, marginTop: 20 }}>
                                    <h4>Users Score: </h4>
                                </div>
                                <div id="userrating" />
                            </div>
                            <br />
                            <div class="row" style={{ marginLeft: 20 }}>
                                <div style={{ marginRight: 8, marginTop: 20 }}>
                                    <h4>Submit a Review: </h4>
                                </div>
                                <ReactStars
                                    size={40}
                                    onChange={ratingChanged}
                                    isHalf={true}
                                    a11y={true}
                                    activeColor="#ffd700"
                                />
                            </div>

                            <div style={{ textAlign: "center", marginTop: 0, paddingTop: "2vh" }}>
                                <Button style={{ alignContent: "center" }}
                                    variant="contained"
                                    color="secondary"
                                    onClick={submitReview}
                                >
                                    Submit
                                </Button>
                            </div>
                            <div style={{ textAlign: "center", marginTop: 0, paddingTop: "2vh" }}>
                                <Button component={Link} to="/dashboard"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Back to Dashboard
                                </Button>
                            </div>
                            <ToastContainer position="bottom-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </Card>
                )
            }
            {
                reviewSet && (
                    <h4>Review Submitted!</h4>
                )
            }
        </MuiThemeProvider >
    );
};
export default AddReview;
import React, { useReducer, useEffect, useState } from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardHeader,
    Snackbar,
    TextField,
} from '@material-ui/core';
import Autocomplete from "@material-ui/lab/Autocomplete";
import theme from '../pages/theme';

const Location = (props) => {
    const initialState = {
        campsites: ["testcampsite1", "testcampsite2"],
    };
    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);
    useEffect(() => {
        //fetchCountries();
    }, []);
    const fetchCountries = async () => {
        try {
            const query = 'query { countries }';
            //let response = await fetch('http://localhost:5000/graphql/', {
            let response = await fetch('/graphql/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query,
                })
            })
            let json = await response.json();
            setState({
                countries: json.data.countries
            })
            sendSnackbar(`found ${json.data.countries.length} countries`);
        } catch (error) {
            console.log(error);
        }
    };

    const handleNameInput = (e) => {
        setState({ travellerName: e.target.value });
    };

    const onChange = (e, selectedOption) => {
        selectedOption
            ? setState({
                country: selectedOption
            })
            : setState({
                country: "",
            })
    };

    const onAddClicked = async () => {
        const query = `query { alertsforcountry(country: "${state.country}") {country, text, region, subregion}}`;
        let countryCode = "";
        let advisory = "";
        let region = "";
        let subregion = "";
        try {
            //let response = await fetch('http://localhost:5000/graphql/', {
            let response = await fetch('/graphql/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query,
                })
            })
            let json = await response.json();
            countryCode = json.data.alertsforcountry.country;
            advisory = json.data.alertsforcountry.text;
            region = json.data.alertsforcountry.region;
            subregion = json.data.alertsforcountry.subregion;
        } catch (error) {
            sendSnackbar(error.message);
        }
        let date = new Date();
        let dateString = date.toLocaleDateString() + " " + date.toLocaleTimeString();
        let mutation = `mutation { addadvisory(country: "${countryCode}" name: "${state.country}", text: "${advisory}", date: "${dateString}", region: "${region}", subregion: "${subregion}" travellername:"${state.travellerName}" ) {date} }`;
        try {
            //let response = await fetch('http://localhost:5000/graphql/', {
            let response = await fetch('/graphql/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ query: mutation })
            })
            let json = await response.json();
            let dateSet = json.data.addadvisory.date;
            sendSnackbar(`added advisory on ${dateSet}`);
        } catch (error) {
            sendSnackbar(error.message);
        }
    };

    const sendSnackbar = (msg) => {
        props.snackbarMsg(msg);
    };


    const emptyorundefined =
        state.travellerName === undefined ||
        state.travellerName === "" ||
        state.country === undefined ||
        state.country === "";

    return (
        <MuiThemeProvider theme={theme}>
            <Card>
                <p style={{ textAlign: 'center' }}>
                    {/* // <img src="globe.png" style={{ width: "20vh", marginBottom: 0 }} /> */}
                </p>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                    <div
                        style={{
                            fontSize: "x-large",
                            fontFamily: "verdana",
                            fontWeight: "bold",
                            color: "#555",
                        }}
                    >
                        Location
                    </div>
                </div>
                <div style={{ margin: 20 }}>
                    <Autocomplete
                        options={state.campsites}
                        getOptionLabel={(option) => option}
                        style={{ width: 300 }}
                        onChange={onChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="campsites"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                    />
                    <Button style={{ marginTop: 50, alignContent: "center" }}
                        onClick={onAddClicked}
                        disabled={emptyorundefined}
                        fontSize="large">Add Advisory</Button>

                </div>
            </Card>
        </MuiThemeProvider >
    );
};
export default Location;
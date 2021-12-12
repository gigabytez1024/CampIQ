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

const Location = (props) => {
    const initialState = {
        campgroundNames: [],
        chosenCampground: "",
    };
    const GRAPHURL = "http://localhost:5000/graphql";
    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);
    useEffect(() => {
        fetchCampgrouds();
    }, []);

    const fetchCampgrouds = async () => {
        try {
            let response = await fetch(GRAPHURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    query: 'query{campgrounds{campsitename}}',
                }),
            });
            let json = await response.json();
            let uniqueNames = [
                ...new Set(json.data.campgrounds.map((a) => a.campsitename)),
            ];
            uniqueNames.sort((first, second) =>
                first.localeCompare(second)
            );
            setState({
                campgroundNames: uniqueNames
            });
        } catch (error) {
            console.log(error);
            setState({
                msg: `Problem loading server data - ${error.message}`,
            });
        }
    };

    const onChange = (e, selectedOption) => {
        selectedOption
            ? setState({
                campsite: selectedOption
            })
            : setState({
                campsite: "",
            })
        console.log(state.campsite);
    };

    const chooseCampsite = () => {
        props.campsite(state.campsite);
    }

    const notChosen =
        state.campsite === undefined ||
        state.campsite === "";

    return (
        <MuiThemeProvider theme={theme}>
            <Card>
                <CardHeader title="Location" style={{ textAlign: "center" }} />
                <div style={{ margin: 20 }}>
                    <Autocomplete
                        options={state.campgroundNames}
                        getOptionLabel={(option) => option}
                        style={{ width: '100%' }}
                        onChange={onChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="pick a campsite"
                                variant="filled"
                                fullWidth
                            />
                        )}
                    />
                </div>
                <div style={{ textAlign: "center", paddingBottom: "2vh"}}>
                    <Button
                        variant="contained" 
                        color="secondary" 
                        disabled={notChosen}
                        onClick={chooseCampsite}
                    >
                        Add Review
                    </Button>
                </div>
            </Card>
        </MuiThemeProvider >
    );
};
export default Location;
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
import { Link } from "react-router-dom";

const Location = (props) => {
    const initialState = {
        campsites: ["testcampsite1", "testcampsite2"],
        campsite: "",
    };
    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);
    useEffect(() => {
        //fetchCountries();
    }, []);

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

    const notChosen =
        state.campsite === undefined ||
        state.campsite === "";

    return (
        <MuiThemeProvider theme={theme}>
            <Card>
                <CardHeader title="Location" style={{ textAlign: "center" }} />
                <div style={{ margin: 20 }}>
                    <Autocomplete
                        options={state.campsites}
                        getOptionLabel={(option) => option}
                        style={{ width: '100%' }}
                        onChange={onChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="pick a campsite"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                    />
                    <Link to={{ pathname: "/addreview", state: { campsite: state.campsite, title: "title" } }}>
                        <Button varient="contained" color="secondary" style={{ marginTop: 20, alignContent: "center" }}
                            disabled={notChosen}
                            fontSize="large">Add Review
                        </Button>
                    </Link>

                </div>
            </Card>
        </MuiThemeProvider >
    );
};
export default Location;
import React, { useReducer, useState, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Typography,
    TextField,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@material-ui/core";
import theme from "../theme";

const CreateAccount = () => {

    const initialState = {
        _id: "",
        firstName: "",
        lastName: "",
        streetAddress: "",
        city: "",
        province: "",
        postalCode: "",
        phoneNumber: "",
        email: "",
        password: "",
        showPassword: false
    };

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    const handleChange = (prop) => (event) => {
        setState({ ...state, [prop]: event.target.value });
      };

    // Disable CREATE ACCOUNT button until all input fields are populated
    const emptyorundefined =
        state.firstName === undefined ||
        state.firstName === "" ||
        state.lastName === undefined ||
        state.lastName === "" ||
        state.streetAddress === undefined ||
        state.streetAddress === "" ||
        state.city === undefined ||
        state.city === "" ||
        state.province === undefined ||
        state.province === "" ||
        state.postalCode === undefined ||
        state.postalCode === "" ||
        state.phoneNumber === undefined ||
        state.phoneNumber === "" ||
        state.email === undefined ||
        state.email === "" ||
        state.password === undefined ||
        state.password === "";

    return (
        <MuiThemeProvider theme={theme}>
        <Card>
            <CardHeader title="Create Account" style={{ textAlign: "center", paddingBottom: 0 }} />
            <CardContent style={{ paddingTop: 10}}>
                <TextField
                    autoFocus
                    variant="outlined"
                    size="small"
                    value={state.firstName}
                    onChange={handleChange('firstName')}
                    error={state.firstName === ""}
                    helperText={state.firstName === "" ? "First Name is required" : ""}
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={state.lastName}
                    onChange={handleChange('lastName')}
                    error={state.lastName === ""}
                    helperText="Last Name"
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={state.streetAddress}
                    onChange={handleChange('streetAddress')}
                    error={state.streetAddress === ""}
                    helperText="Street Address"
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={state.city}
                    onChange={handleChange('city')}
                    error={state.city === ""}
                    helperText="City"
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={state.province}
                    onChange={handleChange('province')}
                    error={state.province === ""}
                    helperText="Province"
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={state.postalCode}
                    onChange={handleChange('postalCode')}
                    error={state.postalCode === ""}
                    helperText="Postal Code"
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={state.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    error={state.phoneNumber === ""}
                    helperText="Phone #"
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={state.email}
                    onChange={handleChange('email')}
                    error={state.email === ""}
                    helperText="Email Address"
                />
                <TextField
                    variant="outlined"
                    size="small"
                    value={state.password}
                    onChange={handleChange('password')}
                    error={state.password === ""}
                    helperText="Password"
                />
                <div style={{ textAlign: "center" }}>
                    <Button variant="contained" color="secondary" disabled={emptyorundefined}>
                        Create Account
                    </Button>
                </div>
                <div style={{ flexDirection: "column" }}>
                    {state.firstName}
                    {state.lastName}
                </div>
            </CardContent>
        </Card>
        </MuiThemeProvider>
    );

};

export default CreateAccount;
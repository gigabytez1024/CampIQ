import React, { useReducer } from "react";
import { Link, useHistory } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    TextField,
    Button
} from "@material-ui/core";
import theme from "../theme";
import { registerWithEmailAndPassword } from "../firebase";

const CreateAccount = () => {

    const initialState = {
        _id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        showPassword: false
    };

    const history = useHistory();

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    const handleChange = (prop) => (event) => {
        setState({ ...state, [prop]: event.target.value });
    };

    const register = () => {
        registerWithEmailAndPassword(state.firstName, state.lastName, state.email, state.password);
        history.replace("/login");
    };

    // Disable CREATE ACCOUNT button until all input fields are populated
    const emptyorundefined =
        state.firstName === undefined ||
        state.firstName === "" ||
        state.lastName === undefined ||
        state.lastName === "" ||
        state.email === undefined ||
        state.email === "" ||
        state.password === undefined ||
        state.password === "";

    return (
        <MuiThemeProvider theme={theme}>
        <Card>
            <CardHeader title="Create Account" style={{ textAlign: "center", paddingBottom: 0 }} />
            <CardContent style={{ textAlign: "center", paddingTop: 10}}>
                <TextField
                    autoFocus
                    variant="outlined"
                    size="small"
                    label="First Name"
                    value={state.firstName}
                    onChange={handleChange('firstName')}
                    error={state.firstName === ""}
                    helperText={state.firstName === "" ? "First Name is required" : ""}
                />
                <br/><br/>
                <TextField
                    variant="outlined"
                    size="small"
                    label="Last Name"
                    value={state.lastName}
                    onChange={handleChange('lastName')}
                    error={state.lastName === ""}
                    helperText={state.lastName === "" ? "Last Name is required" : ""}
                />
                <br/><br/>
                <TextField
                    variant="outlined"
                    size="small"
                    label="Email Address"
                    value={state.email}
                    onChange={handleChange('email')}
                    error={state.email === ""}
                    helperText={state.email === "" ? "Email Address is required" : ""}
                />
                <br/><br/>
                <TextField
                    variant="outlined"
                    size="small"
                    label="Password"
                    type="password"
                    value={state.password}
                    onChange={handleChange('password')}
                    error={state.password === ""}
                    helperText={state.password === "" ? "Password is required" : ""}
                />
                <div style={{ textAlign: "center", paddingTop: "2vh" }}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        disabled={emptyorundefined}
                        onClick={register}
                    >
                            Create Account
                    </Button>
                </div>
                <Typography variant="subtitle2" align="center" style={{ paddingTop: "1vh"}}>
                    Already have an account? <Link style={{color: "#5a5149", fontWeight: "bold", textDecoration: "underline" }} 
                        to="/login">Login</Link> now.
                </Typography>
            </CardContent>
        </Card>
        </MuiThemeProvider>
    );
};

export default CreateAccount;
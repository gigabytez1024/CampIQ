import React, { useEffect, useReducer } from "react";
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
import { auth, signInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {

    const initialState = {
        email: "",
        password: ""
    };

    const [user, loading] = useAuthState(auth);
    const history = useHistory();

    const reducer = (state, newState) => ({ ...state, ...newState });
    const [state, setState] = useReducer(reducer, initialState);

    const handleChange = (prop) => (event) => {
        setState({ ...state, [prop]: event.target.value });
    }

    useEffect(() => {
        if (loading) {
        // maybe trigger a loading screen
        return;
        }
        if (user) {
            history.replace("/dashboard");
        }
    }, [user, loading, history]);

    // Disable LOGIN button until all input fields are populated
    const emptyorundefined =
        state.email === undefined ||
        state.email === "" ||
        state.password === undefined ||
        state.password === "";
    
    return (
        <MuiThemeProvider theme={theme}>
        <Card>
            <CardHeader title="Account Login" style={{ textAlign: "center", paddingBottom: 0 }} />
            <CardContent style={{ textAlign: "center", paddingTop: 10}}>
                <TextField
                    autoFocus
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
                        onClick={() => signInWithEmailAndPassword(state.email, state.password)}
                    >
                            Login
                    </Button>
                </div>
                <Typography variant="subtitle2" align="center" style={{ paddingTop: "1vh"}}>
                    <Link style={{color: "#5a5149", fontWeight: "bold", textDecoration: "underline" }} 
                        to="/resetpassword">Forgot Password</Link>
                </Typography>
                <Typography variant="subtitle2" align="center" style={{ paddingTop: "1vh"}}>
                    Don't have an account? <Link style={{color: "#5a5149", fontWeight: "bold", textDecoration: "underline" }} 
                        to="/createaccount">Register</Link> now.
                </Typography>
            </CardContent>
        </Card>
        </MuiThemeProvider>
    );
}

export default Login;
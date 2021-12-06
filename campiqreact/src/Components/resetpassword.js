import React, { useState } from "react";
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
import { sendPasswordResetEmail } from "../firebase";

function ResetPassword() {

    const [email, setEmail] = useState("");
    const history = useHistory();

    const reset = () => {
        sendPasswordResetEmail(email);
        history.replace("/login");
    };

    // Disable RESET PASSWORD button until email field is populated
    const emptyorundefined =
        email === undefined ||
        email === "";

    return (
        <MuiThemeProvider theme={theme}>
        <Card>
            <CardHeader title="Reset Password" style={{ textAlign: "center", paddingBottom: 0 }} />
            <CardContent style={{ textAlign: "center", paddingTop: 10}}>
                <TextField
                        autoFocus
                        variant="outlined"
                        size="small"
                        label="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={email === ""}
                        helperText={email === "" ? "Email Address is required" : ""}
                />
                <div style={{ textAlign: "center", paddingTop: "2vh" }}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        disabled={emptyorundefined}
                        onClick={reset}
                    >
                            Reset Password
                    </Button>
                </div>
                <Typography variant="subtitle2" align="center" style={{ paddingTop: "1vh"}}>
                    Return to <Link style={{color: "#5a5149", fontWeight: "bold", textDecoration: "underline" }} 
                        to="/login">Login</Link> page.
                </Typography>
            </CardContent>
        </Card>
        </MuiThemeProvider>
    );
}

export default ResetPassword;
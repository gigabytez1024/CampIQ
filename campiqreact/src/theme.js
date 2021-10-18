import { createMuiTheme } from '@material-ui/core/styles';
export default createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        "common": { "black": "#000", "white": "#fff" }, "background": { "paper": "rgba(232, 232, 232, 1)", "default": "rgba(255, 255, 255, 1)" }, "primary": { "light": "rgba(179, 203, 232, 1)", "main": "rgba(74, 144, 226, 1)", "dark": "rgba(8, 79, 161, 1)", "contrastText": "#fff" }, "secondary": { "light": "rgba(127, 215, 25, 1)", "main": "rgba(65, 117, 5, 1)", "dark": "rgba(40, 72, 3, 1)", "contrastText": "#fff" }, "error": { "light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff" }, "text": { "primary": "rgba(0, 0, 0, 1)", "secondary": "rgba(74, 74, 74, 1)", "disabled": "rgba(155, 155, 155, 1)", "hint": "rgba(255, 255, 255, 1)" }
    }
});
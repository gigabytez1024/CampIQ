import hexToRgb from "assets/theme/hex-to-rgb.js";

const componentStyles = (theme) => ({
  cardRoot: {
    background:
      "linear-gradient(87deg," +
      theme.palette.primary.main +
      ",#825ee4)!important",
  },
  typographyH6: {
    color: theme.palette.gray[400],
    marginBottom: 0,
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  typographyH1: {
    color: theme.palette.white.main,
    display: "flex",
    justifyContent: "space-between",
  },
  typographyH3: {
    color: theme.palette.white.main,
    display: "block",
  },
  boxImg: {
    verticalAlign: "center",
    borderStyle: "none",
  },
  afterDash: {
    "&:not(:last-child):after": {
      content: "'-'",
      flex: "1 1 auto",
      textAlign: "center",
      position: "relative",
      left: "-2px",
    },
  },
  inputBg: {
    backgroundColor:
      "rgba(" + hexToRgb(theme.palette.primary.inputCredit) + ",.5) !important",
  },
  bgTransparent: {
    backgroundColor: theme.palette.transparent.main,
    color: theme.palette.white.main,
  },
});

export default componentStyles;

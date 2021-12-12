import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons components

// core components

import componentStyles from "assets/theme/components/cards/cards/card-header-list.js";
import componentStylesCardImg from "assets/theme/components/card-img.js";

const useStyles = makeStyles(componentStyles);
const useStylesCardImg = makeStyles(componentStylesCardImg);
CardCampsite.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};
function CardCampsite(props) {
  const { name, date, description, img, link } = props;
  const classes = { ...useStyles(), ...useStylesCardImg() };
  const theme = useTheme();
  return (
    <>
      <Card className={classes.cardRoot}>
        <img
          alt="..."
          src={require(`assets/site${img}.jpg`).default}
          className={classes.cardImgTop}
        />
        <CardContent>
          <Box component={Typography} variant="h2" marginBottom="0!important">
            {name}
          </Box>
          <Box
            component="small"
            fontSize="80%"
            fontWeight="400"
            color={theme.palette.gray[600]}
          >
            by John Snow on {date}
          </Box>
          <Box
            component="p"
            marginBottom="1rem"
            fontWeight="300"
            lineHeight="1.7"
            fontSize="1rem"
            marginTop="1.5rem"
          >
            {description}
          </Box>
          <Button
            variant="text"
            color="primary"
            disableRipple
            component={Box}
            padding="0!important"
          >
            View
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default CardCampsite;

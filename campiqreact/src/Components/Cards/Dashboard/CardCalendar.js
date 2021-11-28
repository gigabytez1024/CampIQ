import React from "react";
// JavaScript library that creates a callendar with events
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment";
// react plugin used to create charts
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
// @material-ui/icons components

// core components

import componentStyles from "assets/theme/components/cards/widgets/card-calendar.js";

const useStyles = makeStyles(componentStyles);

// ##############################
// // // data for populating the calendar in Calendar view
// #############################

var today = new Date();
var y = today.getFullYear();
var m = today.getMonth();

const widgetEvents = [
  {
    title: "My Booking",
    start: new Date().getFullYear() + "-11-21",
    end: new Date().getFullYear() + "-11-27",
    className: "bg-orange",
  },
  {
    title: "Fall Market",
    start: new Date(y, m, 4),
    allDay: true,
    className: "bg-red",
  },
  {
    title: "Black Friday",
    start: new Date(y, m, 26),
    allDay: true,
    className: "bg-blue",
  },
  {
    title: "Cyber Week",
    start: new Date(y, m, 29),
    allDay: true,
    className: "bg-yellow",
  },
];

function CardCalendar() {
  const classes = useStyles();
  const theme = useTheme();
  const widgetCalendarRef = React.useRef(null);
  React.useEffect(() => {
    let calendar = new Calendar(widgetCalendarRef.current, {
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      selectable: true,
      editable: true,
      events: widgetEvents,
      headerToolbar: "",
    });
    calendar.render();
  }, []);
  return (
    <>
      <Card classes={{ root: classes.cardRoot }}>
        <CardHeader
          title={
            <Box component="span" color={theme.palette.gray[600]}>
              {moment().format("YYYY")}
            </Box>
          }
          subheader={moment().format("dddd, MMM D")}
          classes={{ root: classes.cardHeaderRoot }}
          titleTypographyProps={{
            component: Box,
            variant: "h6",
            letterSpacing: ".0625rem",
            marginBottom: ".25rem!important",
            classes: {
              root: classes.textUppercase,
            },
          }}
          subheaderTypographyProps={{
            component: Box,
            variant: "h2",
            marginBottom: "0!important",
            color: "initial",
          }}
        ></CardHeader>
        <CardContent>
          <div ref={widgetCalendarRef} />
        </CardContent>
      </Card>
    </>
  );
}

export default CardCalendar;

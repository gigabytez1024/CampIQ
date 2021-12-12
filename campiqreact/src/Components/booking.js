import React , {useReducer, useEffect} from 'react';
import { Link } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Button, Card, CardHeader, CardContent, TextField} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import theme from "../theme";
import 'react-dropzone-uploader/dist/styles.css'
import "./style.css";

const Booking = () => {

  const initialState = {
    campgroundNames: [],
    campgrounds: [],
    campground: '',
  };

  const reducer = (state, newState) => ({...state, ...newState});
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
      fetchCampgrounds();
  }, []);

  const GRAPHURL = "http://localhost:5000/graphql";
  var queryCampgrounds = `query{campgrounds{campsitename}}`;

  useEffect(() => {
    fetchCampgrounds();
  }, []);

  const fetchCampgrounds = async () => {
    try {
      let response = await fetch(GRAPHURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: queryCampgrounds,
        }),
      });
      let json = await response.json();
      let uniqueNames = [
        ...new Set(json.data.campgrounds.map((a) => a.campsitename)),
      ];
      setState({
        campgrounds: json.data.campgrounds,
        campgroundNames: uniqueNames,
      });
    } catch (error) {
      console.log(error);
      setState({
        msg: `Problem loading server data - ${error.message}`,
      });
    }
  };

  const handleCampgroundSelect = (choice) =>{
    setState({campground: choice.target.textContent});
    navigate();
  }

  useEffect(() => {
    navigate();
  }, [state.campground]);

  const navigate = () => {
    switch(state.campground){
      case "Rockwood":
        var rockwood = "https://www.grcacamping.ca/Web/Facilities/SearchView.aspx"
        window.open(rockwood, "_blank");
      case "Prospect Hill":
        var prospecthill = "https://prospecthillcamping.com/hours-rates-and-availability"
        window.open(prospecthill, "_blank");
      case "Wildwood":
        var wildwood = "https://upperthames.goingtocamp.com/"
        window.open(wildwood, "_blank");
      case "Turkey Point Provincial Park":
        var turkey = "https://reservations.ontarioparks.com/"
        window.open(turkey, "_blank");
      case "Great Canadian Hideaway":
        var gch = "https://www.camplife.com/1085/reservation/step1"
        window.open(gch, "_blank");
      case "Arrowhead Provincial Park":
        var arrowhead = "https://reservations.ontarioparks.com/"
        window.open(arrowhead, "_blank");
      case "Bon Echo Provincial Park":
        var bonecho = "https://reservations.ontarioparks.com/"
        window.open(bonecho, "_blank");
      case "Kakabeka Falls":
        var kakabeka = "https://reservations.ontarioparks.com/"
        window.open(kakabeka, "_blank");
      case "Jordan Valley Campground":
        var jordan = "https://app.fireflyreservations.com/Reserve/Property/JordanValleyCampground?holdExpired=False"
        window.open(jordan, "_blank");
      case "Laurel Creek Conservation Area":
        var laurel = "https://www.grcacamping.ca/Web/"
        window.open(laurel, "_blank");
    }
  }

  return ( 
    <MuiThemeProvider theme={theme}>    
    <Card>
      <CardHeader title="Book Your Trip" style={{ textAlign: "center", paddingBottom: 0 }}/>
      <CardContent align="center">
        <Autocomplete
          options={state.campgroundNames}
          onChange={handleCampgroundSelect}
          style={{width: 300}}
          renderInput={(params) =>(
            <TextField
            {...params}
            label="Select Campground"
            variant="outlined"
            fullWidth/>
          )}
        />
      </CardContent>
      <div style={{ textAlign: "center", paddingTop: "1vh", paddingBottom: "2vh" }}>
        <Button variant="contained" color="secondary" component={Link} to="/dashboard">
            Back to Dashboard
        </Button>
      </div>
    </Card>
    </MuiThemeProvider>
  );
}

export default Booking;
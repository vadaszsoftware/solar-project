import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Slider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import WbSunnyIcon from "@material-ui/icons/WbSunny";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down("xl")]: {
    spacer: {
      height: "22vh",
    },
  },
  [theme.breakpoints.down("lg")]: {
    spacer: {
      height: "18vh",
    },
  },
  [theme.breakpoints.down("md")]: {
    spacer: {
      height: "16vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    spacer: {
      height: "8vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    spacer: {
      height: "6vh",
    },
  },
}));

// Custom Slider bar
const SunlightSlider = withStyles({
  root: {
    height: 8,
  },
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    // color: grey[500],
    backgroundImage: `linear-gradient(.25turn, ${grey[500]}, ${grey[100]})`,
    height: 30,
    borderRadius: 15,
  },
  rail: {
    // color: grey[400],
    backgroundImage: `linear-gradient(.25turn, ${grey[400]}, ${grey[100]})`,
    height: 30,
    borderRadius: 15,
  },
})(Slider);

// Custom Thumb on Slider
function SunThumb(props) {
  return (
    <span {...props}>
      <WbSunnyIcon
        style={{
          height: 100,
          width: 100,
          marginTop: 30,
        }}
      />
    </span>
  );
}

// possible weather
// [ clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night ]

export default function Sunlight(props) {
  const classes = useStyles();
  let solarMessage = "";
  if (props.data.meteo) {
    if (props.data.meteo.cloudCover.value > 0.75) {
      solarMessage = (
        <Typography variant="h1">It's not looking bright today.</Typography>
      );
    } else if (props.data.meteo.cloudCover.value > 0.25) {
      solarMessage = (
        <Typography variant="h1">The sun is being shady.</Typography>
      );
    } else {
      solarMessage = (
        <Typography variant="h1">It's a good time for solar.</Typography>
      );
    }
  }

  return (
    <div>
      <div className={classes.spacer} />
      <div className={classes.slideContainer}>{solarMessage}</div>
      <br />
      <div className={classes.slideContainer} align="center">
        <SunlightSlider
          ThumbComponent={SunThumb}
          value={
            props.data.meteo ? 100 - props.data.meteo.cloudCover.value * 100 : 0
          }
          valueLabelDisplay="on"
        />
        <br />
        <br />
        Current Sunlight
      </div>
    </div>
  );
}

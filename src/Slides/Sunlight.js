import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Slider } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

import WbSunnyIcon from "@material-ui/icons/WbSunny";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
}));

const SunlightSlider = withStyles({
  root: {
    height: 8,
  },
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    color: grey[500],
    height: 18,
    borderRadius: 4,
  },
  rail: {
    color: grey[400],
    height: 18,
    borderRadius: 4,
  },
})(Slider);

function SunThumb(props) {
  return (
    <span {...props}>
      <WbSunnyIcon
        style={{
          height: 50,
          width: 50,
          marginTop: 16,
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
    <React.Fragment>
      <div className={classes.slideContainer}>{solarMessage}</div>
      <br />
      <div className={classes.slideContainer}>
        <SunlightSlider
          ThumbComponent={SunThumb}
          value={
            props.data.meteo ? 100 - props.data.meteo.cloudCover.value * 100 : 0
          }
          valueLabelDisplay="on"
        />
      </div>
    </React.Fragment>
  );
}

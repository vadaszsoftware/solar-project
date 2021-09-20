import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Slider } from "@material-ui/core";

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
    color: "Black",
    height: 18,
    borderRadius: 4,
  },
  rail: {
    color: "Gray",
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

export default function Sunlight(props) {
  const classes = useStyles();
  let data;
  useEffect(() => {
    data = require("../test_data.json");
    data = Math.round(data.meteo.cloudCover.value * 100);
    console.log("Sunlight: ", data);
  });

  return (
    <React.Fragment>
      <div className={classes.slideContainer}>
        <Typography variant="h1">It's a good time for solar.</Typography>
      </div>
      <br />
      <div className={classes.slideContainer}>
        <SunlightSlider
          ThumbComponent={SunThumb}
          defaultValue={50}
          value={data}
          valueLabelDisplay="on"
        />
      </div>
    </React.Fragment>
  );
}

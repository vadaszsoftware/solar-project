import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Slider } from "@material-ui/core";

import WbSunnyIcon from "@material-ui/icons/WbSunny";

import blankImg from "../images/blank.png";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
}));

const SunlightSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    // height: 35,
    // width: 35,
    // backgroundColor: "#fff",
    // border: "2px solid currentColor",
    // marginTop: -8,
    // marginLeft: -12,
    // "&:focus, &:hover, &$active": {
    //   boxShadow: "inherit",
    // },
  },
  active: {},
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
  useEffect(() => {
    props.setAppbarTitle({
      title: "",
      subtitle: "",
      icon: blankImg,
    });
  }, []);
  let data = require("../test_data.json");
  data = data.meteo.cloudCover;
  console.log("Sunlight: ", data);

  return (
    <React.Fragment>
      <div className={classes.slideContainer}>
        <Typography variant="h1">It's a good time for solar.</Typography>
      </div>
      <br />
      <div className={classes.slideContainer}>
        <SunlightSlider ThumbComponent={SunThumb} defaultValue={50} />
      </div>
    </React.Fragment>
  );
}

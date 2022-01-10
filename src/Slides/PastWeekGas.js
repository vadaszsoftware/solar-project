import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    position: "absolute",
    top: "35%",
  },
  portfolioText: {
    fontFamily: "Theinhardt, Roboto",
    display: "inline",
  },
  // [theme.breakpoints.down("xl")]: {
  //   spacer: {
  //     height: "26vh",
  //   },
  // },
  // [theme.breakpoints.down("lg")]: {
  //   spacer: {
  //     height: "22vh",
  //   },
  // },
  // [theme.breakpoints.down("md")]: {
  //   spacer: {
  //     height: "22vh",
  //   },
  // },
  // [theme.breakpoints.down("sm")]: {
  //   spacer: {
  //     height: "22vh",
  //   },
  // },
  // [theme.breakpoints.down("xs")]: {
  //   spacer: {
  //     height: "20vh",
  //   },
  // },
}));

export default function PastWeekGas(props) {
  const classes = useStyles();
  let offset = 0;

  if (props.data.energy.production.daily) {
    let dataArray = props.data.energy.production.daily.values;
    let pastWeek = dataArray
      .slice(dataArray.length - 8, dataArray.length - 1)
      .map((day) => {
        return day.value / 1000;
      });
    let totalkwh = pastWeek.reduce((prevDay, currentDay) => {
      return prevDay + currentDay;
    });
    // console.log("total kwh: ", totalkwh);
    offset = Math.round(
      (props.energyConv.CO2_OFFSET_PER_KWH * totalkwh) /
        props.energyConv.CO2_ADDED_PER_GASOLINE_GAL
    );
    // console.log("offset: ", offset);
  }

  return (
    <div className={classes.slideContainer}>
      <div className={classes.spacer} />
      <Typography variant="h1">
        In the last 7 days we’ve offset {offset} gallons of gasoline.
      </Typography>
    </div>
  );
}

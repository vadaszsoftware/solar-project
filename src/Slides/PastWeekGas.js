import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
  portfolioText: {
    fontFamily: "Theinhardt, Roboto",
    display: "inline",
  },
}));

export default function PastWeekGas(props) {
  const classes = useStyles();
  let offset = 0;

  if (props.data.energy) {
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
      <Typography variant="h1">
        In the last 7 days we’ve offset {offset} gal of gasoline.
      </Typography>
    </div>
  );
}

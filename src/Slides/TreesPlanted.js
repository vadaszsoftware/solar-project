import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
  portfolioText: {
    fontFamily: "Theinhardt, Roboto",
  },
  circleContainer: {
    borderColor: theme.palette.primary.main,
    border: 6,
    display: "inline-block",
    height: 300,
    width: 300,
    lineHeight: 300,
    borderRadius: "50%",
    paddingTop: 5,
  },
}));

export default function TreesPlanted(props) {
  const classes = useStyles();
  const theme = useTheme();

  const treeCalc = (timeFrame) => {
    if (props.data.energy) {
      let dataArray = props.data.energy.production.daily.values;
      let totalkwh;
      if (timeFrame === "week") {
        totalkwh = dataArray.slice(dataArray.length - 8, dataArray.length - 1);
      } else if (timeFrame === "month") {
        totalkwh = dataArray;
      } else if (timeFrame === "allTime") {
        totalkwh = props.data.energy.production.allTime.value;
        return (
          (props.energyConv.CO2_OFFSET_PER_KWH * totalkwh) /
          props.energyConv.CO2_OFFSET_PER_TREE /
          1000
        ).toFixed(1);
      } else {
        return 0;
      }

      totalkwh = totalkwh
        .map((day) => {
          return day.value / 1000;
        })
        .reduce((prevDay, currentDay) => {
          return prevDay + currentDay;
        });
      return (
        (props.energyConv.CO2_OFFSET_PER_KWH * totalkwh) /
        props.energyConv.CO2_OFFSET_PER_TREE
      ).toFixed(1);
    }
  };

  return (
    <div className={classes.slideContainer} align="center">
      <Box
        borderColor={theme.palette.primary.main}
        border={6}
        display="inline-block"
        height={325}
        width={325}
        lineHeight={325}
        borderRadius="50%"
        paddingTop={10}
        marginLeft={3}
        marginRight={3}
      >
        <Typography variant="h1" className={classes.portfolioText}>
          {treeCalc("week")}
        </Typography>
        <Typography variant="h5" className={classes.portfolioText}>
          Last 7 days
        </Typography>
      </Box>

      <Box
        borderColor={theme.palette.primary.main}
        border={6}
        display="inline-block"
        height={325}
        width={325}
        lineHeight={325}
        borderRadius="50%"
        paddingTop={10}
        marginLeft={3}
        marginRight={3}
      >
        <Typography variant="h1" className={classes.portfolioText}>
          {treeCalc("month")}
        </Typography>
        <Typography variant="h5" className={classes.portfolioText}>
          Last 30 days
        </Typography>
      </Box>

      <Box
        borderColor={theme.palette.primary.main}
        border={6}
        display="inline-block"
        height={325}
        width={325}
        lineHeight={325}
        borderRadius="50%"
        paddingTop={10}
        marginLeft={3}
        marginRight={3}
      >
        <Typography variant="h1" className={classes.portfolioText}>
          {treeCalc("allTime")} k
        </Typography>
        <Typography variant="h5" className={classes.portfolioText}>
          All Time
        </Typography>
      </Box>
    </div>
  );
}

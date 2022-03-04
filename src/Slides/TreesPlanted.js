import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
  portfolioText: {
    fontFamily: "Theinhardt, Roboto",
  },
  [theme.breakpoints.down("xl")]: {
    spacer: {
      height: "24vh",
    },
  },
  [theme.breakpoints.down("lg")]: {
    spacer: {
      height: "18vh",
    },
  },
  [theme.breakpoints.down("md")]: {
    spacer: {
      height: "18vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    spacer: {
      height: "6vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    spacer: {
      height: "0vh",
    },
  },
}));

const circleSize = 250;

export default function TreesPlanted(props) {
  const classes = useStyles();
  const theme = useTheme();

  const treeCalc = (timeFrame) => {
    if (props.data.energy.production.daily) {
      let dataArray = props.data.energy.production.daily.values;
      let totalkwh;
      if (timeFrame === "week") {
        totalkwh = dataArray.slice(dataArray.length - 8, dataArray.length - 1);
      } else if (timeFrame === "month") {
        totalkwh = dataArray.slice(0, 29);
        // console.log(totalkwh);
      } else if (timeFrame === "allTime") {
        // returns early
        totalkwh = props.data.energy.production.allTime.value / 1000;
        return Math.round(
          (props.energyConv.CO2_OFFSET_PER_KWH * totalkwh) /
            props.energyConv.CO2_OFFSET_PER_TREE
        ).toLocaleString("en-US");
      } else {
        return 0;
      }

      // for week and month only
      totalkwh = totalkwh
        .map((day) => {
          return day.value;
        })
        .reduce((prevDay, currentDay) => {
          return prevDay + currentDay;
        });
      totalkwh = totalkwh / 1000;
      // console.log(totalkwh);
      return (
        (props.energyConv.CO2_OFFSET_PER_KWH * totalkwh) /
        props.energyConv.CO2_OFFSET_PER_TREE
      )
        .toFixed(1)
        .toLocaleString("en-US");
    }
  };

  let allTimeTrees = treeCalc("allTime");

  return (
    <Container className={classes.slideContainer} align="center">
      <div className={classes.spacer} />
      <Box
        borderColor={theme.palette.primary.main}
        border={6}
        display="inline-block"
        height={circleSize}
        width={circleSize}
        lineHeight={circleSize}
        borderRadius="50%"
        paddingTop={8}
        marginLeft={3}
        marginRight={3}
      >
        <Typography variant="h2" className={classes.portfolioText}>
          {treeCalc("week")}
        </Typography>
        <Typography variant="h5" className={classes.portfolioText}>
          Last 7 Days
        </Typography>
      </Box>

      <Box
        borderColor={theme.palette.primary.main}
        border={6}
        display="inline-block"
        height={circleSize}
        width={circleSize}
        lineHeight={circleSize}
        borderRadius="50%"
        paddingTop={8}
        marginLeft={3}
        marginRight={3}
      >
        <Typography variant="h2" className={classes.portfolioText}>
          {treeCalc("month")}
        </Typography>
        <Typography variant="h5" className={classes.portfolioText}>
          Last 30 Days
        </Typography>
      </Box>

      <Box
        borderColor={theme.palette.primary.main}
        border={6}
        display="inline-block"
        height={circleSize}
        width={circleSize}
        lineHeight={circleSize}
        borderRadius="50%"
        paddingTop={8}
        marginLeft={3}
        marginRight={3}
      >
        {allTimeTrees && allTimeTrees.length > 4 ? (
          <Typography
            variant="h2"
            className={classes.portfolioText}
            style={{ fontSize: 57 }}
          >
            {allTimeTrees}K
          </Typography>
        ) : (
          <Typography variant="h2" className={classes.portfolioText}>
            {allTimeTrees} K
          </Typography>
        )}
        <Typography variant="h5" className={classes.portfolioText}>
          All Time
        </Typography>
      </Box>
    </Container>
  );
}

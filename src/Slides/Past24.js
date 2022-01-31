import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("xl")]: {
    spacer: {
      height: "18vh",
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
      height: "16vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    spacer: {
      height: "16vh",
    },
  },
}));

export default function Past24(props) {
  const classes = useStyles();
  const theme = useTheme();

  let yesterday = 0;
  if (props.data.energy.production.daily) {
    let dataArray = props.data.energy.production.daily.values;
    yesterday =
      Math.round((dataArray[dataArray.length - 2].value / 1000) * 100) / 100;
    // console.log("Data array: ", dataArray);
    // console.log("yesterday: ", yesterday);
  }

  return (
    <div className={classes.slideContainer} align="center">
      <div className={classes.spacer} />
      <Box
        borderColor={theme.palette.primary.main}
        border={7}
        display="block"
        height={450}
        width={450}
        lineHeight={450}
        borderRadius="50%"
        paddingTop={12}
      >
        <Typography variant="h1">
          {Math.round(yesterday)} <span style={{ fontSize: 50 }}>kWh</span>
        </Typography>
        <Typography
          variant="h4"
          style={{
            fontFamily: "Theinhardt, Roboto",
            marginTop: 16,
          }}
        >
          Yesterday we <br />
          generated {yesterday} kWh
        </Typography>
      </Box>
    </div>
  );
}

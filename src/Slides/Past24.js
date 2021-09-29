import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
}));

export default function Past24(props) {
  const classes = useStyles();
  const theme = useTheme();

  let yesterday = 0;
  if (props.data.energy) {
    let dataArray = props.data.energy.production.daily.values;
    yesterday =
      Math.round((dataArray[dataArray.length - 2].value / 1000) * 100) / 100;
    // console.log("Data array: ", dataArray);
    // console.log("yesterday: ", yesterday);
  }

  return (
    <div className={classes.slideContainer} align="center">
      <Box
        borderColor={theme.palette.primary.main}
        border={7}
        display="block"
        height={500}
        width={500}
        lineHeight={500}
        borderRadius="50%"
        paddingTop={15}
      >
        <Typography variant="h1">
          {yesterday} <span style={{ fontSize: 50 }}>kWh</span>
        </Typography>
        <Typography
          variant="h4"
          style={{
            fontFamily: "Theinhardt, Roboto",
            marginTop: 16,
          }}
        >
          In the last 24 hours we <br />
          have generated {yesterday} kWh
        </Typography>
      </Box>
    </div>
  );
}

import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

import lightningSymbol from "../images/lightning_lightmode.png";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
}));

export default function Past24(props) {
  const classes = useStyles();
  const theme = useTheme();
  useEffect(() => {
    props.setAppbarTitle({
      title: "24hr solar generation",
      subtitle: "",
      icon: lightningSymbol,
    });
  });

  let data = require("../test_data.json");
  data = data.power.production;
  data.name = "Power Generated";
  console.log("Power Production: ", data);

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
        <Typography variant="h1">649 kWh</Typography>
        <Typography variant="h4">
          In the last 24 hours we <br />
          have generated 649 kWh
        </Typography>
      </Box>
    </div>
  );
}

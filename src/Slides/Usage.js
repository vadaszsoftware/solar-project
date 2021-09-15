import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import blankImg from "../images/blank.png";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
}));

export default function Usage(props) {
  const classes = useStyles();
  // const theme = useTheme();
  useEffect(() => {
    props.setAppbarTitle({
      title: "",
      subtitle: "",
      icon: blankImg,
    });
  });
  let data = require("../test_data.json");
  data = data.power.production;
  data.name = "Power Generated";
  console.log("Power Production: ", data);

  return (
    <div className={classes.slideContainer}>
      <Typography variant="h1">
        79% of our energy needs are being met by the sun.
      </Typography>
    </div>
  );
}

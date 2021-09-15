import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

import gascanIcon from "../images/gascan.png";

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
  useEffect(() => {
    props.setAppbarTitle({
      title: "",
      subtitle: "",
      icon: gascanIcon,
    });
  }, []);

  return (
    <div className={classes.slideContainer}>
      <Typography variant="h1">
        In the last 7 days we’ve offset 973 gal of gasoline.
      </Typography>
    </div>
  );
}

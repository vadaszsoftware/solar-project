import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
}));

export default function Usage(props) {
  const classes = useStyles();

  return (
    <div className={classes.slideContainer}>
      <Typography variant="h1">
        79% of our energy needs are being met by the sun.
      </Typography>
    </div>
  );
}

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function Power() {
  const classes = useStyles();

  return <div className={classes.root}>POWER</div>;
}

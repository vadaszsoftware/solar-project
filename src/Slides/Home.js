import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(6),
  },
}));

export default function Home(props) {
  const classes = useStyles();
  props.setAppbarTitle("");

  return (
    <div className={classes.slideContainer}>
      <Typography variant="h1">
        Emory University is creating a brighter future through renewable energy.
      </Typography>
    </div>
  );
}

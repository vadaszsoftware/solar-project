import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: theme.spacing(6),
  },
}));

export default function Home(props) {
  const classes = useStyles();
  props.setAppbarTitle("");

  return (
    <Paper className={classes.paperContainer} elevation="1">
      <Typography variant="h1">
        Emory University is creating a brighter future through renewable energy.
      </Typography>
    </Paper>
  );
}

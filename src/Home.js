import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            elevation="1"
            style={{
              padding: 60,
            }}
          >
            <Typography variant="h1">
              Emory University is creating a brighter future through renewable
              energy.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

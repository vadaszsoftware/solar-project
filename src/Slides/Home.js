import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(6),
  },
  [theme.breakpoints.down("xl")]: {
    spacer: {
      height: "20vh",
    },
  },
  [theme.breakpoints.down("lg")]: {
    spacer: {
      height: "18vh",
    },
  },
  [theme.breakpoints.down("md")]: {
    spacer: {
      height: "16vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    spacer: {
      height: "8vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    spacer: {
      height: "6vh",
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();
  let name = "";
  if (props.orgData.orgName) {
    name = props.orgData.orgName;
  }

  return (
    <div className={classes.slideContainer}>
      <div className={classes.spacer} />
      <Typography variant="h1">
        {name} is creating a brighter future through renewable energy.
      </Typography>
    </div>
  );
}

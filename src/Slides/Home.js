import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import blankImg from "../images/blank.png";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(6),
  },
}));

export default function Home(props) {
  const classes = useStyles();
  useEffect(() => {
    props.setAppbarTitle({
      title: "",
      subtitle: "",
      icon: blankImg,
    });
  });

  return (
    <div className={classes.slideContainer}>
      <Typography variant="h1">
        Emory University is creating a brighter future through renewable energy.
      </Typography>
    </div>
  );
}

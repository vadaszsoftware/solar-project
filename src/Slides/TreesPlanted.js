import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

import leafIcon from "../images/leaf.png";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(4),
  },
  portfolioText: {
    fontFamily: "Theinhardt, Roboto",
  },
  circleContainer: {
    borderColor: theme.palette.primary.main,
    border: 6,
    display: "inline-block",
    height: 300,
    width: 300,
    lineHeight: 300,
    borderRadius: "50%",
    paddingTop: 5,
  },
}));

export default function TreesPlanted(props) {
  const classes = useStyles();
  const theme = useTheme();
  useEffect(() => {
    props.setAppbarTitle({
      title: "Equivalent Trees Planted",
      subtitle: "",
      icon: leafIcon,
    });
  }, []);

  return (
    <div className={classes.slideContainer} align="center">
      <Box
        borderColor={theme.palette.primary.main}
        border={6}
        display="inline-block"
        height={325}
        width={325}
        lineHeight={325}
        borderRadius="50%"
        paddingTop={10}
        marginLeft={3}
        marginRight={3}
      >
        <Typography variant="h1" className={classes.portfolioText}>
          132
        </Typography>
        <Typography variant="h5" className={classes.portfolioText}>
          Last 7 days
        </Typography>
      </Box>

      <Box
        borderColor={theme.palette.primary.main}
        border={6}
        display="inline-block"
        height={325}
        width={325}
        lineHeight={325}
        borderRadius="50%"
        paddingTop={10}
        marginLeft={3}
        marginRight={3}
      >
        <Typography variant="h1" className={classes.portfolioText}>
          1,401
        </Typography>
        <Typography variant="h5" className={classes.portfolioText}>
          Last 30 days
        </Typography>
      </Box>

      <Box
        borderColor={theme.palette.primary.main}
        border={6}
        display="inline-block"
        height={325}
        width={325}
        lineHeight={325}
        borderRadius="50%"
        paddingTop={10}
        marginLeft={3}
        marginRight={3}
      >
        <Typography variant="h1" className={classes.portfolioText}>
          12.6 k
        </Typography>
        <Typography variant="h5" className={classes.portfolioText}>
          All Time
        </Typography>
      </Box>
    </div>
  );
}

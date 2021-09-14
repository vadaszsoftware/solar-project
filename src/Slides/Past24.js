import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

import lightningSymbol from "../images/lightning_lightmode.png";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    padding: theme.spacing(2),
  },
}));

export default function Past24(props) {
  const classes = useStyles();
  const theme = useTheme();
  props.setAppbarTitle("24hr solar generation");
  props.setAppbarIcon(lightningSymbol);
  let data = require("../test_data.json");
  data = data.power.production;
  data.name = "Power Generated";
  console.log("Power Production: ", data);

  return (
    <React.Fragment>
      <Paper className={classes.paperContainer}>
        <RadialBarChart
          width={730}
          height={500}
          innerRadius="40%"
          outerRadius="60%"
          data={[data]}
        >
          <RadialBar
            minAngle={15}
            label={{
              fill: "Black",
              position: "insideStart",
            }}
            background
            clockWise={true}
            dataKey="value"
            fill={theme.palette.primary.main}
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </Paper>
    </React.Fragment>
  );
}

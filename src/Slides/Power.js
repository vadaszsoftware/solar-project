import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { RadialBarChart, RadialBar, Legend, Tooltip } from "recharts";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
}));

export default function Power(props) {
  const classes = useStyles();
  const theme = useTheme();
  let data;
  useEffect(() => {
    data = require("../test_data.json");
    data = data.power.production;
    data.name = "Power Generated";
    console.log("Power Production: ", data);
  }, []);

  return (
    <React.Fragment>
      <div className={classes.slideContainer}>
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
      </div>
    </React.Fragment>
  );
}

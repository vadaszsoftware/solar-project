import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip,
} from "recharts";

import calIcon from "../images/calendar_darkmode.png";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
}));

let data = require("../test_data.json");
data = data.energy.production.daily.values;
data.name = "Power Generated";
console.log("Power Production: ", data);

export default function PastMonthBars(props) {
  const classes = useStyles();
  const theme = useTheme();
  let data;
  useEffect(() => {
    props.setAppbarTitle({
      title: "Solar Energy Produced",
      subtitle: "We offset 124 gallons of gasoline over the last 7 days",
      icon: calIcon,
    });
  }, []);

  return (
    <div className={classes.slideContainer}>
      <Box textAlign="center">
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={theme.palette.primary.main} />
        </BarChart>
      </Box>
    </div>
  );
}

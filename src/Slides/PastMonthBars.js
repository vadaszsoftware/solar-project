import React from "react";
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

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
}));

export default function PastMonthBars(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.slideContainer}>
      <Box textAlign="center">
        <BarChart width={730} height={250} data={[]}>
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

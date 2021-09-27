import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  BarChart,
  XAxis,
  Bar,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
}));

export default function PastMonthBars(props) {
  const classes = useStyles();
  const theme = useTheme();

  // default data
  let data = [];
  // data from API
  if (props.data.energy) {
    let dataArray = props.data.energy.production.daily.values;
    data = dataArray.map((day) => {
      // console.log("before: ", day);
      return {
        name: new Date(`${day.date.year}-${day.date.month}-${day.date.day}`)
          .toString()
          .slice(0, 3),
        kWh: Math.round(day.value / 1000),
      };
    });
    // console.log("bargraph: ", data);
    //   .map((day) => {
    //     return day.value / 1000;
    //   });
    // let totalkwh = pastWeek.reduce((prevDay, currentDay) => {
    //   return prevDay + currentDay;
    // });
    // let offset = Math.round(
    //   (props.energyConv.CO2_OFFSET_PER_KWH * totalkwh) /
    //     props.energyConv.CO2_ADDED_PER_GASOLINE_GAL
    // );
  }

  return (
    <div className={classes.slideContainer}>
      <ResponsiveContainer width="95%" height={500}>
        <BarChart data={data}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="kWh" fill={theme.palette.primary.main} radius={50}>
            <LabelList dataKey="kWh" position="insideBottom" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

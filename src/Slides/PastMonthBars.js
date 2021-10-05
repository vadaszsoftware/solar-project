import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  BarChart,
  XAxis,
  Bar,
  ResponsiveContainer,
  LabelList,
  Legend,
} from "recharts";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
}));

export default function PastMonthBars(props) {
  const classes = useStyles();
  const theme = useTheme();

  // Custom labels for Bar Chart
  const customLabelList = (props) => {
    // console.log("custom label list data: ", data);
    const { x, y, value } = props;
    // console.log(props);
    return (
      <g>
        <text
          textAnchor="middle"
          scaleToFit={true}
          x={x}
          y={y}
          fill={theme.palette.text.primary}
          style={{
            fontFamily: "Theinhardt, Roboto",
          }}
        >
          {value}
        </text>
        <text
          x={x}
          y={y + 15}
          fill={theme.palette.text.primary}
          style={{
            fontFamily: "Theinhardt, Roboto",
          }}
        >
          kWh
        </text>
      </g>
    );
  };

  // default data
  let data = [];
  let dataMaxValue;
  let dataCurrentValue;
  // data from API
  if (props.data.energy) {
    let dataArray = props.data.energy.production.daily.values;
    dataCurrentValue = dataArray[dataArray.length - 1];
    console.log("current value: ", dataCurrentValue.value / 1000);
    data = dataArray.map((day) => {
      // console.log(
      //   "DATE: ",
      //   new Date(`${day.date.year}-${day.date.month}-${day.date.day}`).getDate()
      // );
      return {
        name: new Date(
          `${day.date.year}-${day.date.month}-${day.date.day}`
        ).getDate(),
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
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            style={{
              fill: theme.palette.text.primary,
              fontWeight: "bold",
              fontFamily: "Theinhardt, Roboto",
            }}
          />
          <Bar
            dataKey="kWh"
            fill={theme.palette.primary.main}
            radius={50}
            maxBarSize={50}
          >
            <LabelList
              dataKey="kWh"
              position="top"
              style={{
                fontFamily: "Theinhardt, Roboto",
              }}
              formatter={(value) => {
                // console.log(value);
                // if ()
                return value;
              }}
              // content={customLabelList}
            />
          </Bar>
          {/* <Legend iconType="circle" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

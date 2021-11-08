import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  BarChart,
  XAxis,
  Bar,
  ResponsiveContainer,
  LabelList,
  Cell,
  YAxis,
} from "recharts";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("xl")]: {
    spacer: {
      height: "22vh",
    },
  },
  [theme.breakpoints.down("lg")]: {
    spacer: {
      height: "18vh",
    },
  },
  [theme.breakpoints.down("md")]: {
    spacer: {
      height: "18vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    spacer: {
      height: "16vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    spacer: {
      height: "16vh",
    },
  },
}));

export default function PastMonthBars(props) {
  const classes = useStyles();
  const theme = useTheme();

  // Custom labels for Bar Chart
  // const customLabelList = (props) => {
  //   // console.log("custom label list data: ", data);
  //   const { x, y, value } = props;
  //   // console.log(props);
  //   return (
  //     <g>
  //       <text
  //         textAnchor="middle"
  //         scaleToFit={true}
  //         x={x}
  //         y={y}
  //         fill={theme.palette.text.primary}
  //         style={{
  //           fontFamily: "Theinhardt, Roboto",
  //         }}
  //       >
  //         {value}
  //       </text>
  //       <text
  //         x={x}
  //         y={y + 15}
  //         fill={theme.palette.text.primary}
  //         style={{
  //           fontFamily: "Theinhardt, Roboto",
  //         }}
  //       >
  //         kWh
  //       </text>
  //     </g>
  //   );
  // };

  // default data
  let data = [];
  let dataMaxValue = 0;
  let dataCurrentValue = 0;
  // data from API
  if (props.data.energy) {
    let dataArray = props.data.energy.production.daily.values;
    dataCurrentValue = Math.round(dataArray[dataArray.length - 1].value / 1000);
    dataMaxValue = Math.round(
      dataArray.reduce((prev, current) => {
        // console.log("prev: ", prev.value);
        // console.log("current: ", current.value);
        if (prev.value > current.value) return prev;
        else return current;
      }).value / 1000
    );
    // console.log("current value: ", dataCurrentValue.value / 1000);
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
      <div className={classes.spacer} />
      <ResponsiveContainer width="100%" height={400}>
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
            height={25}
          />
          <YAxis hide padding={{ top: 15 }} />
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
                fill: theme.palette.text.primary,
                fontFamily: "Theinhardt, Roboto",
                fontWeight: "bold",
              }}
              formatter={(value) => {
                // console.log("value: ", value);
                // console.log("dataMaxValue: ", dataMaxValue);
                if (value === dataMaxValue || value === dataCurrentValue)
                  return `${value} kWh`;
                else return "";
              }}
              // content={customLabelList}
            />
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`rgba(255,193,7, ${index / 30 + 0.3})`}
                maxBarSize={50}
              />
            ))}
          </Bar>
          {/* <Legend iconType="circle" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

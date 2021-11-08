import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BarChart, XAxis, Bar, LabelList, Cell, YAxis } from "recharts";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("xl")]: {
    spacer: {
      height: "14vh",
    },
  },
  [theme.breakpoints.down("lg")]: {
    spacer: {
      height: "10vh",
    },
  },
  [theme.breakpoints.down("md")]: {
    spacer: {
      height: "10vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    spacer: {
      height: "14vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    spacer: {
      height: "18vh",
    },
  },
}));

export default function PastWeekBars(props) {
  const classes = useStyles();
  const theme = useTheme();

  // Custom labels for Bar Chart
  const customLabelList = (props) => {
    // console.log("custom label list data: ", data);
    const { x, value } = props;
    // console.log(props);
    return (
      <g>
        <text
          x={x + 17}
          y={370}
          fill={theme.palette.text.primary}
          style={{
            fontFamily: "Theinhardt, Roboto",
            fontSize: 30,
            fontWeight: 500,
          }}
        >
          {value}
        </text>
        <text
          x={x + 20}
          y={388}
          fill={theme.palette.text.primary}
          style={{
            fontFamily: "Theinhardt, Roboto",
            fontSize: 18,
          }}
        >
          kWh
        </text>
      </g>
    );
  };

  // default data
  let data = [];
  // data from API
  if (props.data.energy) {
    let dataArray = props.data.energy.production.daily.values;
    data = dataArray
      .slice(dataArray.length - 8, dataArray.length - 1)
      .map((day) => {
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
    <div className={classes.slideContainer} align="center">
      <div className={classes.spacer} />
      <BarChart data={data} height={450} minWidth={600} width={700}>
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
        <YAxis hide padding={{ top: 0 }} />
        <Bar
          dataKey="kWh"
          fill={theme.palette.primary.main}
          radius={50}
          barSize={70}
        >
          <LabelList dataKey="kWh" content={customLabelList} />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`rgba(255,193,7, ${index / 7 + 0.3})`}
              barSize={70}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
}

import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BarChart, XAxis, Bar, LabelList } from "recharts";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
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
          y={480}
          fill={theme.palette.text.primary}
          style={{
            fill: "black",
            fontFamily: "Theinhardt, Roboto",
            fontSize: 30,
            fontWeight: 500,
          }}
        >
          {value}
        </text>
        <text
          x={x + 20}
          y={498}
          fill={theme.palette.text.primary}
          style={{
            fill: "black",
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
      <BarChart data={data} height={550} minWidth={600} width={700} margin={0}>
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
        {/* <Tooltip /> */}
        <Bar
          dataKey="kWh"
          fill={theme.palette.primary.main}
          radius={50}
          barSize={70}
        >
          <LabelList dataKey="kWh" content={customLabelList} />
        </Bar>
      </BarChart>
    </div>
  );
}

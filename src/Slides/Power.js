import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import {
  ResponsiveContainer,
  Legend,
  RadialBar,
  RadialBarChart,
  Cell,
  LabelList,
} from "recharts";

import lightningSymbol from "../images/lightning_lightmode.png";

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
      height: "20vh",
    },
  },
  [theme.breakpoints.down("md")]: {
    spacer: {
      height: "20vh",
    },
  },
  [theme.breakpoints.down("sm")]: {
    spacer: {
      height: "20vh",
    },
  },
  [theme.breakpoints.down("xs")]: {
    spacer: {
      height: "18vh",
    },
  },
}));

const customLegend = (props) => {
  const { payload } = props;
  // console.log("beep boop: ", payload);
  return (
    <div align="center">
      {payload.map((entry, index) => {
        if (entry.value === "Power") {
          return (
            <Typography
              key={`text-${index}`}
              variant="h3"
              style={{
                fontFamily: "Theinhardt, Roboto",
                color: grey[500],
                marginTop: -66,
              }}
            >
              <img
                key={`img-${index}`}
                alt="lightning bolt"
                src={lightningSymbol}
                width="18"
                height="36"
              />{" "}
              {entry.payload.value} w
            </Typography>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default function Power(props) {
  const classes = useStyles();
  const theme = useTheme();

  // Custom label for Radial Bar Chart
  const customLabelList = (props) => {
    // console.log("custom label list data: ", data);
    const { cx, cy, value, name } = props;

    if (name === "Power") {
      return (
        <g>
          <text
            x={cx - 80}
            y={cy}
            fill={theme.palette.primary.main}
            style={{
              fontFamily: "Theinhardt, Roboto",
              fontSize: 85,
            }}
          >
            {Math.round(
              (value / data.find((i) => i.name === "Total Potential").value) *
                100
            )}
            %
          </text>
          <text
            x={cx - 80}
            y={cy + 40}
            fill={theme.palette.text.primary}
            style={{
              fontFamily: "Theinhardt, Roboto",
              fontSize: 27,
            }}
          >
            of peak power
          </text>
        </g>
      );
    } else {
      return null;
    }
  };

  // default data
  let data = [
    { name: "Total Potential", value: 10000 },
    { name: "Power", value: 8000 },
  ];
  // data from API
  if (props.data.power) {
    data = [
      {
        name: "Total Potential",
        value: props.info.capacity - props.data.power.production.value,
      },
      { name: "Power", value: props.data.power.production.value },
    ];
  }

  // Radial Bar Chart
  return (
    <React.Fragment>
      <div className={classes.spacer} />
      <div className={classes.slideContainer}>
        <ResponsiveContainer width="100%" height={420}>
          <RadialBarChart
            data={data}
            innerRadius={100}
            outerRadius={250}
            startAngle={90}
            endAngle={450}
          >
            <RadialBar
              dataKey="value"
              cornerRadius="50%"
              background
              isAnimationActive={false}
            >
              {data.map((entry, index) => {
                // console.log(entry);
                if (entry.name === "Power") {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={theme.palette.primary.main}
                    />
                  );
                } else {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill="rgba(0, 0, 0, 0)"
                      background={false}
                    />
                  );
                }
              })}
              <LabelList content={customLabelList} />
            </RadialBar>
            <Legend verticalAlign="top" content={customLegend} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  );
}

/*

// formatter
const renderColorfulLegendText = (value: string, entry: any) => {
  const { color } = entry;

  return <span style={{ color }}>{value}</span>;
};


  // Custom label for Pie chart pieces
  const customLabel = ({ x, y, name, value }) => {
    return (
      <text
        x={x}
        y={y - 10}
        fill={theme.palette.text.primary}
        textAnchor="start"
        dominantBaseline="central"
        style={{
          fontFamily: "Theinhardt, Roboto",
        }}
      >
        {name === "Power" ? `${value} w` : ""}
      </text>
    );
  };


  
  // Pie Chart
  return (
    <React.Fragment>
      <div className={classes.slideContainer}>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx={"50%"}
              cy={"50%"}
              innerRadius={135}
              outerRadius={200}
              // fill="#8884d8"
              startAngle={90}
              endAngle={450}
              // paddingAngle={1}
              // label={customLabel}
              // labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  cornerRadius={entry.name === "Power" ? "50%" : "0%"}
                />
              ))}
            </Pie>
            <Legend verticalAlign="top" content={customLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  );

*/

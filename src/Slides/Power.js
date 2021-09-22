import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { amber, grey } from "@material-ui/core/colors";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    padding: theme.spacing(2),
  },
}));

// Colors of pie chart pieces
const COLORS = [amber[500], grey[500]];

export default function Power(props) {
  const classes = useStyles();
  const theme = useTheme();

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

  let data = [
    { name: "Power", value: 8000 },
    { name: "Remaining Potential", value: 10000 - 8000 },
  ];
  if (props.data.power) {
    data = [
      { name: "Power", value: props.data.power.production.value },
      {
        name: "Remaining Potential",
        value: props.info.capacity - props.data.power.production.value,
      },
    ];
  }

  return (
    <React.Fragment>
      <div className={classes.slideContainer}>
        <ResponsiveContainer width="100%" height={600}>
          <PieChart>
            <Pie
              data={data}
              cx={"50%"}
              cy={"50%"}
              innerRadius={150}
              outerRadius={200}
              fill="#8884d8"
              paddingAngle={1}
              dataKey="value"
              // label={customLabel}
              // labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend verticalAlign="top" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  );
}

/*


  return (
    <React.Fragment>
      <div className={classes.slideContainer}>
        <RadialBarChart
          width={730}
          height={500}
          innerRadius="40%"
          outerRadius="60%"
          // data={props.data ? props.data.power.production.value : 0}
          data={50}
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

*/

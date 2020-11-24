import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const getLineChart = (chartData) => {
  return (
    <LineChart
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
        name={`value in ${chartData[0].description}`}
      />
      {/* <Line type="monotone" dataKey="value" stroke="#82ca9d" /> */}
    </LineChart>
  );
};

export default getLineChart;

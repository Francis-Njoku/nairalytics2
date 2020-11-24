import React from "react";

import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const getBarChart = (chartData) => {
  return (
    <BarChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="pv" fill="#8884d8" /> */}
      <Bar
        dataKey="value"
        fill="#82ca9d"
        name={`value in ${chartData[0].description}`}
      />
    </BarChart>
  );
};

export default getBarChart;

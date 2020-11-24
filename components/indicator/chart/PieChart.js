import React from "react";

import { PieChart, Pie } from "recharts";

const getPieChart = (chartData) => {
  return (
    <PieChart data={chartData}>
      <Pie
        data={chartData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
      />
      {/* <Pie
          data={chartData}
          dataKey="pv"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={120}
          outerRadius={160}
          fill="#82ca9d"
          label
        /> */}
    </PieChart>
  );
};

export default getPieChart;

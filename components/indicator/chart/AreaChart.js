import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const getAreaChart = (chartData) => {
  return (
    <AreaChart
      data={chartData}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#BD43E2A3" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#BD43E2A3" stopOpacity={0} />
        </linearGradient>
        {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22D1D1" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#22D1D1" stopOpacity={0} />
          </linearGradient> */}
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
        name={`value in ${chartData[0].description}`}
      />
      {/* <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        /> */}
      <Legend />
    </AreaChart>
  );
};

export default getAreaChart;

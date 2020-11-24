import React, { useState } from "react";
import classnames from "classnames";
import { ResponsiveContainer } from "recharts";
import ChartFooter from "./chart/Footer";
import ChartHeader from "./chart/Header";

import getBarChart from "./chart/BarChart";
import getLineChart from "./chart/LineChart";
import getPieChart from "./chart/PieChart";
import getAreaChart from "./chart/AreaChart";

import ExpandIcon from "../../assets/images/icons/expand.svg";
import FullScreenIcon from "../../assets/images/icons/fullscreen.svg";

const now = new Date().getUTCFullYear();

const years = Array(now - (now - 15))
  .fill("")
  .map((_, index) => now - index);
  
const dataTypes = ["Macro", "Corporate", "Research"];

const Chart = ({ chartData }) => {
  const [year, setYear] = useState(now);
  const [dataType, setDataType] = useState("macro");
  const [dataTypeDropdownIsOpen, setDataTypeDropdownIsOpen] = useState(false);
  const [yearDropdownIsOpen, setYearDropdownIsOpen] = useState(false);
  const [chartType, setChartType] = useState("area");
  const [isExpanded, setIsExpanded] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const toggleDataTypeDropdown = () => {
    setDataTypeDropdownIsOpen(
      (dataTypeDropdownIsOpen) => !dataTypeDropdownIsOpen
    );
  };

  const toggleYearDropdown = () => {
    setYearDropdownIsOpen((yearDropdownIsOpen) => !yearDropdownIsOpen);
  };

  const toggleIsExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  const getExpandIcon = () =>
    isExpanded ? (
      <FullScreenIcon className="chart__header__filter__expand__icon" />
    ) : (
      <ExpandIcon className="chart__header__filter__expand__icon" />
    );

  const getChart = () => {
    switch (chartType) {
      case "bar":
        return getBarChart(chartData);
      case "line":
        return getLineChart(chartData);
      case "pie":
        return getPieChart(chartData);
      default:
        return getAreaChart(chartData);
    }
  };

  return (
    <div
      className={classnames("chart", {
        "chart--expanded": isExpanded,
      })}
    >
      <ChartHeader
        {...{
          year,
          years,
          setYear,
          startDate,
          setStartDate,
          endDate,
          setEndDate,
          dataTypeDropdownIsOpen,
          toggleDataTypeDropdown,
          yearDropdownIsOpen,
          toggleYearDropdown,
          dataType,
          dataTypes,
          setDataType,
          toggleIsExpanded,
          getExpandIcon,
          chartType,
          setChartType,
        }}
      />
      <div className="chart__body">
        <ResponsiveContainer>{getChart()}</ResponsiveContainer>
      </div>
      <ChartFooter />
    </div>
  );
};

export default Chart;

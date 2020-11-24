import React from "react";

const ChartFooter = () => {
  return (
    <div className="chart__footer">
      <span className="chart__heading">Displayed Indicators</span>
      <ul className="chart__indicators">
        <li className="chart__indicator">
          <span className="chart__indicator__color circle purple"></span>
          <span className="chart__indicator__label">
            Real GDP Value (Annually)
          </span>
        </li>
        <li className="chart__indicator">
          <span className="chart__indicator__color circle green"></span>
          <span className="chart__indicator__label">
            Real GDP Value (Annually)
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ChartFooter;

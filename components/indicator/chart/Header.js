import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ShareButtons from "../../ShareButtons";
import SearchIcon from "../../../assets/images/icons/search.svg";
import LineChartIcon from "../../../assets/images/icons/line-chart.svg";
import BarChartIcon from "../../../assets/images/icons/bar-chart.svg";
import PieChartIcon from "../../../assets/images/icons/pie-chart.svg";
import DatePicker from "react-datepicker";
import classnames from "classnames";

const ChartHeader = ({
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
}) => (
  <div className="chart__header">
    <div className="chart__header__filter">
      <div className="chart__header__filter__items">
        <div className="chart__header__filter__item">
          <Dropdown
            isOpen={dataTypeDropdownIsOpen}
            toggle={toggleDataTypeDropdown}
            className="chart__header__dropdown"
          >
            <DropdownToggle className="chart__header__dropdown__toggle" caret>
              Data Type: {dataType}
            </DropdownToggle>
            <DropdownMenu className="chart__header__dropdown__menu">
              {dataTypes.map((item, index) => (
                <DropdownItem
                  className="chart__header__dropdown__link"
                  key={index}
                  onClick={() => {
                    setDataType(item);
                  }}
                >
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="chart__header__filter__item">
          <div className="input-group input-group--with-border panel__main__search">
            <input
              type="text"
              placeholder="Search all indicators"
              className="form-control form__input form__input--no-border form__input--with-append"
            />
            <div className="input-group-append form__append">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={toggleIsExpanded}
        className="chart__header__filter__expand"
      >
        {getExpandIcon()}
      </button>
    </div>
    <div className="chart__header__meta">
      <div className="chart__header__meta__sections">
        <div className="chart__header__meta__section">
          <div className="chart__header__meta__filter">
            <div className="chart__header__meta__filter__item">
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
                className="chart__header__meta__filter__input"
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start date"
              />
            </div>
            <div className="chart__header__meta__filter__item">
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date);
                }}
                className="chart__header__meta__filter__input"
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End date"
              />
            </div>
          </div>
        </div>
        <div className="chart__header__meta__section">
          <div className="chart__header__meta__filter">
            <div className="chart__header__meta__filter__options">
              <button className="chart__header__meta__filter__option">
                1d
              </button>
              <button className="chart__header__meta__filter__option">
                5d
              </button>
              <button className="chart__header__meta__filter__option">
                1m
              </button>
              <button className="chart__header__meta__filter__option">
                3m
              </button>
              <button className="chart__header__meta__filter__option">
                6m
              </button>
            </div>
          </div>
        </div>
        <div className="chart__header__meta__section">
          <Dropdown
            isOpen={yearDropdownIsOpen}
            toggle={toggleYearDropdown}
            className="chart__header__dropdown chart__header__dropdown--small"
          >
            <DropdownToggle className="chart__header__dropdown__toggle" caret>
              Year: {year}
            </DropdownToggle>
            <DropdownMenu className="chart__header__dropdown__menu">
              {years.map((item, index) => (
                <DropdownItem
                  className="chart__header__dropdown__link"
                  key={index}
                  onClick={() => {
                    setYear(item);
                  }}
                >
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="chart__header__meta__section">
          <div className="chart__header__meta__filter">
            <span className="chart__header__meta__filter__label">
              Chart Type:
            </span>
            <div className="chart__header__meta__filter__options">
              <button
                onClick={() => {
                  setChartType("area");
                }}
                className={classnames("chart__header__meta__filter__option", {
                  active: chartType === "area",
                })}
              >
                <LineChartIcon className="chart__header__meta__filter__option__icon" />
              </button>
              <button
                onClick={() => {
                  setChartType("line");
                }}
                className={classnames("chart__header__meta__filter__option", {
                  active: chartType === "line",
                })}
              >
                <LineChartIcon className="chart__header__meta__filter__option__icon" />
              </button>
              <button
                onClick={() => {
                  setChartType("bar");
                }}
                className={classnames("chart__header__meta__filter__option", {
                  active: chartType === "bar",
                })}
              >
                <BarChartIcon className="chart__header__meta__filter__option__icon" />
              </button>
              <button
                onClick={() => {
                  setChartType("pie");
                }}
                className={classnames("chart__header__meta__filter__option", {
                  active: chartType === "pie",
                })}
              >
                <PieChartIcon className="chart__header__meta__filter__option__icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="chart__header__meta__sections">
        <div className="chart__header__meta__section">
          <div className="chart__header__meta__filter">
            <span className="chart__header__meta__filter__label">
              Export Data As:
            </span>
            <div className="chart__header__meta__filter__options">
              <button className="chart__header__meta__filter__option chart__header__meta__filter__option--u">
                pdf
              </button>
              <button className="chart__header__meta__filter__option chart__header__meta__filter__option--u">
                xls
              </button>
              <button className="chart__header__meta__filter__option chart__header__meta__filter__option--u">
                csv
              </button>
              <button className="chart__header__meta__filter__option chart__header__meta__filter__option--u">
                txt
              </button>
            </div>
          </div>
        </div>
        <div className="chart__header__meta__section">
          <ShareButtons size={"small"} />
        </div>
      </div>
    </div>
    <div className="chart__header__extra">
      <span className="chart__header__extra__text">
        Source: National Bureau of Statistics
      </span>
    </div>
  </div>
);

export default ChartHeader;

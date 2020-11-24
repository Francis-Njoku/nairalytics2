import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  CardBody,
  Card,
} from "reactstrap";
import Search from "../../assets/images/icons/search.svg";
import Link from "next/link";
import classnames from "classnames";

const sluggify = (inputString) =>
  inputString.toLowerCase().replace(/\s/gi, "-");

const indicatorTypes = ["macro", "corporate", "intelligence"];

const getActiveNav = (activeItem) => {
  if (!activeItem) return 0;
  const activeItemIndex = indicatorTypes.indexOf(activeItem);
  if (activeItemIndex === -1) return 0;
  return activeItemIndex;
};

const dataItems = [
  "Macro-economic",
  "Corporate",
  "Market Intelligence/ Research",
];

const DataType = ({ activeItem, indicators }) => {
  const [activeNavIndex, setActiveNavIndex] = useState(
    getActiveNav(activeItem)
  );

  const [activeCollapse, setActiveCollapse] = useState(0);

  const [activeNav, setActiveNav] = useState(dataItems[activeNavIndex]);

  const [navDropdownOpen, setNavDropdownOpen] = useState(false);

  const toggleNavDropdown = () => setNavDropdownOpen((prevState) => !prevState);

  const allDataTypes = indicators[indicatorTypes[activeNavIndex]];

  const [searchQuery, setSearchQuery] = useState("");

  const toggleNav = (item) => {
    if (activeNav !== item) setActiveNav(item);
    setActiveNavIndex(dataItems.indexOf(item));
    setSearchQuery("");
  };

  const toggleCollapse = (val) => {
    setActiveCollapse(val === activeCollapse ? "" : val);
  };

  return (
    <section className="section section--center">
      <div className="row justify-content-center">
        <div className="col">
          <div className="panel">
            <div className="panel__side">
              <h2 className="panel__title">Data Type</h2>
              <Dropdown
                isOpen={navDropdownOpen}
                toggle={toggleNavDropdown}
                className="panel__dropdown"
              >
                <DropdownToggle className="panel__dropdown__toggle" caret>
                  {activeNav}
                </DropdownToggle>
                <DropdownMenu className="panel__dropdown__menu">
                  {dataItems.map((item, index) => (
                    <DropdownItem
                      className="panel__dropdown__link"
                      key={index}
                      onClick={() => {
                        toggleNav(item);
                      }}
                    >
                      {item}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <ul className="nav flex-column panel__nav">
                {dataItems.map((item, index) => (
                  <li className="nav-item panel__nav__item" key={index}>
                    <button
                      className={classnames(
                        { "panel__nav__link--active": activeNav === item },
                        "nav-link panel__nav__link"
                      )}
                      onClick={() => {
                        toggleNav(item);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel__main">
              <div className="panel__main__head">
                <div className="input-group input-group--with-border panel__main__search">
                  <input
                    type="text"
                    value={searchQuery}
                    placeholder="Search all indicators"
                    className="form-control form__input form__input--no-border form__input--with-append"
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                    }}
                  />
                  <div className="input-group-append form__append">
                    <Search />
                  </div>
                </div>
              </div>
              <div className="panel__main__body">
                <ul className="accordion">
                  {allDataTypes
                    .filter((dataType) =>
                      dataType.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    )
                    .map((item, index) => (
                      <li className="accordion__item" key={index}>
                        <button
                          className="accordion__btn"
                          onClick={() => toggleCollapse(index)}
                        >
                          <span className="accordion__btn__title">
                            {item.name}
                          </span>
                          <span className="accordion__btn__icon">
                            {activeCollapse === index ? "—" : "+"}
                          </span>
                        </button>
                        <Collapse
                          isOpen={activeCollapse === index}
                          className="accordion__collapse"
                        >
                          <Card className="accordion__card">
                            <CardBody className="accordion__card__body">
                              <ul style={{ listStyleType: "none" }}>
                                {item.datasets.map((dataset, index) => (
                                  <li
                                    key={index}
                                    style={{ margin: "0 0 10px 0" }}
                                  >
                                    <Link
                                      href={`/indicator/${sluggify(dataset)}`}
                                    >
                                      <a>{dataset}</a>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </CardBody>
                          </Card>
                        </Collapse>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataType;

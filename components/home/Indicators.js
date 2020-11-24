import React, { useState } from "react";
import Link from "next/link";
import { Nav, TabContent, TabPane } from "reactstrap";
import IndicatorNavLink from "./IndicatorNavLink";
import BoxIcon from "../../assets/images/icons/box.svg";

const Indicators = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const currentQuarter = Math.floor((new Date().getMonth() + 3) / 3);
  const currentYear = new Date().getFullYear();

  return (
    <div className="row mt-5 mb-5">
      <div className="col-md-4 col-sm-4 mb-5">
        <Nav tabs className="nav-pills flex-column tab">
          <IndicatorNavLink
            tabIndex="1"
            toggle={toggle}
            activeTab={activeTab}
            linkName="Macro-Economic"
          />
          <IndicatorNavLink
            tabIndex="2"
            toggle={toggle}
            activeTab={activeTab}
            linkName="Corporate"
          />
          <IndicatorNavLink
            tabIndex="3"
            toggle={toggle}
            activeTab={activeTab}
            linkName="Market Intelligence / Research"
          />
        </Nav>
      </div>
      <div className="col-md-8 col-sm-8">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="items">
              <div className="item">
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <Link href="/indicator/crude-oil-export">
                  <a>
                    <div className="item__details">
                      <h3 className="item__title">Crude Oil Export</h3>
                      <p className="item__description">
                        Nigeria’s Crude Oil Export
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="item">
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <Link href="/indicator/crude-oil-price">
                  <a>
                    <div className="item__details">
                      <h3 className="item__title">Crude Oil Price</h3>
                      <p className="item__description">
                        Nigeria’s Crude Oil Price
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="item">
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <Link href="/indicator/all-items">
                  <a>
                    {" "}
                    <div className="item__details">
                      <h3 className="item__title">Inflation Rates</h3>
                      <p className="item__description">
                        All Items Inflation Rates
                      </p>
                    </div>{" "}
                  </a>
                </Link>
              </div>
              <div className="item">
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <Link href="/indicator/treasury-bill">
                  <a>
                    <div className="item__details">
                      <h3 className="item__title">Treasury Bill</h3>
                      <p className="item__description">Treasury Bill Rates</p>
                    </div>{" "}
                  </a>
                </Link>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="items">
              <div className="item">
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <div className="item__details">
                  <h3 className="item__title">PBT</h3>
                  <p className="item__description">Profit Before Tax Report</p>
                </div>
              </div>
              <div className="item">
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <div className="item__details">
                  <h3 className="item__title">Healthcare</h3>
                  <p className="item__description">
                    {`Healthcare Report (Q${currentQuarter} ${currentYear})`}
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <div className="item__details">
                  <h3 className="item__title">Oil and Gas</h3>
                  <p className="item__description">
                    {`Oil and Gas Report (Q${currentQuarter} ${currentYear})`}
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <div className="item__details">
                  <h3 className="item__title">Financial Services</h3>
                  <p className="item__description">
                    {`Financial Services Report (Q${currentQuarter} ${currentYear})`}
                  </p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="items">
              <div className="item">
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <div className="item__details">
                  <h3 className="item__title">Household</h3>
                  <p className="item__description">Household Market Survey</p>
                  {/* <div className="row"> */}
                  {/* <div className="col text-right">
                            <Link className="link" to="blog">
                              <ExternalLink className="link__icon" />
                            </Link>
                          </div> */}
                  {/* </div> */}
                </div>
              </div>
              <div className="item" style={{ visibility: "hidden" }}>
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <div className="item__details">
                  {/* <h3 className="item__title">CPI</h3> */}
                  <p className="item__description">
                    {/* CPI and Inflation Report (April 2020) */}
                  </p>
                </div>
              </div>
              <div className="item" style={{ visibility: "hidden" }}>
                <Link href="blog-post">
                  <a>
                    {" "}
                    <div className="item__icon">
                      <BoxIcon />
                    </div>
                    <div className="item__details">
                      <h3 className="item__title">
                        {/* Foreign Trade in Goods */}
                      </h3>
                      <p className="item__description">
                        {/* Nigeria’s Gross Domestic Product Report (Q1 2020) */}
                      </p>
                    </div>{" "}
                  </a>
                </Link>
              </div>
              <div className="item" style={{ visibility: "hidden" }}>
                <div className="item__icon">
                  <BoxIcon />
                </div>
                <div className="item__details">
                  {/* <h3 className="item__title">Capital Importation</h3> */}
                  <p className="item__description">
                    {/* Capital Importation (Q1 2020) */}
                  </p>
                </div>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default Indicators;

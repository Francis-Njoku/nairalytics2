import React from "react";
import { NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const IndicatorNavLink = ({ tabIndex, toggle, activeTab, linkName }) => {
  return (
    <NavItem className="tab__item">
      <NavLink
        className={classnames(
          {
            active: activeTab === tabIndex,
          },
          "tab__link"
        )}
        onClick={() => {
          toggle(tabIndex);
        }}
      >
        {linkName}
      </NavLink>
    </NavItem>
  );
};

export default IndicatorNavLink;

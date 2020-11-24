import React from "react";
import Link from "next/link";
import { NavItem } from "reactstrap";
import classnames from "classnames";

const MenuItem = ({ href, closeDropdown, active, name, isLogin = false }) => (
  <NavItem className="header__navbar__nav__item">
    <Link onClick={closeDropdown} href={href}>
      <a
        className={classnames(
          "header__navbar__nav__link",
          { active },
          {
            "header__navbar__nav__link header__navbar__nav__link--login header__navbar__nav__link--login--web": isLogin,
          }
        )}
      >
        {name}
      </a>
    </Link>
  </NavItem>
);
export default MenuItem;

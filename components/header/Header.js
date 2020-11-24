import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Collapse, Navbar, Nav } from "reactstrap";
import classnames from "classnames";
import Logo from "../../assets/images/logo-blue.svg";
import MenuIcon from "../../assets/images/icons/menu.svg";
import CrossIcon from "../../assets/images/icons/cross.svg";
import MenuItem from "./MenuItem";

const Header = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentLocation = window.location.pathname;
    setActiveLink(currentLocation.split("/")[1]);
  }, []);

  const toggleDropdown = () => {
    setDropdownIsOpen((dropdownIsOpen) => !dropdownIsOpen);
  };

  const closeDropdown = () => {
    setDropdownIsOpen(false);
  };

  const getMenuIcon = () =>
    dropdownIsOpen ? <CrossIcon className="small" /> : <MenuIcon />;

  const isActiveLink = (link) => activeLink === link;

  return (
    <header className="header">
      <Navbar className="header__navbar" expand="md">
        <Link onClick={closeDropdown} href="/">
          <a className="navbar-brand">
            <Logo className="logo" alt="logo" />
          </a>
        </Link>
        <Link onClick={closeDropdown} href="/login">
          <a className="header__navbar__nav__link header__navbar__nav__link--login header__navbar__nav__link--login--mobile ml-auto">
            Login
          </a>
        </Link>
        <button
          className={classnames(
            "btn d-md-none p-0 ml-3 header__navbar__toggler",
            {
              "header__navbar__toggler--open": dropdownIsOpen,
            }
          )}
          type="button"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        >
          {getMenuIcon()}
        </button>
        <Collapse
          isOpen={dropdownIsOpen}
          navbar
          className={classnames("header__navbar__collapse", {
            "header__navbar__collapse--open": dropdownIsOpen,
          })}
        >
          <Nav className="ml-auto header__navbar__nav" navbar>
            <MenuItem
              href="/"
              active={activeLink === "home" || activeLink === ""}
              closeDropdown={closeDropdown}
              name="Home"
            />
            <MenuItem
              href="/about-us"
              active={isActiveLink("about-us")}
              closeDropdown={closeDropdown}
              name="About Us"
            />
            <MenuItem
              href="/services"
              active={isActiveLink("services")}
              closeDropdown={closeDropdown}
              name="Services"
            />
            <MenuItem
              href="/contact-us"
              active={isActiveLink("contact-us")}
              closeDropdown={closeDropdown}
              name="Contact Us"
            />
            <MenuItem
              href="/login"
              active={false}
              closeDropdown={closeDropdown}
              isLogin={true}
              name="Login"
            />
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};
export default Header;

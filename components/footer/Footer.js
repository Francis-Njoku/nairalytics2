import React from "react";
import CompanyDetails from "./CompanyDetails";
import HelpfulLinks from "./HelpfulLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import companyLinks from "../../lib/companyLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="row align-items-start ">
          <div className="col-md-4 mr-auto">
            <CompanyDetails />
          </div>
          {companyLinks.map((companyLink, index) => (
            <HelpfulLinks key={index} {...companyLink} />
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <div className="row align-items-md-center  justify-content-md-between">
          <div className="col-md-7">
            <p className="footer__copy">
              Copyright {currentYear} © By Nairametrics. All Rights Reserved.
            </p>
          </div>
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

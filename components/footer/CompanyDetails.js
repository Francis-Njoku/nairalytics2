import React from 'react';
import ExternalFooterLink from "./ExternalFooterLink";
import Logo from "../../assets/images/logo-white.svg";

const CompanyDetails = () => (
  <div className="footer__section">
    <Logo className="footer__logo logo" alt="logo" />
    <p className="footer__contact">
      30 Felicia Koleosho Street, Off Agbaoku Street, Opebi, Allen, Ikeja,
      Lagos, Nigeria.
    </p>
    <ul className="footer__list">
      <ExternalFooterLink
        href="tel:+234 809 1098 777"
        text="+234 809 1098 777"
      />
      <ExternalFooterLink
        href="tel:+234 814 5000 098"
        text="+234 814 5000 098"
      />
      <ExternalFooterLink
        href="mailto:outreach@nairametrics.com"
        text="outreach@nairametrics.com"
      />
    </ul>
  </div>
);

export default CompanyDetails;
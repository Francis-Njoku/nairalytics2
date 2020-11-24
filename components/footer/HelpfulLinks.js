import React from "react";
import InternalFooterLink from "./InternalFooterLink";

const HelpfulLinks = ({ linkName, links }) => (
  <div className="col-6 col-md-2">
    <div className="footer__section">
      <h6 className="footer__section__title">{linkName}</h6>
      <ul className="footer__list">
        {links.map((link, index) => (
          <InternalFooterLink key={index} {...link} />
        ))}
      </ul>
    </div>
  </div>
);

export default HelpfulLinks;

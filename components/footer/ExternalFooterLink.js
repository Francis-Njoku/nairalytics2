import React from "react";
const ExternalFooterLink = ({ href, text }) => (
  <li className="footer__list__item">
    <a href={href} className="footer__link">
      {text}
    </a>
  </li>
);
export default ExternalFooterLink;

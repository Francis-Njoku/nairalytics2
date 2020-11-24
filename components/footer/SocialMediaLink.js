import React from "react";

import Facebook from "../../assets/images/icons/facebook.svg";
import Twitter from "../../assets/images/icons/twitter.svg";
import LinkedIn from "../../assets/images/icons/linkedin.svg";
import Instagram from "../../assets/images/icons/instagram.svg";

const getMediaIcon = (iconName) => {
  switch (iconName) {
    case "Facebook":
      return <Facebook />;
    case "Twitter":
      return <Twitter />;
    case "LinkedIn":
      return <LinkedIn />;
    case "Instagram":
      return <Instagram />;
    default:
      return;
  }
};

const SocialMediaLink = ({ name, href }) => {
  return (
    <li className="footer__social__item">
      <a className="footer__social__link " href={href}>
          {getMediaIcon(name)}
        <span className="sr-only">`${name} Page`</span>
      </a>
    </li>
  );
};

export default SocialMediaLink;

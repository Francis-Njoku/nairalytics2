import React from "react";
import classnames from "classnames";

import ShareIcon from "../assets/images/icons/share.svg";
import Facebook from "../assets/images/icons/facebook.svg";
import Twitter from "../assets/images/icons/twitter.svg";
import LinkedIn from "../assets/images/icons/linkedin.svg";
import Instagram from "../assets/images/icons/instagram.svg";

const ShareButtons = ({ size }) => (
  <div className={classnames("share", size)}>
    <label className="share__label">
      {/* <ShareIcon /> */}
      <span className="sr-only">Facebook Page</span>
    </label>
    <ul className="share__list">
      <li className="share__item">
        <a className="share__link " href="/">
          <Facebook />
          <span className="sr-only">Facebook Page</span>
        </a>
      </li>
      <li className="share__item">
        <a className="share__link " href="/">
          <Twitter />
          <span className="sr-only">Twitter Page</span>
        </a>
      </li>
      <li className="share__item">
        <a className="share__link " href="/">
          <LinkedIn />
          <span className="sr-only">LinkedIn Page</span>
        </a>
      </li>
      <li className="share__item">
        <a className="share__link " href="/">
          <Instagram />
          <span className="sr-only">Instagram Page</span>
        </a>
      </li>
    </ul>
  </div>
);

export default ShareButtons;

import React from "react";
import mediaOutlets from "../../lib/socialMediaDetails";
import SocialMediaLink from "./SocialMediaLink";

const SocialMediaLinks = () => (
  <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
    <ul className="footer__social">
      {mediaOutlets.map((outlet, index) => (
        <SocialMediaLink key={index} {...outlet} />
      ))}
    </ul>
  </div>
);

export default SocialMediaLinks;

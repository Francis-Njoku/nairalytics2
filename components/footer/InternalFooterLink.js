import Link from "next/link";
import React from "react";

const InternalFooterLink = ({ href, text }) => (
  <li className="footer__list__item">
    <Link href={href}>
      <a className="footer__link">{text}</a>
    </Link>
  </li>
);

export default InternalFooterLink;

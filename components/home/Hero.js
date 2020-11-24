import React from "react";
import Link from "next/link";

const Hero = () => (
  <section className="hero">
    <div className="hero__overlay"></div>
    <div className="hero__content">
      <h1 className="hero__heading">
        Get accurate data to help make economic decisions.
      </h1>
      <hr className="hr" />
      <p className="hero__sub-heading">
        We provide data to drive financial decisions for businesses and private
        enterprise by aggregating
        <em>
          <Link href="/data-type/macro">
            <a> macro-economic indicators</a>
          </Link>
        </em>
        ,
        <em>
          <Link href="/data-type/corporate">
            <a> corporate data </a>
          </Link>
        </em>
        and providing bespoke
        <em>
          <Link href="/data-type/intelligence">
            <a> market intelligence and research</a>
          </Link>
        </em>
        .
      </p>
    </div>
  </section>
);

export default Hero;

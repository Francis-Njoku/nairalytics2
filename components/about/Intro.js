import React from 'react';

const Intro = () => (
  <section className="section ">
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col mb-3">
          <h1 className="h1 mb-5">About Us</h1>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>
            Nairalytics is a repository of financial, market and macro-economic
            data from the Nigerian economy. We provide our subscribers with
            timely access to insightful and actionable macroeconomic data,
            corporate finance data, consumer price data, and pricing analytics.
          </p>
          <p>
            Our data sources include but are not limited to Nigerian Bureau of
            Statistics, Central Bank of Nigeria, Security and Exchange
            Commission Nigeria, Debt Management Office, and World Bank among
            other local and international bodies. Furthermore, we also
            commission independent research organizations to generate, verify
            and publish bespoke data and insights.
          </p>
        </div>
        <div className="col-md-6">
          <figure className="figure">
            <img className="figure__img" src='/images/ian.png' alt="Ian" />
          </figure>
        </div>
      </div>
    </div>
  </section>
);

 export default Intro;
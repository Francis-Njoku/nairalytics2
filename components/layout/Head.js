import React from "react";
import Head from "next/head";

const LayoutHead = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle}- Nairalytics</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default LayoutHead;

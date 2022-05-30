import React from "react";
import "flowbite";
import Head from "next/head";

// components
import Header from "../components/baselayout/Header";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const BaseLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Listen</title>
        <meta name="description" content="Listen is a music player." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;

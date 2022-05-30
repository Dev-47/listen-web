import React from "react";
// import "flowbite";
import Head from "next/head";

// components
import Header from "../components/baselayout/Header";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

const BaseLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className="bg-[#181818] text-gray-100 h-[100vh]">
      <Head>
        <title>Listen</title>
        <meta name="description" content="Listen is a music player." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;

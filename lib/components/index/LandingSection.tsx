import React from "react";
import Image from "next/image";

// assets
import logo from "../../assets/logo.png";

const LandingSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[88vh] landing">
      <Image src={logo} alt="Listen logo" width={300} height={300} />
      <h1 className="text-3xl font-bold text-center">Listen</h1>
      <p className="text-center text-gray-500">
        A music player for your browser.
      </p>
    </section>
  );
};

export default LandingSection;

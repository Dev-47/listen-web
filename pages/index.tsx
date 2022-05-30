import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BaseLayout from "../lib/layouts/BaseLayout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div className="text-red-900">hello world</div>
    </BaseLayout>
  );
};

export default Home;

import type { NextPage } from "next";
import Image from "next/image";

// layouts
import BaseLayout from "../lib/layouts/BaseLayout";

// components
import LandingSection from "../lib/components/index/LandingSection";
import ActivePageMenu from "../lib/components/baselayout/ActivePageMenu";
import TableSection from "../lib/components/index/TableSection";

// icons

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <LandingSection />
      <main className="main text-white flex">
        <ActivePageMenu />
        <section className="w-[80%] px-8">
          <div>
            <img
              src="https://via.placeholder.com/1100x350.png?text=Music+Cover"
              alt="music cover"
              className="h-80 w-full"
            />
          </div>
          <TableSection />
        </section>
      </main>
    </BaseLayout>
  );
};

export default Home;

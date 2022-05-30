import React from "react";
import ActivePageMenu from "../lib/components/baselayout/ActivePageMenu";
import BaseLayout from "../lib/layouts/BaseLayout";

const Music = () => {
  return (
    <BaseLayout>
      <main className="flex text-white">
        <ActivePageMenu />
      </main>
    </BaseLayout>
  );
};

export default Music;

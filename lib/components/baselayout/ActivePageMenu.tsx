import Image from "next/image";

// component
import ActivePage from "../index/ActivePage";

// icons
import { MdOutlineHome } from "react-icons/md";

// images
import logo from "../../assets/logo.png";

const ActivePageMenu = () => {
  return (
    <section className="flex-col-center space-y-14 w-[20%] px-8">
      <div className="w-full">
        <ActivePage href="/">
          <MdOutlineHome size="1.5rem" />
          <span>Home</span>
        </ActivePage>
        <ActivePage href="/music">
          <MdOutlineHome size="1.5rem" />
          <span>Home</span>
        </ActivePage>
        <ActivePage href="/music">
          <MdOutlineHome size="1.5rem" />
          <span>Home</span>
        </ActivePage>
        <ActivePage href="/music">
          <MdOutlineHome size="1.5rem" />
          <span>Home</span>
        </ActivePage>
      </div>
      <Image src={logo} alt="logo" className="mt-10 w-full" />
    </section>
  );
};

export default ActivePageMenu;

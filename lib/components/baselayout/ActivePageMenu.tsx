// component
import ActivePage from "../index/ActivePage";

// icons
import { MdOutlineHome } from "react-icons/md";

const ActivePageMenu = () => {
  return (
    <section className="flex-col-center w-[20%] px-8">
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
    </section>
  );
};

export default ActivePageMenu;

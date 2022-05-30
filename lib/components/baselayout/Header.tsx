import React from "react";

// icons
import { MdNotificationsNone, MdSearch } from "react-icons/md";

const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between place-items-center px-10 py-4">
      <h1 className="text-3xl font-bold h1 pl-10">LISTEN</h1>
      <nav className="flex-center space-x-8">
        <form className="relative">
          <input
            type="text"
            className="h-10 rounded-md border-none outline-none bg-gray-700 backdrop-blur-lg active:border-none focus:border-none"
            placeholder="Search"
          />
          <button
            type="button"
            className="rounded-full h-2 w-2 absolute right-7 top-2"
          >
            <MdSearch size="1.6rem" color="white" fontWeight="100" />
          </button>
        </form>
        <span className="relative">
          <MdNotificationsNone size="1.6rem" />
          <span className="bg-red-500 rounded-full h-2 w-2 absolute top-0 right-1"></span>
        </span>
      </nav>
    </header>
  );
};

export default Header;

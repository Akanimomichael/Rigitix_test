// Header.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2">
      {/* Search Bar */}
      <div className="relative flex grow items-center">
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full py-2 pl-10 pr-4 border rounded-lg text-gray-700 placeholder-gray-400 outline-none focus:border-gray-300"
        />
      </div>

      {/* Notification Icon */}
      <button className="ml-10 text-gray-500 hover:text-gray-700">
        <FontAwesomeIcon icon={faBell} size="lg" />
      </button>
    </header>
  );
};

export default Header;

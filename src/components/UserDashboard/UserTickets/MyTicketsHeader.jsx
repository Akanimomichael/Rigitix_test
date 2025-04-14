// MyTicketsHeader.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MyTicketsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4">
      {/* Left Section: Title & Subtitle */}
      <div>
        <h2 className="text-xl font-semibold">My Tickets</h2>
        <p className="text-sm text-gray-500">
          Here’s whats happening with your tickets.
        </p>
      </div>

      {/* Right Section: Search & Filter */}
      <div className="flex items-center gap-2 mt-3 md:mt-0">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md py-2 pl-10 pr-3 w-64 outline-none 
                       focus:ring-2 focus:ring-orange-400"
          />
          {/* Font Awesome Search Icon */}
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>

        {/* Filter Button */}
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold 
                           px-6 py-2 rounded-md"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default MyTicketsHeader;

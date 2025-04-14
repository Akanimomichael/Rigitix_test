// MyTicketsEmptyState.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const MyTicketsEmptyState = () => {
  return (
    <div className="w-full p-6">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">My Tickets</h1>
      <p className="text-gray-500 mb-8">
        Here’s whats happening with your tickets.
      </p>

      {/* Empty State Illustration */}
      <div className="flex flex-col items-center justify-center mt-12">
        {/* Icon Circle */}
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 mb-4">
          <FontAwesomeIcon icon={faWallet} className="text-gray-400 text-3xl" />
        </div>

        {/* Message */}
        <p className="text-gray-500 mb-2">
          You don’t have any tickets currently.{" "}
          <a href="#explore" className="text-blue-500 underline">
            Explore
          </a>{" "}
          the available events and buy a ticket to see it here.
        </p>
      </div>
    </div>
  );
};

export default MyTicketsEmptyState;

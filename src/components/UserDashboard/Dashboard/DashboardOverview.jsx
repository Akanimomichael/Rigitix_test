// DashboardOverview.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTicket,
  faDollarSign,
  faHeart,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const DashboardOverview = () => {
  return (
    <div className="w-full p-4 bg-white rounded-md">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Dashboard Overview
      </h1>

      {/* Subtext */}
      <p className="text text-gray-600 mb-6">
        Welcome back Tena, we hope you have event to attend this weekend.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="flex items-start space-y-8 p-4 flex-col bg-gray-50 rounded-md">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 mr-4">
            <FontAwesomeIcon icon={faTicket} />
          </div>
          {/* Text */}
          <div>
            <p className="text-2xl font-semibold text-gray-800">12</p>
            <p className="text-gray-500">Total Tickets</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start space-y-8 p-4 flex-col bg-gray-50 rounded-md">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 mr-4">
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">$1,082</p>
            <p className="text-gray-500">Total Amount Spent</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start space-y-8 p-4 flex-col bg-gray-50 rounded-md">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 text-pink-600 mr-4">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">6</p>
            <p className="text-gray-500">Liked Events</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start space-y-8 p-4 flex-col bg-gray-50 rounded-md">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 mr-4">
            <FontAwesomeIcon icon={faUserFriends} />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">18</p>
            <p className="text-gray-500">Organizers Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

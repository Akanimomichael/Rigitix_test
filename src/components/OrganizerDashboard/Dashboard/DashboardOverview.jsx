import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMoneyBill,
  faTicket,
  faUsers,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Navigate } from "react-router-dom";

const DashboardOverview = () => {
  return (
    <div className="w-full p-4 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-1">
            Welcome back Tena, we hope you have event to attend this weekend.
          </p>
        </div>
        {/* <Navigate to={"register-event"}> */}
        <Link to={"register-event"}>
          <button className="mt-3 md:mt-0 inline-flex items-center px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Create event
          </button>
        </Link>

        {/* </Navigate> */}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-orange-500 text-white rounded-lg p-4 flex flex-col">
          <div className="bg-white text-orange-500 rounded-full w-8 h-8 flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="mt-6 p-2 rounded-lg bg-white/30 space-y-3 flex flex-col justify-between grow">
            <h2 className="text-sm text-white">Total Events Created</h2>
            <div className="text-2xl font-semibold">25</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#522672] text-white rounded-lg p-4 flex flex-col">
          <div className="bg-white text-[#522672] rounded-full w-8 h-8 flex justify-center items-center">
            <FontAwesomeIcon icon={faMoneyBill} />
          </div>
          <div className="mt-6 p-2 rounded-lg bg-white/30 space-y-3 flex flex-col justify-between grow">
            <h2 className="text-sm text-white">Total Revenue Generated</h2>
            <div className="text-2xl font-semibold">$2,220.42</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#EB018E] text-white rounded-lg p-4 flex flex-col">
          <div className="bg-white text-[#EB018E] rounded-full w-8 h-8 flex justify-center items-center">
            <FontAwesomeIcon icon={faTicket} />
          </div>
          <div className="mt-6 p-2 rounded-lg bg-white/30 space-y-3 flex flex-col justify-between grow">
            <h2 className="font-medium text-white">Total Tickets Sold</h2>
            <div className="text-2xl font-semibold">300</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#8236CF] text-white rounded-lg p-4 flex flex-col">
          <div className="bg-white text-[#8236CF] rounded-full w-8 h-8 flex justify-center items-center">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="mt-6 p-2 rounded-lg bg-white/30 space-y-3 flex flex-col justify-between grow">
            <h2 className="font-medium text-white">
              Total Attendees Registered
            </h2>
            <div className="text-2xl font-semibold">400</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;

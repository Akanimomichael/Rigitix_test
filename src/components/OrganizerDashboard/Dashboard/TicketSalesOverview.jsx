import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import lineBarChartImg from "../../../assets/icons/Line and bar chart.png";
import pieChartImg from "../../../assets/icons/Pie chart.png";

const TicketSalesOverview = () => {
  return (
    <div className="w-full p-4 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left section (Ticket Sales Overtime) */}
        <div className="lg:col-span-2 bg-white border rounded-md p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Title and amount */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-800">
                Ticket Sales Overtime
              </h2>
              <div className="text-3xl font-bold text-gray-800 mt-2">
                $107,843.82
              </div>
              <div className="flex items-center text-green-600 font-medium text-sm mt-1">
                <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                7.2%
              </div>
            </div>
            {/* Date range buttons */}
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                12 months
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                30 days
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                7 days
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none">
                24 hours
              </button>
            </div>
          </div>
          {/* Chart Image (Placeholder) */}
          <div className="mt-6">
            {/* Replace with your actual chart image */}
            <img
              src={lineBarChartImg}
              alt="Line Chart"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right section (Sales Breakdown by Ticket Type) */}
        <div className="bg-white border rounded-md p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-8">
            Sales Breakdown by Ticket Type
          </h2>
          {/* Chart Image (Placeholder) */}
          <div className="flex justify-center">
            {/* Replace with your actual pie chart image */}
            <img src={pieChartImg} alt="Pie Chart" className="w-60 h-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSalesOverview;

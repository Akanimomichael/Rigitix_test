// UpcomingEventsQuickAction.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faPlusCircle,
  faCheckCircle,
  faForward,
  faCalendar,
  faArrowRight,
  faMicrophoneLines,
  faPaperPlane,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import arrowRightIcon from "../../../assets/icons/arrow-right.svg";

const UpcomingEventsQuickAction = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
      {/* Left Column: Upcoming Events */}
      <div className="bg-white p-4 shadow-sm border border-gray-200 rounded-xl">
        <h2 className="text-lg font-medium text-gray-800 mb-3">
          Upcoming Events
        </h2>

        {/* Event 1 */}
        <div className="mb-4 bg-pink-100 rounded p-4 flex space-x-3">
          <div className="w-2 rounded-lg bg-pink-600" />
          <div>
            <span className="inline-block bg-pink-300 text-pink-600 text-xs font-medium px-2 py-1 rounded-full mb-2">
              Music
            </span>
            <div className="rounded-md">
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Wizkid Made in Lagos Tour
              </h3>
              <p className="text-sm text-gray-500">
                Landmark Beach • 6:00PM • 6th March
              </p>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="bg-[#F87B071A] rounded p-4 flex space-x-3">
          <div className="w-2 rounded-lg bg-[#032541]" />
          <div>
            <span className="inline-block bg-[#C8951A1A] text-[#F87B07] text-xs font-medium px-2 py-1 rounded-full mb-2">
              Tech & Web3
            </span>
            <div className="rounded-md">
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Blockchain and Economic Impact
              </h3>
              <p className="text-sm text-gray-500">
                Work Haven • 9:00PM • 6th March
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Quick Action */}
      <div className="bg-white p-4 shadow-sm border border-gray-200 rounded-xl">
        <h2 className="text-lg font-medium text-gray-800 mb-14">
          Quick Action
        </h2>

        {/* Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Action 1 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center mr-4">
              <FontAwesomeIcon
                icon={faCalendar}
                size="l"
                className="text-gray-500"
              />
            </div>
            <div>
              <p className=" text-medium">Engage Events</p>
              <p className="text-sm text-gray-500">Amarachi@myma401.com</p>
            </div>
            <img src={arrowRightIcon} alt="Icon" className="ml-auto" />
          </div>

          {/* Action 2 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center mr-4">
              <FontAwesomeIcon
                icon={faPaperPlane}
                size="l"
                className="text-gray-500"
              />
            </div>
            <div>
              <p className=" font-medium text-gray-900">Create Event</p>
              <p className="text-sm text-gray-500">AmarachiSignUp.flyn.com</p>
            </div>
            <img src={arrowRightIcon} alt="Icon" className="ml-auto" />
          </div>

          {/* Action 3 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center mr-4">
              <FontAwesomeIcon
                icon={faMicrophoneLines}
                size="l"
                className="text-gray-500"
              />
            </div>
            <div>
              <p className=" font-medium text-gray-900">
                Create Confirm Design
              </p>
              <p className="text-sm text-gray-500">
                AmarachiBroadcast7team.com
              </p>
            </div>
            <img src={arrowRightIcon} alt="Icon" className="ml-auto" />
          </div>

          {/* Action 4 */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#F0F2F5] rounded-full flex items-center justify-center mr-4">
              <FontAwesomeIcon
                icon={faBullhorn}
                size="l"
                className="text-gray-500"
              />
            </div>
            <div>
              <p className=" font-medium text-gray-900">Add Follow Up</p>
              <p className="text-sm text-gray-500">Request immediate help</p>
            </div>
            <img src={arrowRightIcon} alt="Icon" className="ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsQuickAction;

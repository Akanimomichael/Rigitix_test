// EventsRow.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import image27 from "../../../assets/icons/image 27.png";
import image28 from "../../../assets/icons/image 28.png";
import image30 from "../../../assets/icons/image 30.png";
import image32 from "../../../assets/icons/image 32.png";

// Sample events data
const eventsData = [
  {
    id: 1,
    image: image27,
    title: "Wizkid-Made in Lagos Tour",
    location: "The Landmark Hotel And Beach Resort",
    dateTime: "Sat. Mar 6 • 6:00PM",
    ticketType: "Virtual event",
    ticketsLeft: 20,
    paidEntry: true,
  },
  {
    id: 2,
    image: image28,
    title: "Asake Live in Abuja",
    location: "Harram Room - Abuja, Ng.",
    dateTime: "Fri. Mar 5 • 5:00PM",
    ticketType: "Paid entry",
    ticketsLeft: 17,
    paidEntry: true,
  },
  {
    id: 3,
    image: image30,
    title: "Lans Concert",
    location: "Abuja International Stadium - Abuja, Ng.",
    dateTime: "Fri. Mar 10 • 8:00PM",
    ticketType: "Physical event",
    ticketsLeft: 10,
    paidEntry: true,
  },
  {
    id: 4,
    image: image32,
    title: "Wizkid-Made in Lagos Tour",
    location: "The Landmark Hotel And Beach Resort",
    dateTime: "Sat. Mar 6 • 6:00PM",
    ticketType: "Free entry",
    ticketsLeft: 20,
    paidEntry: false,
  },
];

const EventsRow = () => {
  return (
    <div className="w-full p-4 bg-white">
      {/* Heading */}
      <h2 className="text-2xl font-medium text-gray-800 mb-8">
        See events in your city
      </h2>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto">
        {/* Flex row of cards, with spacing */}
        <div className="grid grid-cols-4 gap-4">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="flex-none overflow-hidden 
                         shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              {/* Image & Heart Icon */}
              <div className="relative w-full h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  className="absolute top-2 right-2 bg-white w-8 h-8 flex items-center justify-center rounded-full shadow 
                             text-orange-500 hover:text-orange-600"
                  aria-label="Favorite"
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>

              {/* Card Content */}
              <div className="mt-4">
                <h3 className="font-medium text-gray-800 mb-1 line-clamp-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2 line-clamp-1">
                  {event.location}
                </p>
                <p className="text-xs text-gray-500 mb-2">{event.dateTime}</p>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-gray-500">{event.ticketType}</span>
                  <span
                    className={
                      event.paidEntry ? "text-red-500" : "text-green-600"
                    }
                  >
                    {event.ticketsLeft} tickets left
                  </span>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-orange-500 text-white font-medium rounded-md py-2 hover:bg-orange-600 text-sm">
                  {event.paidEntry ? "Buy ticket" : "Attend for free"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsRow;

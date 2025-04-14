// RecommendedOrganizers.jsx

import React from "react";
import Img1 from "../../../assets/icons/img-1.png";
import Img2 from "../../../assets/icons/img-2.png";
import Img3 from "../../../assets/icons/img-3.png";

// Replace these images with actual organizer avatars or placeholders
const organizersData = [
  {
    id: 1,
    name: "Javier Johnson",
    role: "Software Engineer",
    location: "Lekki Phase 1, Lagos, Ng.",
    avatar: Img1,
    category: "Tech & Web3",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Educator",
    location: "Gwarimpa - Abuja, Ng.",
    avatar: Img2,
    category: "Masterclasses",
  },
  {
    id: 3,
    name: "Kuro Ihebiri",
    role: "Photographer",
    location: "Yenagoa - Bayelsa, Ng.",
    avatar: Img3,
    category: "Film & Media",
  },
];

const RecommendedOrganizers = () => {
  return (
    <div className="w-full">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Recommended Organizers
      </h2>

      {/* Organizer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {organizersData.map((organizer) => (
          <div
            key={organizer.id}
            className="border border-gray-200 rounded-lg p-3 bg-white"
          >
            {/* Top: Avatar, Name & Role */}
            <div className="flex items-center mb-3">
              <img
                src={organizer.avatar}
                alt={organizer.name}
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <div>
                <p className="font-medium text-gray-800">{organizer.name}</p>
                <p className="text-sm text-gray-500">{organizer.role}</p>
              </div>
            </div>

            {/* Location */}
            <p className="text-sm text-gray-600 mb-4">{organizer.location}</p>

            <div className="h-[1px] -mx-3 bg-gray-200" />

            {/* Bottom: Category Tag & View Profile Button */}
            <div className="flex items-center justify-between mt-3">
              {/* Category Tag */}
              <span className="text-sm font-medium px-2 py-1 rounded-full bg-[#E7F6EC] text-[#036B26]">
                {organizer.category}
              </span>

              {/* View Profile Button */}
              <button className="text-sm font-medium border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-50">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedOrganizers;

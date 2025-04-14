import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faTicket,
  faMoneyBillTransfer,
  faHeart,
  faUserFriends,
  faCheckCircle,
  faGear,
  faCircleQuestion,
  faUsers,
  faDashboard,
  faCalendar,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import rigitixBlueLogo from "../../assets/icons/rigitix-blue-logo.png";
import userImage from "../../assets/icons/user-image.jpeg";
import { useAuth } from "../../Context/AuthContext";
import { useLocation } from "react-router-dom";



const Sidebar = () => {
  // const { userData } = useAuth();
  const location = useLocation();

  // const token = Cookies.get("authToken");
  // const user_id = Cookies.get("userId");
  const user_name = Cookies.get("userName");
  const user_email = Cookies.get("userEmail");
  // const user_type = Cookies.get("userType"); // Assuming userType is stored in cookies
  const user_type = localStorage.getItem("userType");

  console.log(`FROM SIDEBAR ${user_type}`)


  // Additional nav items for organizers
  const organizerNavItems = [
    {
      to: "/dashboard/Organizer",
      label: "Dashboard",
      icon: faDashboard,
    },
    // {
    //   to: "register-event",
    //   label: "Event",
    //   icon: faCalendar,
    // },
  ];

  // Additional nav items for attendees
  const attendeeNavItems = [
    {
      to: "/dashboard/Attendee",
      label: "Dashboard",
      icon: faDashboard,
    },
    {
      to: "/dashboard/Attendee/my-tickets",
      label: "My Tickets",
      icon: faTicket,
    },
  ];

  // Choose nav items based on user type
  const navItems =
    user_type === "Organizer" ? [...organizerNavItems] : [ ...attendeeNavItems];

  // const bottomNavItems = [
  //   {
  //     to: "/settings",
  //     label: "Settings",
  //     icon: faGear,
  //   },
  //   {
  //     to: "/help",
  //     label: "Help Center",
  //     icon: faCircleQuestion,
  //   },
  //   {
  //     to: "/refer",
  //     label: "Refer family & friends",
  //     icon: faUsers,
  //   },
  // ];

  return (
    <div className="flex flex-col w-64 shrink-0 h-screen bg-white border-r sticky top-0">
      <div className="py-1 px-4">
        <img src={rigitixBlueLogo} alt="Logo" />
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col mt-4 px-2 space-y-2 text-sm">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={
              location.pathname === to
                ? "bg-[#F87B0733] text-[#FE9B51] font-medium flex items-center px-2 py-2 rounded cursor-pointer transition "
                : "text-gray-900 hover:bg-gray-100 flex items-center px-2 py-2 rounded cursor-pointer transition "
            }
            
          >
            <FontAwesomeIcon
              icon={icon}
              className={`mr-2 ${
                location.pathname === to ? "text-[#FE9B51]" : "text-gray-400"
              }`}
            />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Navigation */}
      {/* <div className="px-3 pb-3 space-y-2 text-sm">
        {bottomNavItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center cursor-pointer transition ${
                isActive ? "text-[#FE9B51]" : "text-gray-900"
              }`
            }
          >
            <FontAwesomeIcon
              icon={icon}
              className={`mr-3 ${
                location.pathname === to ? "text-[#FE9B51]" : "text-gray-400"
              }`}
            />
            {label}
          </NavLink>
        ))}
      </div> */}

      {/* Profile Section */}
      <div className="px-3 py-3 border-t flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={userImage}
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-3"
          />
          <div className="max-w-36">
            <p className="font-semibold text-sm">{user_name}</p>
            <p className="text-xs text-gray-500 truncate">{user_email}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <FontAwesomeIcon size="lg" icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

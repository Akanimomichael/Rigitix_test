import { icons } from "@/assets/asset";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import Button from "@/components/buttons/Button";
import Cookies from "js-cookie";
import { useState, useEffect, useRef } from "react";
import arrowDown from "@/assets/icons/dropdownArrow.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const token = Cookies.get("authToken");
  const dropdownRef = useRef(null);
  const [MyDashboard, setMyDashboard] = useState("");
   const [userRole, setUserRole] = useState("");
  const handleLogout = () => {
    Cookies.remove("authToken"); // Remove the authentication token
    Cookies.remove("userDetails"); // Remove user details
    Cookies.remove("userType"); // Remove user type if needed

    setUserData(null); // Reset user state
    setOpenDropdown(false); // Close dropdown

    navigate("/");
  };
  // useEffect(() => {
  //   // Retrieve and parse user details from cookies
  //   const storedUserData = localStorage.getItem("userDetails");
  //   // const storeDasboardRoute = Cookies.get("userType");
  //   const storeDasboardRoute = localStorage.getItem("userType");
  //   console.log("MyDashboard:", MyDashboard); // Check the value of MyDashboard

  //   if (storedUserData) {
  //     setUserData(JSON.parse(storedUserData));
  //   }
  //   if (storeDasboardRoute) {
  //     setMyDashboard(storeDasboardRoute);
  //   }

  //   // Handle click outside dropdown to close it
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setOpenDropdown(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const getUserInitials = (name) => {
    if (!name) return ""; // Handle empty case
    const words = name.split(" ");
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };
   useEffect(() => {
     // Retrieve and parse user details from localStorage
     const storedUserData = localStorage.getItem("userDetails");
     const storedUserRole = localStorage.getItem("userType");

     if (storedUserData) {
       setUserData(JSON.parse(storedUserData));
     }
     if (storedUserRole) {
       setUserRole(storedUserRole); // Set user role based on stored data
     }

     const handleClickOutside = (event) => {
       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
         setOpenDropdown(false);
       }
     };

     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   // Function to navigate to the correct dashboard based on the user role
   const navigateToDashboard = () => {
     if (userRole === "Organizer") {
       navigate("/dashboard/Organizer"); // Admin dashboard route
     } else if (userRole === "Attendee") {
       navigate("dashboard/Attendee"); // Vendor dashboard route
     }
   };

  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-10">
        <div>
          <Link to="/">
            <img src={icons.rigitix} className="cursor-pointer" />
          </Link>
        </div>
        <ul className="flex gap-8">
          <Link to="/">
            <li className="text-[16px] text-white font-semibold">Home</li>
          </Link>
          <Link to="/about">
            <li className="text-[16px] text-white font-semibold">About</li>
          </Link>
          <Link to="/features">
            <li className="text-[16px] text-white font-semibold">Features</li>
          </Link>
          <Link to="/pricing">
            <li className="text-[16px] text-white font-semibold">Pricing</li>
          </Link>
          <Link to="/blog">
            <li className="text-[16px] text-white font-semibold">Blog</li>
          </Link>

          <Link to="/developers_hub">
            <li className="text-[16px] text-white font-semibold">
              Developers Hub
            </li>
          </Link>
          <Link to="/contact-us">
            <li className="text-[16px] text-white font-semibold">Contact us</li>
          </Link>
        </ul>
      </div>
      {token ? (
        <div className="relative" ref={dropdownRef}>
          <div
            onClick={() => setOpenDropdown((prev) => !prev)}
            className="flex items-center cursor-pointer gap-4"
          >
            {userData?.avatar ? (
              <img
                src={userData.avatar}
                alt="User Avatar"
                className="w-[46px] h-[46px] rounded-full object-cover"
              />
            ) : (
              <div className="w-[46px] h-[46px] flex items-center justify-center bg-[#E5E5EA] text-[#333333] font-bold rounded-full text-[15px]">
                {userData ? getUserInitials(userData.name) : ""}
              </div>
            )}
            <img
              src={arrowDown}
              alt="dropdown"
              className={`w-6 h-6 transition-all duration-500 ${
                !openDropdown ? "" : "rotate-[-180deg]"
              }`}
            />
          </div>

          {openDropdown && (
            <div className="bg-white rounded-[12px] shadow-md overflow-hidden absolute p-y-6 z-50 w-[250px] h-[200px] left-[-80%] mt-4">
              <ul className="flex flex-col w-full mt-2">
                <li className="text-[15px] font-normal text-[#333333] hover:bg-gray-200 px-6 py-3 border-b border-gray-200 cursor-pointer">
                  My Profile
                </li>
                <li
                  // onClick={() => navigate(`dashboard/${MyDashboard}`)}
                  onClick={navigateToDashboard}
                  className="text-[15px] font-normal text-[#333333] hover:bg-gray-200 px-6 py-3 border-b border-gray-200 cursor-pointer"
                >
                  My Dashboard
                </li>
                <li
                  onClick={handleLogout}
                  className="text-[15px] font-normal text-[#333333] hover:bg-gray-200 px-6 py-3 border-b border-gray-200 cursor-pointer"
                >
                  Log out
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <p
            className="text-[16px] font-semibold cursor-pointer text-white"
            onClick={() => navigate("/sign-in")}
          >
            Sign in
          </p>
          <Button
            label="Sign Up"
            className="py-3 px-6 bg-[#F87B07] text-white rounded-[12px] text-white font-semibold text-[16px] border-none"
            onClick={() => navigate("/sign-up")}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

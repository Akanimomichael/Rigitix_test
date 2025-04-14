import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [MyDashboard, setMyDashboard] = useState("");


  // console.log('MY AUTH')
  const user_type = Cookies.get("userType");
   const token = Cookies.get("authToken");

  console.log(`This is from user Auth: My user type is : ${user_type} and ${token}`);
    const userType = localStorage.getItem("userType");

    console.log("AUTH type from localStorage:", userType);



  // Load user data from cookies on app start
  useEffect(() => {
    const storedUser = Cookies.get("userData");
    const storeDashboardRoute = Cookies.get("userType");

    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
    if (storeDashboardRoute) {
      setMyDashboard(storeDashboardRoute);
    }
  }, []);


  //GETTING ORGANIZER DETAILS
  const fetchOrganizerDetails = async () => {
    const token = Cookies.get("authToken");
    const user_id = Cookies.get("userId");
    

    try {
      const response = await axios.get(
        `https://test2.coderigi.online/api/organizer/details?user_id=${user_id}`, // Fixed URL
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (Array.isArray(response.data) && response.data.length > 0) {
        return response.data[0]; // Return the first organizer object
      } else {
        console.warn("No organizer data found.");
        return null;
      }
    } catch (error) {
      console.error("Failed to fetch organizer details", error);
      return null;
    }
  };


  // Function to update user state after login
  const login = async (user) => {
    const userType = user.userType;

    Cookies.set("userType", userType); // Save userType separately
    setMyDashboard(userType);

    // Fetch extra user details from backend
    const organizerDetails = await fetchOrganizerDetails();

    if (organizerDetails) {
      const combinedUserData = {
        ...user,
        organizer: organizerDetails,
      };

      Cookies.set("userData", JSON.stringify(combinedUserData));
      setUserData(combinedUserData);
    } else {
      Cookies.set("userData", JSON.stringify(user));
      setUserData(user);
    }
  };


  // Function to log out
  const logout = () => {
    Cookies.remove("userData");
    Cookies.remove("authToken");
    Cookies.remove("userType");
    setUserData(null);
    setMyDashboard("");
  };

  return (
    <AuthContext.Provider
      value={{ userData, login, logout, MyDashboard, setMyDashboard }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

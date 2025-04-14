import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Assuming you are using AuthContext

const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const { userData, MyDashboard } = useAuth();
  const userRole = MyDashboard || localStorage.getItem("userType");

  if (!userData || !userRole) {
    // User not authenticated or role not found, redirect to login page
    navigate("/sign-in");
    return null;
  }

  if (allowedRoles.includes(userRole)) {
    // User role doesn't match allowed roles, redirect to home page or error page
    navigate("/");
    return null;
  }

  // If user role is allowed, render children
  return children;
};

export default ProtectedRoute;

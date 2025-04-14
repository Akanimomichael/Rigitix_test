// components/routes/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * Redirects authenticated users away from public pages (like /sign-in or /sign-up).
 */
const PublicRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Navigate to="/dashboard/Attendee" replace />
  ) : (
    children
  );
};

export default PublicRoute;

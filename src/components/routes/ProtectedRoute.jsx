// components/routes/ProtectedRoute.jsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  // Role-based access check
  if (allowedRoles && !allowedRoles.includes(user?.userType)) {
    return <Navigate to="/" replace />; // or redirect to a "403 Forbidden" page
  }

  return children;
};

export default ProtectedRoute;

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  // If user is not logged in, redirect to login
  if (!savedUser) {
    return <Navigate to="/Login" replace />;
  }

  return children;
}

export default ProtectedRoute;

import { useAuth } from "@/Hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const { authenticated, loading } = useAuth();
    if (loading) return <p>Carregant...</p>;
  return authenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
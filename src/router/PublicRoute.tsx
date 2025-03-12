import { useAuth } from "@/Hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const { authenticated, loading } = useAuth();
    if (loading) return <p>Carregant...</p>;
    return !authenticated ? <Outlet /> : <Navigate to="/home" replace />;
};

export default PublicRoute;
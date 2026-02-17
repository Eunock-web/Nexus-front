import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user, loading, getToken,logout } = useAuth();
    const token = getToken();
    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <span>Chargement de la session...</span>
            </div>
        );
    }

    if (!user || !token) {
        logout();
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};
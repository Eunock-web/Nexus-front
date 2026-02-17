import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user, loading, isAuthenticated } = useAuth();

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <span>Chargement de la session...</span>
            </div>
        );
    }

    if (!user || !isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};
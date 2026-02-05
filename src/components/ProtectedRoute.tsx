import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { ReactNode } from "react";

// Correction du typage : on définit la forme de l'objet des props
interface ProtectedRouteProps {
    children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user, loading } = useAuth();

    // 1. On attend que le useEffect de l'AuthContext ait fini de vérifier le localStorage
    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <span>Chargement de la session...</span>
            </div>
        );
    }

    // 2. Si après le chargement, aucun utilisateur n'est trouvé, on redirige
    if (!user) {
        return <Navigate to="/login" replace />; 
        // Note : "replace" empêche l'utilisateur de revenir en arrière vers la page protégée
    }

    // 3. Si tout est OK, on affiche la page demandée
    return <>{children}</>;
};
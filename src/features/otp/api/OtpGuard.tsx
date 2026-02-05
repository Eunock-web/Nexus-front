// src/components/OtpGuard.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const OtpGuard = ({ children }: { children: React.ReactNode }) => {
    const { tempEmail } = useAuth();

    // Si on n'a pas d'email temporaire en mémoire, c'est que l'utilisateur 
    // n'est pas passé par le Login ou le Register. On le renvoie au Login.
    if (!tempEmail) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};
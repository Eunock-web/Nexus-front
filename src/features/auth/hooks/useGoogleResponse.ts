import { useMutation } from "@tanstack/react-query";
import type { GoogleResponse } from "../../../types";
import { GoogleApiResponse } from "../api/GoogleResponseApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect, useRef } from "react";



function useGoogleResponse() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const navigate = useNavigate();
    const { saveSession } = useAuth();
    const hasFetched = useRef(false);

    const mutation = useMutation<GoogleResponse, Error, string>({
        mutationFn: GoogleApiResponse,
        onSuccess: (data) => {
            console.log("Données reçues de Google API:", data);
            // On vérifie accessToken, si user manque on peut quand même tenter de naviguer 
            // ou afficher un warning, mais l'absence de user bloquait tout.
            if (data.accessToken) {
                saveSession(data.accessToken, data.user as any); // cast temporaire si user manque
                navigate('/dashboard');
            }
        },
        onError: (error) => {
            console.error("Erreur lors de l'appel Google API:", error);
        }
    })

    useEffect(() => {
        if (code && !hasFetched.current) {
            hasFetched.current = true;
            mutation.mutate(code);
        }
    }, [code]);

    return mutation;
}

export default useGoogleResponse
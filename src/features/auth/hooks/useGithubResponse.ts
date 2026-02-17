import { useMutation } from "@tanstack/react-query";
import type { GithubResponse } from "../../../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect, useRef } from "react";
import { GithubResponseApi } from "../api/GthubResponseApi";



function useGithubResponse() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const navigate = useNavigate();
    const { saveSession, saveToken } = useAuth();
    const hasFetched = useRef(false);

    const mutation = useMutation<GithubResponse, Error, string>({
        mutationFn: GithubResponseApi,
        onSuccess: (data) => {
            if (data.accessToken && data.refreshToken && data.user) {
                saveSession(data.accessToken, data.user);
                saveToken(data.refreshToken)
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

export default useGithubResponse
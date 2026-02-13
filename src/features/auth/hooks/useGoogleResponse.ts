import { useMutation } from "@tanstack/react-query";
import type { GoogleResponse } from "../../../types";
import { GoogleApiResponse } from "../api/GoogleResponseApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect } from "react";



function useGoogleResponse() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const navigate = useNavigate();
    const { saveSession } = useAuth();

    const mutation = useMutation<GoogleResponse, Error, string>({
        mutationFn: GoogleApiResponse,
        onSuccess: (data) => {
            if (data.accessToken && data.user) {
                saveSession(data.accessToken, data.user);
                navigate('/dashboard');
            }
        }
    })

    useEffect(() => {
        if (code) {
            mutation.mutate(code);
        }
    }, [code]);

    return mutation;
}

export default useGoogleResponse
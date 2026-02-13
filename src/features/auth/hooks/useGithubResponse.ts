import { useMutation } from "@tanstack/react-query";
import type { GithubResponse } from "../../../types";
import { GithubResponseApi } from "../api/GthubResponseApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { useEffect } from "react";



function useGithubResponse() {
    // const [searchParams] = useSearchParams();
    // const code = searchParams.get('code');
    const navigate = useNavigate();
    const { saveSession } = useAuth();

    const mutation = useMutation<GithubResponse, Error, string>({
        mutationFn: GithubResponseApi,
        onSuccess: (data) => {
            if (data.accessToken && data.user) {
                saveSession(data.accessToken, data.user);
                navigate('/dashboard');
            }
        }
    })

    useEffect(() => {
        mutation.mutate("");
    }, []);

    return mutation;
}

export default useGithubResponse
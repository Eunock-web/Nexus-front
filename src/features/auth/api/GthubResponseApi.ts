import api from "../../../api/axios";
import type { GithubResponse } from "../../../types"




export const GithubResponseApi = async (): Promise<GithubResponse> => {
    const response = await api.get<GithubResponse>(`Oauth/github/callback`);
    return response.data;
}
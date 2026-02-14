import api from "../../../api/axios";
import type { GithubResponse } from "../../../types"




export const GithubResponseApi = async (code: string): Promise<GithubResponse> => {
    const response = await api.get<GithubResponse>("Oauth/github/callback", {
        params : { code }
    });
    return response.data;
}
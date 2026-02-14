import api from "../../../api/axios";
import type { GoogleRedirectResponse } from "../../../types"




export const GithubApi = async (): Promise<GoogleRedirectResponse> => {
    const response = await api.get<GoogleRedirectResponse>("/Oauth/github/redirect");
    return response.data;
}
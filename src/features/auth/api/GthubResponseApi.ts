import api from "../../../api/axios";
import type { GoogleResponse } from "../../../types"




export const GithubApiResponse = async (code: string): Promise<GoogleResponse> => {
    const response = await api.get<GoogleResponse>(`Oauth/github/callback?code=${code}`);
    return response.data;
}
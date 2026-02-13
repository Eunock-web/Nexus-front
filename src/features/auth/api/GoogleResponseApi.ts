import api from "../../../api/axios";
import type { GoogleResponse } from "../../../types"




export const GoogleApiResponse = async (code: string): Promise<GoogleResponse> => {
    const response = await api.get<GoogleResponse>(`Oauth/google/callback?code=${code}`);
    return response.data;
}
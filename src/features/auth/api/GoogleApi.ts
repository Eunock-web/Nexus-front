import api from "../../../api/axios";
import type { GoogleRedirectResponse } from "../../../types"




export const GoogleApi = async (): Promise<GoogleRedirectResponse> => {
    const response = await api.get<GoogleRedirectResponse>("Oauth/google/redirect");
    return response.data;
}
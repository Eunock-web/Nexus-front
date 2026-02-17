import axios from "axios";

export interface RefreshResponse {
    success: boolean;
    accessToken: string;
}

export const refreshAccessToken = async (): Promise<RefreshResponse> => {
    const response = await axios.get<RefreshResponse>(`${import.meta.env.VITE_API_URL}/refresh`, {
        withCredentials: true
    });
    return response.data;
};

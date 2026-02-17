import axios from "axios";

export interface RefreshResponse {
    success: boolean;
    accessToken: string;
}

export const refreshAccessToken = async (): Promise<RefreshResponse> => {
    const response = await axios.post<RefreshResponse>(
        `${import.meta.env.VITE_API_URL}/refresh`,
        {}, // Empty body
        {
            withCredentials: true // Envoie automatiquement le cookie refreshToken
        }
    );
    return response.data;
};
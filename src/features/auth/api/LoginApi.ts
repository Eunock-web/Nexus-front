import api from "../../../api/axios";
import type { LoginInterface, LoginResponse } from "../../../types";


export const LoginApi = async (data: LoginInterface): Promise<LoginResponse> => {
    try{
        const response = await api.post<LoginResponse>("login", data);
        return response.data;
    }catch (error: any) {
        const serverMessage = error.response?.data?.error 
            || error.response?.data?.message 
            || "Une erreur est survenue";
        throw new Error(serverMessage);
    }
}


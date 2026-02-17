import api from "../../../api/axios";
import type { AuthResponse, RegisterInput } from "../../../types";


export const RegisterApi = async (data: RegisterInput): Promise<AuthResponse> => {
    try{
        const response = await api.post<AuthResponse>("register", data);
        return response.data;
    }catch(error : any){
         const serverMessage = error.response?.data?.error 
            || error.response?.data?.message 
            || "Une erreur est survenue";
        throw new Error(serverMessage);
    }
}


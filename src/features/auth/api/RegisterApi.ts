import api from "../../../api/axios";
import type { AuthResponse, RegisterInput } from "../../../types";


export const  RegisterApi = async (data:RegisterInput):Promise<AuthResponse> =>{
    const response = await api.post<AuthResponse>("/register", data);
    return response.data;
}


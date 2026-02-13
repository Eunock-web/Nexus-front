import api from "../../../api/axios";
import type { LoginInterface, LoginResponse } from "../../../types";


export const LoginApi = async (data: LoginInterface): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("login", data);
    return response.data;
}


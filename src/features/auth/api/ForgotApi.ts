import api from "../../../api/axios";
import type { ForgotInterface, ForgotResponse } from "../../../types";


export const ForgotApi = async (data : ForgotInterface) : Promise<ForgotResponse> =>{
    const response = await api.post<ForgotResponse>("/forgot-password", data);
    return response.data;
}
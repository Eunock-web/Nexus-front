import type { OtpInterface, OtpResponse } from "../../../types";
import api from "../../../api/axios";


export const OtpApi = async (data:OtpInterface): Promise<OtpResponse> =>{
    const response = await api.post<OtpResponse>("/verify-email", data);
    return response.data;
} 
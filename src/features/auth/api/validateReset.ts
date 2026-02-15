import api from "../../../api/axios";
import type { ResetInterface, ResetResponse } from "../../../types";


export const validateReset = async (tokenValue: ResetInterface): Promise<ResetResponse> => {
    const response = await api.get<ResetResponse>(`reset-password/${tokenValue.token}`);
    return response.data
}
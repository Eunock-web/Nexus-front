import api from "../../../api/axios";
import type { UpdateInterface, UpdateResponse } from "../../../types";


export const updatePassword = async (data: UpdateInterface): Promise<UpdateResponse> => {
    const response = await api.post<UpdateResponse>("update-password", data);
    return response.data;
}
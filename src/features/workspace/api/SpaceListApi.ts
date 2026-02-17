import api from "../../../api/axios";
import type { SpaceListResponse } from "../../../types";



export const SpaceListApi = async () : Promise<SpaceListResponse> =>{
    const response = await api.get<SpaceListResponse>("/");
    return response.data
}
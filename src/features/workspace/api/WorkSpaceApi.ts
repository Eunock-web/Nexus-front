import api from "../../../api/axios";
import type { WorkSpaceInterface, WorkSpaceResponse } from "../../../types";



export const WorkSpaceApi = async (data : WorkSpaceInterface) : Promise<WorkSpaceResponse> =>{
    const response = await api.post<WorkSpaceResponse>("workspace/create", data);
    return response.data;
}           
import api from "../../../api/axios";
import type { ProjectInterface, ProjectResponse } from "../../../types";

export const ProjectApi = async ({ data, code }: { data: ProjectInterface; code: string }): Promise<ProjectResponse> => {
    const response = await api.post<ProjectResponse>(`project/create/${code}`, data);
    return response.data;
}
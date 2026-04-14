import { useMutation } from "@tanstack/react-query";
import { ProjectApi } from "../api/ProjectApi";
import type { ProjectInterface, ProjectResponse } from "../../../types";



function useProject() {
    return useMutation<ProjectResponse, Error, { data: ProjectInterface; code: string }>({
        mutationFn: ProjectApi
    })
}

export default useProject
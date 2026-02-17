import { useMutation } from "@tanstack/react-query"
import { WorkSpaceApi } from "../api/WorkSpaceApi"
import type { WorkSpaceInterface, WorkSpaceResponse } from "../../../types"



function useWorkSpace(){
    return useMutation<WorkSpaceResponse, Error, WorkSpaceInterface>({
        mutationFn : WorkSpaceApi
    });
}

export default useWorkSpace 
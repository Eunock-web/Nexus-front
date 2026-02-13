import { useMutation } from "@tanstack/react-query"
import { updatePassword } from "../api/UpdateApi"
import type { UpdateInterface, UpdateResponse } from "../../../types"



function useUpdate(){
    return useMutation<UpdateResponse, Error ,UpdateInterface>({
        mutationFn : updatePassword
    })
}

export default useUpdate
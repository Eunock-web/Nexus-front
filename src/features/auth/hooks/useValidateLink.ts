import { useMutation } from "@tanstack/react-query";
import { type ResetInterface, type ResetResponse } from "../../../types";
import { validateReset } from "../api/validateReset";



function useValidateLink(){
    return useMutation<ResetResponse, Error , ResetInterface>({
        mutationFn : validateReset
    })
}

export default useValidateLink
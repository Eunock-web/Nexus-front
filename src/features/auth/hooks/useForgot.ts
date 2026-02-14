import { useMutation } from "@tanstack/react-query";
import { type ForgotInterface, type  ForgotResponse } from "../../../types";
import { ForgotApi } from "../api/ForgotApi";



function useForgot(){
    return useMutation<ForgotResponse, Error, ForgotInterface>({
        mutationFn : ForgotApi
    });
}

export default useForgot
import { useMutation } from "@tanstack/react-query";
import type { OtpInterface, OtpResponse } from "../../../types";
import { OtpApi } from "../api/OtpApi";



function useOtp(){
    return useMutation<OtpResponse, Error, OtpInterface>({
        mutationFn : OtpApi
    }); 
}

export default useOtp;
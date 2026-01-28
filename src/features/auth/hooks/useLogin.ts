import { useMutation } from "@tanstack/react-query";
import { LoginApi } from "../api/LoginApi";


function useLogin(){
    return useMutation({
        mutationFn : LoginApi
    });
}

export default useLogin


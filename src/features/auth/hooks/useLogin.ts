import { useMutation } from "@tanstack/react-query";
import { LoginApi } from "../api/LoginApi";
import {  type LoginInterface, type LoginResponse } from "../types";


function useLogin(){
    return useMutation<LoginResponse, Error, LoginInterface>({
        mutationFn : LoginApi
    });
}

export default useLogin


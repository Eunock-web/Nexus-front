import { useMutation } from "@tanstack/react-query";
import type { AuthResponse, RegisterInput } from "../../../types";
import { RegisterApi } from "../api/RegisterApi";
import type { AxiosError } from "axios";


function useRegister(){
  return useMutation<AuthResponse, AxiosError, RegisterInput>({
        mutationFn: RegisterApi
  });
};

export default useRegister;
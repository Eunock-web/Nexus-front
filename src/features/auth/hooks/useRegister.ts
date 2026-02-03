import { useMutation } from "@tanstack/react-query";
import type { AuthResponse, RegisterInput } from "../types";
import axios from "axios";


function useRegister(){
  return useMutation<AuthResponse, Error, RegisterInput>({
        mutationFn: async (data: RegisterInput) => {
          const response = await axios.post('https://nexus-back-cfd3.onrender.com/api/register', data);
          return response.data;
    },

    
  });
};

export default useRegister;
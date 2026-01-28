import { useMutation } from "@tanstack/react-query";
import type { AuthResponse, RegisterInput } from "../types";
import axios from "axios";


function useRegister(){
  return useMutation<AuthResponse, Error, RegisterInput>({
        mutationFn: async (data: RegisterInput) => {
          console.log("Donnée reçu", data);
          const response = await axios.post('', data);
          return response.data;
    },
  });
};

export default useRegister;
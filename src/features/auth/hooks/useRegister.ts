import { useMutation } from "@tanstack/react-query";
import type { AuthResponse, RegisterInput } from "../types";


function useRegister(){
  return useMutation<AuthResponse, Error, RegisterInput>({
        mutationFn: async (data: RegisterInput) => {
          console.log("Donnée reçu", data);
          throw new Error("Pas encore implémenté")
    },
  });
};

export default useRegister;
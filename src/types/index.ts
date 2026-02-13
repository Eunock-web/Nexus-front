//Interafce User
   export  interface User{
        id : number,
        email : string,
        firstname : string,
        lastname : string,
        avatarUrl ?: string,
        createdAt : string,
    }

//Interface AuthResponse 
   export interface AuthResponse{
        user : User,
        response : string,
        otpResponse? : string,
        success : boolean
    }


//interface pour les champs du register
  export interface RegisterInput{
    firstname : string,
    lastname : string,
    email : string,
    password : string,
    confirmPassword : string,
  }


//Interface AuthResponse 
   export interface LoginResponse{
        user? : User,
        success : boolean
        response? : string,
        accessToken : string,
        refreshToken : string
    }

//interface pour les données du login
    export interface LoginInterface{
        email : string,
        password : string
    }

//interface pour le code otp
    export interface OtpInterface{
        email : string,
        code : string
    }

//interface pour la reponse de l'otp
    export interface OtpResponse{
        success : boolean,
        message : string,
        error? : string
    }


//interface pour l'AuthContext
    export interface AuthContextType {
        user : User | null; 
        loading : boolean;
        tempEmail : string | null;
        setTempEmail : (email: string) => void;
        saveSession : (token : string, user: User) => void;
        logout : () => void;
    }


//interface du retour de la modification de mot de passe
    export interface ForgotInterface{
        email : string
    }

//Interface pour son retour
    export interface ForgotResponse{
        success : boolean,
        response? : string
    }

//interface pour la validation du lient de modification de mot de passe
    export interface ResetInterface{
        token : string
    }

//interface pour le retur de l'utilisateur 
    export interface ResetResponse{
        success : boolean
        response : string
        email? : string
    }
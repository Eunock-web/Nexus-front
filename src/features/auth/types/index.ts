
//Interface AuthResponse 
   export interface LoginResponse{
        success : boolean
        message? : string,
        accessToken : string,
        refreshToken : string
    }

//interface pour les données du login
    export interface LoginInterface{
        email : string,
        password : string
    }
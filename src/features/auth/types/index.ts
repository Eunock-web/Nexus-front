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
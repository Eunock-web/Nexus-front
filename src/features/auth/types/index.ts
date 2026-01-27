//Interafce User
   export  interface User{
        id : number,
        email : string,
        firstName : string,
        lastName : string,
        avatarUrl? : string,
        is2FAEnabled : boolean
    }

//Interface AuthResponse 
   export interface AuthResponse{
        user : User,
        token : string
    }


//interface pour les champs input 
  export interface RegisterInput{
    email : string,
    firstname : string,
    lastname : string,
    password : string,
    avatar : string
  }


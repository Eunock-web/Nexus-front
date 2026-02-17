//Interafce User
export interface User {
    id: number,
    email: string,
    firstname: string,
    lastname: string,
    avatarUrl?: string,
    createdAt: string,
}

//Interface AuthResponse 
export interface AuthResponse {
    user: User,
    response: string,
    otpResponse?: string,
    success: boolean
}


//interface pour les champs du register
export interface RegisterInput {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string,
}


//Interface AuthResponse 
export interface LoginResponse {
    user?: User,
    success: boolean
    response?: string,
    accessToken: string,
    refreshToken: string
}

//interface pour les données du login
export interface LoginInterface {
    email: string,
    password: string
}

//interface pour le code otp
export interface OtpInterface {
    email: string,
    code: string
}

//interface pour la reponse de l'otp
export interface OtpResponse {
    success: boolean,
    message: string,
    error?: string
}


//interface pour l'AuthContext
export interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean,
    loading: boolean;
    tempEmail: string | null;
    setTempEmail: (email: string) => void;
    saveSession: (accessToken: string, user: User) => void;
    saveToken: (refreshToken: string) => void;
    getToken: () => string | undefined;
    logout: () => void;
}


//interface du retour de la modification de mot de passe
export interface ForgotInterface {
    email: string
}

//Interface pour son retour
export interface ForgotResponse {
    success: boolean,
    response?: string
}

//interface pour la validation du lient de modification de mot de passe
export interface ResetInterface {
    token: string
}

//interface pour le retur de l'utilisateur 
export interface ResetResponse {
    success: boolean
    response: string
    email?: string
}

//interface pour la reinitialisation du mot de passe
export interface UpdateInterface {
    password: string,
    email: string
}

//interface pour la reponse
export interface UpdateResponse {
    success: boolean,
    response: string
}

//interface de retour de google OAuth
export interface GoogleResponse {
    success?: boolean
    message?: string
    accessToken?: string
    refreshToken?: string
    user?: User
}

export interface GoogleRedirectResponse {
    url: string
}

//interface de retour de github OAuth
export interface GithubResponse {
    success?: boolean
    message?: string
    accessToken?: string
    refreshToken?: string
    user?: User
}

//interface de retour de github OAuth
export interface GithubRedirectResponse {
    url: string
}

//interface de la workspace
export interface WorkSpaceInterface {
    name: string
    slug?: string
    email?: string
    logoUrl?: string
}

//Retour de workspace
export interface WorkSpaceResponse {
    success: boolean
    response: string
    workspace?: {}
}

//interface de la donnée qui sera envoyé par le front pour le project
export interface ProjectInterface {
    name: string
    color?: string
    tagname: string
}

//Interface pour le retour de la requete
export interface ProjectResponse {
    success: boolean
    response: string
    message?: string
}

//interface pour le retour de la liste des workspace
export interface SpaceListResponse {
    success?: boolean
    workspaces: {
        name: string
        slug: string
        logoUrl?: string
        firstname: string
        lastname: string
        avatarUrl: string
    }
}
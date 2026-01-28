import axios from "axios"
import type { LoginInterface } from "../types";


export const  LoginApi = (data : LoginInterface) => {
    return axios.post("https://nexus-back-cfd3.onrender.com/login",data).then((res)=>res.data);
}


import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../utils/Layout";
import ErrorPage from "../utils/ErrorPage";
import Home from "../pages/Home";
import NotFound from "../utils/NotFound";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import OtpCard from "../features/otp/components/OtpCard";


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : React.createElement(Layout),
        errorElement : React.createElement(ErrorPage),
        children : [
            {
                index : true,
                element : React.createElement(Home)
            },

            {
                path : "/login",
                element : React.createElement(LoginForm)
            }, 
            
            {
                path : "/register",
                element : React.createElement(RegisterForm)
            },
            
            {
                path : "/otp",
                element : React.createElement(OtpCard)
            },

            {
                path : "*",
                element : React.createElement(NotFound)
            }
        ]
    }
])


export default appRouter
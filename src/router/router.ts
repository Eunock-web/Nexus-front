import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../utils/Layout";
import ErrorPage from "../utils/ErrorPage";
import Home from "../pages/Home";
import NotFound from "../utils/NotFound";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import OtpCard from "../features/otp/components/OtpCard";
import Dashboard from "../pages/Dashboard";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { OtpGuard } from "../features/otp/api/OtpGuard";
import ForgotPassword from "../features/auth/components/ForgotPassword";
import UpdatePassword from "../features/auth/components/UpdatePassword";
import ValidateEmail from "../features/auth/components/ValidateEmail";
import GoogleResponse from "../features/auth/components/GoogleResponse";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(Layout),
        errorElement: React.createElement(ErrorPage),
        children: [
            {
                index: true,
                element: React.createElement(Home)
            },

            {
                path: "/login",
                element: React.createElement(LoginForm)
            },

            {
                path: "/register",
                element: React.createElement(RegisterForm)
            },

            {
                path: "/dashboard",
                element: React.createElement(ProtectedRoute, null, React.createElement(Dashboard))
            },

            {
                path: "/otp",
                element: React.createElement(OtpGuard, null, React.createElement(OtpCard))
            },

            {
                path: "/verify-account",
                element: React.createElement(OtpGuard, null, React.createElement(OtpCard))
            },

            {
                path: "/forgot-password",
                element: React.createElement(ForgotPassword)
            },

            {
                path: "/reset-password/:token",
                element: React.createElement(ValidateEmail)
            },

            {
                path: "/updatePassword",
                element: React.createElement(UpdatePassword)
            },


            {
                path: "/auth/google/callback",
                element: React.createElement(GoogleResponse)
            },

            {
                path: "*",
                element: React.createElement(NotFound)
            }
        ]
    }
])


export default appRouter
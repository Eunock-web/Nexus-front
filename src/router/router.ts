import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../utils/Layout";
import ErrorPage from "../utils/ErrorPage";
import Home from "../pages/Home";
import NotFound from "../utils/NotFound";


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
                path : "*",
                element : React.createElement(NotFound)
            }
        ]
    }
])


export default appRouter
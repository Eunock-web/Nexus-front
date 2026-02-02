import { Outlet } from "react-router-dom"
import NavBar from "../layouts/home/NavBar"


function Layout(){
    return <>
        <div className="p-2">
            <NavBar />
            <Outlet/>
            
        </div>
    </>
}

export default Layout
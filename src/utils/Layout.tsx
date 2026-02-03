import { Outlet } from "react-router-dom"
import NavBar from "../layouts/home/NavBar"


function Layout(){
    return <>
        <div className="bg-[#0F172A]">
            <NavBar />
            <Outlet/>
            
        </div>
    </>
}

export default Layout
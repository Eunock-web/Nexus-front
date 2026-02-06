import { Moon } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";


function NavBar(){
    const {user} = useAuth();

    return <>
        <div className="flex flex-row justify-between p-3 mx-2">

            {/**Logo plus appName */}
            <div>
                <h1 className="text-xl ">Nexus</h1>
            </div>

            <div className="flex flex-wrap gap-5">
                <Moon />
                <p> {user?.firstname} </p>
            </div>

        </div>
    </>
}

export default NavBar;
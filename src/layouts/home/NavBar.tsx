import Button from "../../components/Button";
import { Link } from "react-router-dom";

function NavBar(){
    return <>
        <div  >
            <div className="flex flex-row justify-between items-center p-2  bg-dark">
                <div className="flex flex-row gap-2">
                    {/**AppLogo */}
                    <div>
                        <Link to={"/"}>
                            <img src="public/icon/NexusIcon.png" alt="" className="w-16 h-16 rounded-xl" />
                        </Link>
                    </div>
                    <h1 className="flex font-bold text-2xl text-white items-center ">Nexus</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <Button className=" hidden sm:block bg-dark border-dark px-6 py-2 rounded-xl text-white ">
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </Button>
                    <Button className=" bg-primary border-primary px-4 py-2 rounded-xl text-white " >
                        <Link to={"/register"}>
                            Get Started
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </>

}

export default NavBar;
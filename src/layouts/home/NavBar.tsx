import Button from "../../components/Button";


function NavBar(){
    return <>
        <div  >
            <div className="flex flex-row justify-between items-center p-2 ">
                <div className="flex flex-row gap-2">
                    {/**AppLogo */}
                    <div>
                        <img src="public/icon/NexusIcon.png" alt="" className="w-16 h-16 rounded-xl" />
                    </div>
                    <h1 className="flex font-bold text-2xl text-white items-center ">Nexus</h1>
                </div>
                <div className="grid grid-cols-1">
                    <Button className=" hidden sm:block bg-primary border-primary px-4 py-2 rounded-xl ">Login</Button>
                    <Button className=" bg-primary border-primary px-4 py-2 rounded-xl " >Get Started</Button>
                </div>
            </div>
        </div>
    </>

}

export default NavBar;
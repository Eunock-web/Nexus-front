import Button from "../../components/Button";


function NavBar(){
    return <>
        <div  >
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2">
                    {/**AppLogo */}
                    <div>
                        <img src="public/icon/NexusIcon.png" alt="" className="w-16 h-16 rounded-xl" />
                    </div>
                    <h1 className="flex font-bold text-3xl text-white items-center ">Nexus</h1>
                </div>

                <Button className="">Get Started</Button>
            </div>
        </div>
    </>

}

export default NavBar;
import Button from "../../components/Button";


function NavBar(){
    return <>
        <div >
            <div className="flex flex-row gap-2">
                {/**AppLogo */}
                <div>
                    <img src="" alt="" />
                </div>
                <h1>Nexus</h1>
            </div>

            <Button className="">Get Started</Button>
        </div>
    </>

}

export default NavBar;
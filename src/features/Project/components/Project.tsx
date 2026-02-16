import NavBar from "../../../layouts/Launcher/NavBar"
import CreateProject from "../../../layouts/workspace/CreateProject"


function Project(){
    return <>
        <div className="min-h-screen bg-dark text-white">
            <NavBar />
            <div className="flex justify-center items-center py-10 px-4">
                <CreateProject />
            </div>
        </div>    
    </>
}

export default Project
import NavBar from "../../../layouts/Launcher/NavBar";
import CreateCard from "../../../layouts/workspace/CreateCard";


function WorkSpace() {
    return <>
        <div className="min-h-screen bg-dark text-white">
            <NavBar />
            <div className="flex justify-center items-center py-10 px-4">
                <CreateCard />
            </div>
        </div>
    </>
}

export default WorkSpace;
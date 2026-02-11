import Footer from "../../../layouts/Launcher/Footer";
import NavBar from "../../../layouts/Launcher/NavBar";
import CreateCard from "../../../layouts/workspace/CreateCard";


function WorkSpace(){
    return <>
        <div className="">
            <NavBar />
            <CreateCard />
            <Footer/>
        </div>
    </>
}

export default WorkSpace;
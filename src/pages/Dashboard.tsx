import Footer from "../layouts/Launcher/Footer";
import LaunchMain from "../layouts/Launcher/Main";
import NavBar from "../layouts/Launcher/NavBar";



function Dashboard(){
    return <>
        <div className=" bg-dark">
            <NavBar />   
            <div className="border-b border-b-gray-500"></div> 
            <LaunchMain />
            <div className="border-b border-b-gray-500"></div> 
            <Footer />
        </div>        
    </>
}

export default Dashboard
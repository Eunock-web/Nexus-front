import Footer from "../layouts/Launcher/Footer";
import LaunchMain from "../layouts/Launcher/Main";
import NavBar from "../layouts/Launcher/NavBar";



function Launcher(){
    return <>
        <div>
            <div className=" bg-dark h-screen  ">
                <NavBar />   
                <div className="border-b border-b-gray-500"></div> 
                <LaunchMain />
                <div className="border-b border-b-gray-500"></div> 
                <Footer />
            </div>        
        </div>
    </>
}

export default Launcher
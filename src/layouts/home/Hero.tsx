import { ArrowRight } from "lucide-react";
import Button from "../../components/Button";


function Hero(){
    return <>
        <div className="grid grid-cols-1 gap-10">
            {/**Badge clignotant */}
            <div className="flex justify-center items-center  ">
                <p className=" px-7 py-1.5 text-primary text-center bg-primary/20 rounded-full ">NEW: DARK MODE V2.0 IS OUT</p>
            </div>

            <div className="grid grid-cols-1 justify-center items-center gap-6 ">
                <h1 className="text-white text-5xl font-bold text-center"> Master Your WorkFlow with <span className="text-primary"> Nexus. </span> </h1>
                <p className="text-xl md:text-2xl max-w-2xl leading-relaxed text-gray-400 text-center"> The all-in-one productivity suite designed for high-performance teams. Experience deep work in clean, high-constrast dark environment</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-5">
                <Button className="h-14 border border-primary bg-primary flex flex-row gap-2 px-8 py-3 rounded-lg shadow-lg shadow-primary/50 transition-all text-white  " >Start for free <span> <ArrowRight size={25} className="text-white" /> </span> </Button>
                <Button className="border border-secondary bg-secondary flex flex-row gap-2 px-8 py-3 rounded-lg text-white " >Book a demo </Button>
            </div>

            <div className="shadow-primary/20 p-30 " >
                {/**Video section */}
                
            </div>
        </div>
    </>
}

export default Hero;
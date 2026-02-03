import { ArrowRight } from "lucide-react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Hero(){
    return <>
        <div className="flex flex-col justify-center items-center gap-10 mt-10">
            {/**Badge clignotant */}
            <div className="flex justify-center items-center  ">
                <p className=" px-7 py-1.5 text-primary text-center bg-primary/20 rounded-full ">NEW: DARK MODE V2.0 IS OUT</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-6 ">
                <h1 className="text-white text-5xl font-bold md:text-6xl text-center"> Master Your WorkFlow with <span className="text-primary"> Nexus. </span> </h1>
                <p className="text-xl md:text-3xl max-w-2xl leading-relaxed text-gray-400 text-center"> The all-in-one productivity suite designed for high-performance teams. Experience deep work in clean, high-constrast dark environment</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Button className="h-14 border border-primary bg-primary flex flex-row gap-2 px-8 py-3 rounded-lg shadow-lg shadow-primary/50 transition-all text-white  " > <Link to={"/login"}> Start for free  </Link> <span> <ArrowRight size={25} className="text-white" /> </span> </Button>
                <Button className="border border-secondary bg-secondary  gap-2 px-8 py-3 rounded-lg text-white ml-4 " >Book a demo </Button>
            </div>

            <div className="shadow-primary/20 p-20 " >
                {/**Video section */}
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf_-eDjuIvovtSdMMgxIiUMFGotvXX7MRvVIXNZnrzQuh8Nm--BsQs7Rj8HI5_yKaJHd3PqdRdBC6N-T0H5d0SgyAWiwLPEq0shtKkNuMsFPeS7HoNozPFnyQDmDeUXy97_4EnYuyK89nD4cILnzI_m6nM1DyTY8Os2YOP-tgWhOelHw6eoNw8myuR9QMSwGAabAe9rFXT2rYOX1INeXxL3X5S8Bvzaisj_e70f0HIrKxLCsNaK8ZJXF6zcr_lPWxS8xTi4k55azdZ    " alt="" className="w-full rounded-xl shadow-primary/50 shadow-sm" />
            </div>
        </div>
    </>
}

export default Hero;
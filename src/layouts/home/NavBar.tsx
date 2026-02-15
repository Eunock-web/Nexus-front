import { Link } from "react-router-dom";
import { motion } from "motion/react";

function NavBar() {
    return <>
        <div className="md:mx-20 "  >
            <div className=" md:flex md:flex-row md:justify-between grid grid-cols-2 items-center p-2  bg-dark">
                <div className="flex flex-row gap-2">
                    {/**AppLogo */}
                    <div>
                        <Link to={"/"}>
                            <img src="public/icon/NexusIcon.png" alt="" className="w-16 h-16 rounded-xl" />
                        </Link>
                    </div>
                    <h1 className="flex font-bold text-2xl text-white items-center ">Nexus</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                    <motion.button
                        className="hidden sm:block bg-dark border border-white/20 px-6 py-2 rounded-xl text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{
                            scale: 1.05,
                            borderColor: "rgba(255, 255, 255, 0.4)",
                            boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    >
                        <Link to={"/login"}>
                            Login
                        </Link>
                    </motion.button>
                    <motion.button
                        className="bg-primary border border-primary px-6 py-2 rounded-xl text-white hover:cursor-pointer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
                            backgroundColor: "#3b82f6"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    >
                        <Link to={"/register"}>
                            Get Started
                        </Link>
                    </motion.button>
                </div>
            </div>
        </div>
    </>

}

export default NavBar;
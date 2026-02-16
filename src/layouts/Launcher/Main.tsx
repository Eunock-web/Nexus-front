import { ArrowRight } from "lucide-react"
import { motion } from 'motion/react'
import { Link } from "react-router-dom"
import FeatureCards from "./FeatureCards"


function LaunchMain() {
    return <>
        <div className="flex flex-col  h-screen items-center justify-center  bg-dark">

            {/* Feature Cards Section */}
            <FeatureCards />

            <div className="flex flex-col gap-6 text-center ">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-bold text-white  "> Bienvenue sur Nexus !</h1>
                    <p className="text-2xl text-white/50">Pour commencer à organiser vos tâches, créez votre premier espace de travail.</p>
                </div>

                <div className="flex flex-row gap-2 justify-center items-center ">
                    <motion.button
                        className="flex text-center text-white text-lg  bg-primary p-3 gap-2 rounded-xl items-center "
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
                        <Link to={"/workspaceCreate"}>Créer mon espace de travail</Link>
                        <span>
                            <ArrowRight className="" size={20} />
                        </span>
                    </motion.button>
                </div>
            </div>


        </div>
    </>
}

export default LaunchMain
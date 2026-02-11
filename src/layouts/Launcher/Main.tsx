import { ArrowRight } from "lucide-react"
import Button from "../../components/Button"
import { Link } from "react-router-dom"


function LaunchMain(){
    return <>
        <div className="flex flex-col  h-screen items-center justify-center mx-2">

            <div className="flex flex-col gap-6 text-center ">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-bold  "> Bienvenue sur Nexus !</h1>
                    <p className="text-2xl">Pour commencer à organiser vos tâches, créez votre premier espace de travail.</p>
                </div>

                <div className="flex flex-row gap-2 justify-center items-center ">
                    <Button className="flex text-center text-white text-lg  bg-primary p-3 gap-2 rounded-xl items-center "> <Link to={"/workspaceCreate"}>Créer mon espace de travail</Link> <span> <ArrowRight className="" size={20} /> </span> </Button>
                </div>
            </div>


        </div>
    </>
}

export default LaunchMain
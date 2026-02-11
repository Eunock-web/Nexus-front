import { Plus, Sparkles } from "lucide-react"
import Button from "../../components/Button"


function CreateCard() {
    return <>
        <div className=" flex flex-col border border-gray-400 p-5 gap-5 ">
            <div className="flex flex-col gap-3 ">
                <div className="flex flex-row gap-5 ">
                    <Sparkles size={45} className="border p-2 rounded-xl" />
                    <h1 className="flex items-center"> Créez votre espace de travail </h1>
                </div>
                <p> Un workspace vous permet d'organiser vos projets et de collaborer avec notre équipe.</p>
            </div>

            <form className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 ">
                    <label htmlFor="workspaceName"> NOM DU WORKSPACE</label>
                    <input type="text" id="workspaceName" className="border " />
                </div>

                <div className="flex flex-col gap-3 ">
                    <label htmlFor="description"> DESCRIPTION</label>
                    <input type="text" id="description" className="border" />
                </div>

                <div className="flex flex-row gap-3 ">
                    <div className="flex flex-col ">
                        <label htmlFor="email"> INVITER DES MEMBRES </label>
                        <input type="email" id="email" className="border" />
                    </div>
                    <div className="flex items-center mt-5">
                        <Plus className="border p-2" size={45} />
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div>
                        <input type="reset" />
                    </div>

                    <div>
                        <Button className="">Créer et continuer</Button>
                    </div>
                </div>
            </form>

        </div>
    </>

}

export default CreateCard
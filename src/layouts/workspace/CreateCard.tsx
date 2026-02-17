import { ArrowLeft, Sparkles } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import useWorkSpace from "../../features/workspace/hooks/useWorkSpace"
import { useForm, type SubmitHandler } from "react-hook-form";
import type { WorkSpaceInterface } from "../../types";
import { WorkSpaceSchema, type WorkSpaceType } from "../../features/workspace/schemas/WorkspaceSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function CreateCard() {
    const navigate = useNavigate();
    const { mutate, isSuccess, isPending, isError,error, data } = useWorkSpace();

    const { register, handleSubmit, formState: { errors } } = useForm<WorkSpaceType>({
        resolver: zodResolver(WorkSpaceSchema)
    });

    const onSubmit: SubmitHandler<WorkSpaceType> = (data) => {
        mutate(data as unknown as WorkSpaceInterface, {
            onSuccess: () => {
                setTimeout(() => {
                    navigate("/createProject");
                }, 500);
            }
        })
    }

    return <>
        <div className="max-w-5xl mx-auto mt-10 p-1 flex flex-col gap-6">
            {/* Back button and Step indicator */}
            <div className="flex flex-col gap-4 px-2">
                <Link to="/dashboard">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white hover:cursor-pointer  transition-colors w-fit group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Retour</span>
                    </button>
                </Link>

                <div className="space-y-2">
                    <p className="text-xs font-semibold text-purple-500 uppercase tracking-wider">Étape 1 / 2</p>
                    <div className="relative h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-1/2 bg-linear-to-r from-purple-600 to-indigo-600 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.5)]"></div>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center justify-center">
                {
                    isError && <span className="  text-red-500 text-center "> {error.message} </span>
                }
            </div>

            <div className="flex items-center justify-center">
                {
                    isSuccess && <span className="text-green-500 text-center"> {data.response} </span>
                }
            </div>

            {/* Main Card */}
            <div className="bg-[#16163b] border border-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-600/10 p-3 rounded-xl border border-purple-500/20">
                            <Sparkles size={28} className="text-purple-500 fill-purple-500/20" />
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">Créez votre espace de travail</h1>
                    </div>
                    <p className="text-gray-400 text-md leading-relaxed">
                        Un workspace vous permet d'organiser vos projets et de collaborer avec votre équipe.
                    </p>
                </div>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="workspaceName" className="text-[12px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                            Nom du Workspace <span className="text-red-500 text-lg">*</span>
                        </label>
                        <input
                            type="text"
                            id="workspaceName"
                            placeholder="Ex: Équipe Design, Mon Freelance, Projet Alpha"
                            className="bg-[#0c0c31] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all placeholder:text-gray-600"
                            {...register("name")}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="description" className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                            Description <span className="text-gray-600 font-normal ml-1 lowercase">(optionnel)</span>
                        </label>
                        <textarea
                            id="description"
                            rows={3}
                            placeholder="Décrivez brièvement l'objectif de ce workspace..."
                            className="bg-[#0c0c31] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all placeholder:text-gray-600 resize-none"
                            {...register("slug")}
                        />
                        {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                            Inviter des membres <span className="text-gray-600 font-normal ml-1 lowercase">(optionnel)</span>
                        </label>
                        <p className="text-[13px] text-gray-500 mb-1">Ajoutez des collaborateurs par email. Vous pourrez aussi les inviter plus tard.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                id="email"
                                placeholder="nom@entreprise.com"
                                className="flex-1 bg-[#0c0c31] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all placeholder:text-gray-600"
                                {...register("email")}

                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                    </div>

                    <div className="flex flex-row justify-between gap-3 pt-4">
                        <button type="reset" className="w-1/2 py-3 text-sm font-semibold text-gray-400 hover:text-white hover:cursor-pointer transition-colors border border-gray-800 rounded-xl">
                            Annuler
                        </button>
                        <button className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white hover:cursor-pointer rounded-xl py-3 shadow-lg shadow-purple-600/20" type="submit" disabled={isPending} onClick={()=>console.log("BOutton cliquer")}>
                            {isPending ? 'En cours ...' : 'Créer et continuer'}
                        </button>
                    </div>
                </form>
            </div>

            <p className="text-center text-[15px] text-gray-500 mt-2">
                ✨ Vous pourrez personnaliser votre workspace après sa création
            </p>
        </div>
    </>
}

export default CreateCard
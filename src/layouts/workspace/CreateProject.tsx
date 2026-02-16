import { useState } from "react"
import { ArrowLeft, Sparkles, Briefcase, Rocket, Target, Zap } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import Template from "../project/template"
import Couleurs from "../project/Couleurs"

function CreateProject() {
    const [projectName, setProjectName] = useState("")
    const [selectedColor, setSelectedColor] = useState("#8B5CF6")
    const [selectedTemplate, setSelectedTemplate] = useState(0)

    const colors = [
        "#8B5CF6", // Purple
        "#EC4899", // Pink
        "#3B82F6", // Blue
        "#10B981", // Green
        "#F59E0B", // Amber
        "#EF4444", // Red
        "#06B6D4", // Cyan
        "#8B5CF6", // Violet
    ]

    const templates = [
        {
            icon: <Briefcase size={20} />,
            title: "Projet Vide",
            description: "Gérez vos campagnes marketing et suivez les performances",
            iconColor: "#EC4899",
            iconBackground: "rgba(236, 72, 153, 0.1)"
        },
        {
            icon: <Rocket size={20} />,
            title: "Product Launch",
            description: "Planifiez et orchestrez le lancement de nouveaux produits",
            iconColor: "#8B5CF6",
            iconBackground: "rgba(139, 92, 246, 0.1)"
        },
        {
            icon: <Target size={20} />,
            title: "Sales Pipeline",
            description: "Suivez vos opportunités de vente du début à la fin",
            iconColor: "#10B981",
            iconBackground: "rgba(16, 185, 129, 0.1)"
        },
        {
            icon: <Zap size={20} />,
            title: "Sprint Planning",
            description: "Organisez vos sprints et gérez les tâches de développement",
            iconColor: "#F59E0B",
            iconBackground: "rgba(245, 158, 11, 0.1)"
        }
    ]

    return (
        <div className="max-w-5xl mx-auto mt-10 p-1 flex flex-col gap-6">
            {/* Back button and Step indicator */}
            <div className="flex flex-col gap-4 px-2">
                <Link to="/workspaceCreate">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white hover:cursor-pointer transition-colors w-fit group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Retour</span>
                    </button>
                </Link>

                <div className="space-y-2">
                    <p className="text-xs font-semibold text-purple-500 uppercase tracking-wider">Étape 2 / 2</p>
                    <div className="relative h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-linear-to-r from-purple-600 to-indigo-600 rounded-full shadow-[0_0_8px_rgba(147,51,234,0.5)]"
                            initial={{ width: "50%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </div>

            {/* Main Card */}
            <div className="bg-[#16163b] border border-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col gap-8">
                {/* Header */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-purple-600/10 p-3 rounded-xl border border-purple-500/20">
                            <Sparkles size={28} className="text-purple-500 fill-purple-500/20" />
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">Créez votre premier projet</h1>
                    </div>
                    <p className="text-gray-400 text-md leading-relaxed">
                        Un projet vous permet d'organiser vos tâches par thématique dans <span className="text-purple-400 font-semibold">Nexus</span>
                    </p>
                </div>

                <form className="flex flex-col gap-8">
                    {/* Project Name */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nomprojet" className="text-[12px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                            Nom du Projet <span className="text-red-500 text-lg">*</span>
                        </label>
                        <input
                            type="text"
                            id="nomprojet"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            placeholder="Ex: Lancement Produit Q1, Refonte Site Web..."
                            className="bg-[#0c0c31] border border-gray-800 rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-600/50 focus:border-purple-600 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    {/* Color Selection */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                            Couleur du Projet
                        </label>
                        <div className="grid grid-cols-8 gap-2">
                            {colors.map((color, index) => (
                                <Couleurs
                                    key={index}
                                    color={color}
                                    isSelected={selectedColor === color}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Template Selection */}
                    <div className="flex flex-col gap-3">
                        <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                            Choisissez un Template
                        </label>
                        <p className="text-[13px] text-gray-500 -mt-1">Sélectionnez un modèle adapté à votre type de projet</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {templates.map((template, index) => (
                                <Template
                                    key={index}
                                    title={template.title}
                                    description={template.description}
                                    icon={template.icon}
                                    iconColor={template.iconColor}
                                    iconBackground={template.iconBackground}
                                    isSelected={selectedTemplate === index}
                                    onClick={() => setSelectedTemplate(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Project Preview */}
                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
                        <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">
                            Aperçu du Projet
                        </label>
                        <motion.div
                            className="bg-[#0c0c31] border border-gray-800 rounded-xl p-5 flex items-center gap-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className="w-12 h-12 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: selectedColor }}
                            >
                                {templates[selectedTemplate].icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-semibold">
                                    {projectName || "Nom du projet"}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {templates[selectedTemplate].title}
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-row justify-between gap-3 pt-4">
                        <Link to="/dashboard" className="w-1/2">
                            <button
                                type="button"
                                className="w-full py-3 text-sm font-semibold text-gray-400 hover:text-white hover:cursor-pointer transition-colors border border-gray-800 rounded-xl"
                            >
                                Ignorer pour l'instant
                            </button>
                        </Link>
                        <button
                            type="submit"
                            className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white font-semibold hover:cursor-pointer rounded-xl py-3 shadow-lg shadow-purple-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={!projectName.trim()}
                        >
                            Créer le projet
                        </button>
                    </div>
                </form>
            </div>

            <p className="text-center text-[15px] text-gray-500 mt-2">
                ✨ Vous pourrez modifier ces paramètres à tout moment
            </p>
        </div>
    )
}

export default CreateProject
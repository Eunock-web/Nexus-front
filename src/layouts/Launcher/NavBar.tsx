import { Moon, Sparkles } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";


function NavBar() {
    const { user } = useAuth();

    return <>
        <div className="flex flex-row justify-between items-center py-4 px-8 border-b border-gray-800 bg-[#0F0F1A] text-white">

            {/**Logo plus appName */}
            <div className="flex items-center gap-2">
                <div className="bg-purple-600 p-1.5 rounded-lg shadow-lg">
                    <Sparkles className="text-white fill-white" size={20} />
                </div>
                <h1 className="text-xl font-bold tracking-tight">WorkspacePro</h1>
            </div>

            <div className="flex items-center gap-6">
                <Moon className="text-gray-400 hover:text-white transition-colors cursor-pointer" size={20} />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-900 border border-gray-800">
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    <p className="text-sm font-medium text-gray-300"> {user?.firstname || "Utilisateur"} </p>
                </div>
            </div>

        </div>
    </>
}

export default NavBar;
import { Moon, Sparkles } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import OnlineComponent from "../../components/Online";


function NavBar() {
    const { user } = useAuth();

    return <>
        <div className="flex flex-row justify-between items-center py-3 px-8 border-b border-dark bg-dark text-white">

            {/**Logo plus appName */}
            <div className="flex items-center gap-2">
                <div className="bg-purple-600 p-1.5 rounded-lg shadow-lg">
                    <Sparkles className="text-white fill-white" size={25} />
                </div>
                <h1 className="text-3xl font-bold tracking-tight">Nexus</h1>
            </div>

            <div className="flex items-center gap-6">
                <Moon className="text-gray-400 hover:text-white transition-colors cursor-pointer" size={25} />
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full ">
                    {user?.email &&
                        <OnlineComponent />
                    }
                    <p className="text-md font-medium text-gray-300 flex items-center"> {user?.firstname} </p>
                    <div className=" flex flex-row gap-2" >
                        {user?.avatarUrl ? <img src={user.avatarUrl} className="rounded-full w-12 hover:cursor-pointer " /> : <p className="text-sm font-medium text-gray-300"> {user?.firstname} </p>}

                    </div>
                </div>
            </div>

        </div>
    </>
}

export default NavBar;
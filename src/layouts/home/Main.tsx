import { Kanban, Mail, UsersRound } from "lucide-react"
import MainCard from "../../components/MainCard"

const maindata = [
    {
        id : 1,
        title : "Unified Inbox",
        description : "Centralize all communications from Slack, Email, and Discord into one dark-themed interface.",
        icon : <Mail />
    },

    {
        id : 2,
        title : "Visual Task Boards",
        description : "Manage complex workflows with intuitive drag-and-drop boards designed for rapid task updates.",
        icon : <Kanban />
    },

    {
        id : 3,
        title : "Real-time Collaboration",
        description : "Edit documents, leave cmments, and track changes instantly with your entire remote team.",
        icon : <UsersRound />
    }

]

function Main(){
    return <>
        <div className="grid grid-cols-1 gap-10 bg-black/20 md:py-15 md:px-30 py-9 px-5">
            <div className="grid grid-cols-1 gap-10 mb-10">
                <p className="text-lg text-[#94A3B8] font-semibold uppercase tracking-widest mb-10 text-center"> TRUSTED BY HIGH-PERFORMANCE TEAMS GLOBALLY </p>
                <div className="flex flex-wrap justify-center items-center gap-12 " >
                    <h1 className="font-black text-2xl text-[#94A3B8]"> TECHCORP </h1>
                    <h1 className="font-black text-2xl text-[#94A3B8]"> NEXUS </h1>
                    <h1 className="font-black text-2xl text-[#94A3B8]"> ORBITAL </h1>
                    <h1 className="font-black text-2xl text-[#94A3B8]"> VANTAGE </h1>
                    <h1 className="font-black text-2xl text-[#94A3B8]"> SYNERGY </h1>
                </div>
            </div>

            <div className="flex flex-col gap-4 mb-10  ">
                <p className="text-primary text-sm uppercase font-bold tracking-widest">CAPABILITIES</p>
                <h1 className="font-bold text-white text-4xl leading-tight "> Engineered for Excellence </h1>
                <p className="text-gray-400 text-xl "> Everything you need to manage your projects and team in one hight-performance interface. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                maindata.map(data=>(
                    <MainCard title={data.title} description={data.description} key={data.id} icon = {data.icon} />
                ))
                }
            </div>
        </div>
    </>
}

export default Main
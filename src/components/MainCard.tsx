import type { ButtonHTMLAttributes, ReactNode } from "react"

interface CardInterface extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon? : ReactNode,
    title : string,
    description : string
}

function MainCard({icon, title, description}: CardInterface){
    return <>
        <div className="flex flex-col gap-3 border border-border-slate transition-all duration-300 rounded-2xl md:w-[70%] p-8 bg-dark">
            <div className=" border border-primary/40 rounded-xl p-2 w-[13%] items-center justify-center flex">
                {icon && <span className="text-primary/50" > {icon} </span>}
            </div>

            <h1 className="text-white ">{ title }</h1>
            <p className="text-gray-400">{ description }</p>
        </div>
    </>
}

export default MainCard
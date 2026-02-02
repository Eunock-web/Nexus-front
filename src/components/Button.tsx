import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?:string,
  children : ReactNode,
  icon? : ReactNode,   
  disabled? : boolean
}


function Button({className, children, icon} : ButtonInterface){
  return <>
    <div>
      <button className={"btn justify-center items-center  text-lg font-bold text-white " + className} >
        {icon && <span className="flex items-center">{icon}</span> }
        {children}
      </button>
    </div>
  </>
}

export default Button
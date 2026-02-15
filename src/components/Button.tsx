import type { ButtonHTMLAttributes, ReactNode } from "react"
import { motion } from "motion/react"

interface ButtonInterface extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd'> {
  className?: string,
  children: ReactNode,
  icon?: ReactNode,
  disabled?: boolean
}


function Button({ className, children, icon, ...props }: ButtonInterface) {
  return <>
    <div>
      <motion.button className={"btn justify-center items-center  text-lg font-bold hover:cursor-pointer " + className} {...props} >
        {icon && <span className="flex items-center">{icon}</span>}
        {children}
      </motion.button>
    </div>
  </>
}

export default Button
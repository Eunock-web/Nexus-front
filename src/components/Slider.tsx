import { useMotionValue, useTransform } from "motion/react"
import { motion } from "motion/react"



function Slider(){

    const x = useMotionValue<number>(0)
    const background = useTransform(x, [0,300], ["#1e40af", "#ef4444"])
    return <>
        <button onClick={()=>x.set(200)}> Cliquer </button>

        < motion.div className="justify-center items-center border-2 border-black rounded-2xl w-25 h-25 mx-auto mt-3 bg-blue-800 hover:cursor-pointer "
            style={{x : x, background}}
            drag = "x"
            dragConstraints = {{left : 0, right : 300}}
            whileHover={{
                scale: 1.2,
                borderColor: "#FFFFFF",
            }}

            whileTap={{
                scale: 0.8,
                rotate: -5
            }}
        />
    </>
}
export default Slider
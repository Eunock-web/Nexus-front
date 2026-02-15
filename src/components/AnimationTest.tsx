import { motion } from "motion/react"

const variantes = {
    apparition : { y: -500, rotate: -180, opacity: 0 },
    stationnaire : { y: 0, rotate: 0, opacity: 1,transitions :{ 
                y: { type: "spring", damping: 10 },

                opacity: { type: "tween", duration: 2 },} },
}

function AnimationTest() {
    return <>
        < motion.div className="justify-center items-center border-2 border-black rounded-2xl w-25 h-25 mx-auto mt-3 bg-blue-800 hover:cursor-pointer "
            variants={variantes}
            initial = "apparition"
            animate = "stationnaire"

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

export default AnimationTest
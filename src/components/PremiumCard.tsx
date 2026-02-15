import { motion, useMotionValue, useTransform } from "motion/react"

const maVariantes = {
    debut: { y: 100, opacity: 0 },
    fin: { y: 0, opacity: 1 },
    survole: { y: -10, borderColor: "#1e40af" } // ✅ Correction : "survole" au lieu de "suvole"
}

function PremiumCard() {
    const x = useMotionValue(0)
    const moove = useTransform(x, [0, 200], ["#1e40af", "#ef4444"])
    
    return (
        <>
            <motion.div
                drag="x"
                style={{ x: x, backgroundColor: moove }}
                dragConstraints={{ left: 0, right: 200 }}
                variants={maVariantes} // ✅ Ajout : lier les variantes
                initial="debut"
                animate="fin"
                whileHover="survole" // ✅ Correction : "survole" au lieu de "suvole"
                className="w-64 h-40 rounded-lg cursor-grab active:cursor-grabbing flex items-center justify-center text-white font-bold"
            >
                Drag me!
            </motion.div>
        </>
    )
}

export default PremiumCard
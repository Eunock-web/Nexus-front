import { motion } from "motion/react"

const containerVariants = {
    cache: { opacity: 0 },
    visible: {
        opacity : 1,
        transition: {
            staggerChildren: 0.3,
        },
    }
}

const itemsVariant = {
    cache: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
}

function ListeCascades() {
    return <>
        <motion.ul
            variants={containerVariants}
            initial="cache"
            animate="visible"
        >
            <motion.li variants={itemsVariant} > Item 1 </motion.li>
            <motion.li variants={itemsVariant} > Item 2 </motion.li>
            <motion.li variants={itemsVariant} > Item 3 </motion.li>
        </motion.ul>

    </>
}

export default ListeCascades
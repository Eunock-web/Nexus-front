import { Kanban, Mail, UsersRound } from "lucide-react"
import MainCard from "../../components/MainCard"
import { motion } from "motion/react"

const maindata = [
    {
        id: 1,
        title: "Unified Inbox",
        description: "Centralize all communications from Slack, Email, and Discord into one dark-themed interface.",
        icon: <Mail />
    },

    {
        id: 2,
        title: "Visual Task Boards",
        description: "Manage complex workflows with intuitive drag-and-drop boards designed for rapid task updates.",
        icon: <Kanban />
    },

    {
        id: 3,
        title: "Real-time Collaboration",
        description: "Edit documents, leave cmments, and track changes instantly with your entire remote team.",
        icon: <UsersRound />
    }

]

function Main() {
    // Animation variants for stagger effect on logos
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const logoVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 10
            }
        }
    }

    // Card variants with rotation effect
    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            rotateY: -90,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 80,
                damping: 15
            }
        }
    }

    return <>
        <div className="grid grid-cols-1 gap-10 bg-black/20 md:py-15 md:px-30 py-9 px-5">
            {/* Trust Section with stagger animation */}
            <motion.div
                className="grid grid-cols-1 gap-10 mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.p
                    className="text-lg text-[#94A3B8] font-semibold uppercase tracking-widest mb-10 text-center"
                    initial={{ opacity: 0, letterSpacing: "0.3em" }}
                    whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    TRUSTED BY HIGH-PERFORMANCE TEAMS GLOBALLY
                </motion.p>
                <motion.div
                    className="flex flex-wrap justify-center items-center gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    {["TECHCORP", "NEXUS", "ORBITAL", "VANTAGE", "SYNERGY"].map((brand) => (
                        <motion.h1
                            key={brand}
                            className="font-black text-2xl text-[#94A3B8] hover:text-primary transition-colors cursor-pointer"
                            variants={logoVariants}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, -5, 0],
                                transition: { duration: 0.5 }
                            }}
                        >
                            {brand}
                        </motion.h1>
                    ))}
                </motion.div>
            </motion.div>

            {/* Capabilities Section with slide animations */}
            <motion.div
                className="flex flex-col gap-4 mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <motion.p
                    className="text-primary text-sm uppercase font-bold tracking-widest"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                >
                    CAPABILITIES
                </motion.p>
                <motion.h1
                    className="font-bold text-white text-4xl leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.4 }}
                >
                    Engineered for Excellence
                </motion.h1>
                <motion.p
                    className="text-gray-400 text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Everything you need to manage your projects and team in one hight-performance interface.
                </motion.p>
            </motion.div>

            {/* Cards with 3D rotation effect */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={cardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{ perspective: 1000 }}
            >
                {maindata.map((data) => (
                    <motion.div
                        key={data.id}
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                    >
                        <MainCard
                            title={data.title}
                            description={data.description}
                            icon={data.icon}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </>
}

export default Main
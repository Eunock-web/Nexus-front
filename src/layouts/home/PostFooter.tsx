import { motion } from 'motion/react';

function PostFooter() {
    return <>
        <motion.div
            className="bg-primary/80 p-5 py-20 md:py-10 flex flex-col gap-20 md:gap-10 rounded-2xl md:w-[50%] justify-center items-center md:ml-120"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                type: "spring" as const,
                stiffness: 80,
                damping: 15
            }}
        >
            <motion.div
                className="flex flex-col justify-center items-center gap-10 md:gap-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <motion.h1
                    className="font-bold text-white text-4xl text-center md:text-5xl"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    Ready to transform your workspace?
                </motion.h1>
                <motion.p
                    className="text-center text-white md:text-xl"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Join 50,000+ professionals who have optimized their daily flow with Negux.
                </motion.p>
            </motion.div>

            <motion.div
                className=" grid grid-cols-1 md:grid-cols-2  gap-3 justify-center items-center "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                <motion.button
                    className="text-primary py-3 px-5 rounded-xl border border-white  bg-white text-xl hover:cursor-pointer"
                    whileHover={{
                        scale: 1.08,
                        boxShadow: "0 0 25px rgba(255, 255, 255, 0.6)",
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        y: [0, -5, 0],
                        transition: {
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                            delay: 1
                        }
                    }}
                >
                    Get Started Free
                </motion.button>
                <motion.button
                    className=" bg-primary/80 border border-gray-100 py-3 px-5  rounded-xl text-white text-xl ml-2 hover:cursor-pointer"
                    whileHover={{
                        scale: 1.08,
                        backgroundColor: "rgba(var(--primary-rgb), 0.95)",
                        borderColor: "#ffffff",
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                >
                    Contact Sales
                </motion.button>
            </motion.div>

            <motion.p
                className="text-center text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
            >
                No credits card required. 14-day free trial.
            </motion.p>
        </motion.div>
    </>
}

export default PostFooter
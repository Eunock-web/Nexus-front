import CarousselPresentation from "../layouts/home/CarousselPresentation";
import Footer from "../layouts/home/Footer";
import Hero from "../layouts/home/Hero";
import Main from "../layouts/home/Main";
import NavBar from "../layouts/home/NavBar";
import PostFooter from "../layouts/home/PostFooter";
import { motion } from "motion/react";

// Variants d'animation pour le container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

// Variants d'animation pour les éléments enfants
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        }
    }
};

// Variants pour les sections avec viewport
const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 80,
            damping: 20
        }
    }
};

function Home() {
    return <>
        <motion.div
            className="px-3 flex flex-col bg-dark"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* NavBar avec animation immédiate */}
            <motion.div variants={itemVariants}>
                <NavBar />
            </motion.div>

            {/* Hero avec animation en cascade */}
            <motion.div variants={itemVariants}>
                <Hero />
            </motion.div>

            {/* Main avec animation au scroll */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Main />
            </motion.div>

            {/* Carousel avec animation au scroll */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <CarousselPresentation />
            </motion.div>

            {/* PostFooter avec animation au scroll */}
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <PostFooter />
            </motion.div>

            {/* Footer avec animation finale */}
            <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <Footer />
            </motion.div>
        </motion.div>
    </>
}

export default Home;
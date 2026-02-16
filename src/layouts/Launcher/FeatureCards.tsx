import { motion } from 'motion/react';
import { Zap, Users, FileText } from 'lucide-react';

function FeatureCards() {
    const features = [
        {
            icon: Zap,
            title: "Performance",
            description: "Optimisez votre productivité",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Travaillez en équipe efficacement",
            color: "from-blue-500 to-cyan-500",
            isCenter: true
        },
        {
            icon: FileText,
            title: "Organisation",
            description: "Gérez vos projets facilement",
            color: "from-emerald-500 to-teal-500"
        }
    ];

    return (
        <div className="w-full py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isCenter = feature.isCenter;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: isCenter ? 0.3 : index * 0.15,
                                    ease: "easeOut"
                                }}
                                className={`relative group ${isCenter ? 'md:scale-110' : ''}`}
                            >
                                <motion.div
                                    className={`relative bg-semiprimary border border-white/10 rounded-2xl p-6 overflow-hidden ${isCenter ? 'h-64' : 'h-56'
                                        }`}
                                    whileHover={{
                                        scale: 1.05,
                                        borderColor: "rgba(255, 255, 255, 0.3)",
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Gradient background */}
                                    <div className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-4">
                                        {/* Icon */}
                                        <motion.div
                                            className={`bg-linear-to-br ${feature.color} p-4 rounded-xl shadow-lg`}
                                            whileHover={{ rotate: 5, scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Icon className="text-white" size={isCenter ? 36 : 32} />
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className={`font-bold text-white ${isCenter ? 'text-2xl' : 'text-xl'}`}>
                                            {feature.title}
                                        </h3>

                                        {/* Description */}
                                        <p className={`text-gray-400 ${isCenter ? 'text-base' : 'text-sm'}`}>
                                            {feature.description}
                                        </p>
                                    </div>

                                    {/* Hover effect - gradient border glow */}
                                    <motion.div
                                        className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-0 group-hover:opacity-30 blur-xl -z-10`}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FeatureCards;

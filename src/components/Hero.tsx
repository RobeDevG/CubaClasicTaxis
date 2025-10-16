import type React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Star, Award } from "lucide-react"
import heroBg from "../assets/hero-bg.png"

const Hero: React.FC = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola! Me interesa reservar un taxi clásico. ¿Podrían darme más información?")
    window.open(`https://wa.me/5352384482?text=${message}`, "_blank")
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

      {/* Background Pattern - keep existing */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-400 rotate-45"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-yellow-400"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center relative z-20"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              >
                <Star className="h-6 w-6 text-yellow-400 fill-current" />
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-2 text-yellow-400 font-medium">
            <Award className="h-5 w-5" />
            <span>25+ {t("hero.experience")}</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
        >
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            {t("hero.title")}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-full shadow-2xl hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 cursor-pointer"
          >
            {t("hero.cta")}
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-yellow-400 rounded-full opacity-40"
        ></motion.div>
      </motion.div>

      {/* Debug: Show if image is loading */}
      <div className="absolute bottom-4 right-4 z-30 text-white text-xs opacity-50">
        Background: {heroBg ? "Loaded" : "Not loaded"}
      </div>
    </section>
  )
}

export default Hero
"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Car, Star, Shield, Music, Snowflake, Users } from "lucide-react"
import car1 from "../assets/car1.png"
import car2 from "../assets/car2.png"

const Services: React.FC = () => {
  const { t } = useTranslation()

  const taxis = [
    {
      key: "taxi1",
      image: car1,
      color: "from-emerald-500 to-teal-600",
      accentColor: "text-emerald-600",
      bgColor: "bg-emerald-500",
      borderColor: "border-emerald-500",
      whatsappNumber: "+5355799449",
    },
    {
      key: "taxi2",
      image: car2,
      color: "from-red-500 to-rose-600",
      accentColor: "text-red-600",
      bgColor: "bg-red-500",
      borderColor: "border-red-500",
      whatsappNumber: "+53 52026190",
    },
  ]

  const featureIcons = {
    0: Car,
    1: Snowflake,
    2: Shield,
    3: Music,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const handleWhatsAppClick = (phoneNumber: string, carName: string) => {
    const message = encodeURIComponent(`Hola! Me interesa reservar el ${carName}. ¿Podrían darme más información?`)
    window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${message}`, "_blank")
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("services.subtitle")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto"
        >
          {taxis.map((taxi) => {
            // Get features as array with proper typing
            const features = t(`services.${taxi.key}.features`, { returnObjects: true }) as string[]

            return (
              <motion.div
                key={taxi.key}
                variants={cardVariants}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden group relative"
              >
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${taxi.color}`}></div>

                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={taxi.image || "/placeholder.svg"}
                    alt={t(`services.${taxi.key}.name`)}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${taxi.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* Floating badges */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className={`${taxi.bgColor} text-white px-4 py-2 rounded-full font-bold text-sm`}>
                      {t(`services.${taxi.key}.year`)}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="font-bold text-gray-800">{t(`services.${taxi.key}.price`)}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">{t(`services.${taxi.key}.name`)}</h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{t(`services.${taxi.key}.description`)}</p>

                  {/* Info Cards */}
                  <div className="grid grid-cols-1 gap-3 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                      <Users className={`h-5 w-5 ${taxi.accentColor}`} />
                      <span className="font-medium text-gray-700">{t(`services.${taxi.key}.capacity`)}</span>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {features.map((feature: string, featureIndex: number) => {
                      const IconComponent = featureIcons[featureIndex as keyof typeof featureIcons]
                      return (
                        <motion.div
                          key={featureIndex}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center space-x-2 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-all duration-300"
                        >
                          <IconComponent className={`h-5 w-5 ${taxi.accentColor}`} />
                          <span className="text-sm font-medium text-gray-700">{feature}</span>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Action Button - Solo Reservar */}
                  <div className="flex">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsAppClick(taxi.whatsappNumber, t(`services.${taxi.key}.name`))}
                      className={`w-full py-3 bg-gradient-to-r ${taxi.color} text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300`}
                    >
                      {t("services.bookNow")}
                    </motion.button>
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${taxi.color} opacity-10 rounded-bl-full`}
                ></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl p-8 max-w-2xl mx-auto text-black">
            <h3 className="text-2xl font-bold mb-4">{t("services.specialTitle")}</h3>
            <p className="mb-6">{t("services.specialDescription")}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleWhatsAppClick("+53 52026190", "servicios personalizados")}
              className="px-8 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300"
            >
              {t("services.contactNow")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

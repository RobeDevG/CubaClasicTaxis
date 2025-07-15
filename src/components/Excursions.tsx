import type React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Clock, Users, Star, MapPin } from "lucide-react"
import vinalesImg from "../assets/viñales.png"
import habanaImg from "../assets/habana.png"
import trinidadImg from "../assets/trinidad.png"
import cuevalospeceImg from "../assets/cuevadelospeces.png"

const Excursions: React.FC = () => {
  const { t } = useTranslation()

  const excursions = [
    {
      key: "vinales",
      image: vinalesImg,
      duration: "8h",
      capacity: "4 personas",
      price: "$85",
      location: "Pinar del Río",
      color: "from-green-500 to-emerald-600",
    },
    {
      key: "habana",
      image: habanaImg,
      duration: "4h",
      capacity: "4 personas",
      price: "$65",
      location: "La Habana",
      color: "from-amber-500 to-orange-600",
    },
    {
      key: "trinidad",
      image: trinidadImg,
      duration: "6h",
      capacity: "4 personas",
      price: "$75",
      location: "Sancti Spíritus",
      color: "from-teal-500 to-cyan-600",
    },
    {
      key: "cuevalospeces",
      image: cuevalospeceImg,
      duration: "7h",
      capacity: "4 personas",
      price: "$90",
      location: "Matanzas",
      color: "from-blue-500 to-teal-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleWhatsAppClick = (tourName: string) => {
    const message = encodeURIComponent(`Hola! Me interesa la excursión "${tourName}". ¿Podrían darme más información?`)
    window.open(`https://wa.me/5352026190?text=${message}`, "_blank")
  }

  return (
    <section id="excursions" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("excursions.title")}</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">{t("excursions.subtitle")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {excursions.map((excursion) => {
            const highlights = t(`excursions.tours.${excursion.key}.highlights`, { returnObjects: true }) as string[]

            return (
              <motion.div
                key={excursion.key}
                variants={cardVariants}
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer h-full flex flex-col"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={excursion.image || "/placeholder.svg"}
                    alt={t(`excursions.tours.${excursion.key}.title`)}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {excursion.price}
                    </span>
                  </div>

                  {/* Location Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
                      <MapPin className="h-4 w-4 text-yellow-400" />
                      <span className="text-white text-sm font-medium">{excursion.location}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Section - Flex grow to push button to bottom */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">{t(`excursions.tours.${excursion.key}.title`)}</h3>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                    {t(`excursions.tours.${excursion.key}.description`)}
                  </p>

                  {/* Tour Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2 text-gray-300 text-sm">
                      <Clock className="h-4 w-4 text-yellow-500" />
                      <span>{excursion.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300 text-sm">
                      <Users className="h-4 w-4 text-yellow-500" />
                      <span>{excursion.capacity}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {highlights.slice(0, 4).map((highlight: string, index: number) => (
                        <div key={index} className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-md text-center">
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Button - Always at bottom */}
                  <div className="mt-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsAppClick(t(`excursions.tours.${excursion.key}.title`))}
                      className={`w-full py-3 bg-gradient-to-r ${excursion.color} text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300`}
                    >
                      {t("excursions.book")}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Excursions

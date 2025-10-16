import type React from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { MessageCircle, /* Facebook, Instagram, */ Phone, Mail } from "lucide-react"

const Contact: React.FC = () => {
  const { t } = useTranslation()

  const contactMethods = [
    {
      key: "whatsapp",
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-400 hover:to-green-500",
      url: "https://wa.me/5352384482",
      bgColor: "bg-green-50",
    },
    /* {
      key: "facebook",
      icon: Facebook,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
      url: "https://facebook.com/classictaxiagency",
      bgColor: "bg-blue-50",
    },
    {
      key: "instagram",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-400 hover:to-purple-500",
      url: "https://instagram.com/classictaxiagency",
      bgColor: "bg-pink-50",
    }, */
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

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message = encodeURIComponent("Hola! Me interesa conocer más sobre sus servicios de taxis clásicos.")
    window.open(`https://wa.me/${phoneNumber.replace(/\s/g, "")}?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t("contact.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-8 max-w-4xl mx-auto"
        >
          {contactMethods.map((method) => {
            const IconComponent = method.icon
            return (
              <motion.a
                key={method.key}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block p-8 ${method.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="text-center">
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${method.color} ${method.hoverColor} transition-all duration-300 mb-4 group-hover:scale-110`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t(`contact.${method.key}`)}</h3>

                  <p className="text-gray-600 mb-4">{t(`contact.${method.key}Text`)}</p>

                  <div
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${method.color} text-white rounded-full text-sm font-medium ${method.hoverColor} transition-all duration-300`}
                  >
                    <span>{t("contact.contact")}</span>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-black text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">{t("contact.contactInfo")}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3 justify-center">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <motion.a
                    href="https://wa.me/5352384482"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      handleWhatsAppClick("5352384482")
                    }}
                  >
                    +53 52384482
                  </motion.a>
                </div>
                <div className="flex items-center space-x-3 justify-center">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <motion.a
                    href="https://wa.me/5353431628"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      handleWhatsAppClick("5353431628")
                    }}
                  >
                    +53 53431628
                  </motion.a>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span>info@classictaxi.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
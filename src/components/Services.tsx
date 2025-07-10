import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Car, Star, Clock, Shield, Music, Snowflake } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const taxis = [
    {
      key: 'taxi1',
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-red-600 to-red-800'
    },
    {
      key: 'taxi2',
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  const featureIcons = {
    0: Car,
    1: Snowflake,
    2: Music,
    3: Shield
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {taxis.map((taxi, index) => (
            <motion.div
              key={taxi.key}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={taxi.image}
                  alt={t(`services.${taxi.key}.name`)}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${taxi.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 px-3 py-1 rounded-full">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t(`services.${taxi.key}.name`)}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {t(`services.${taxi.key}.description`)}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {t(`services.${taxi.key}.features`, { returnObjects: true }).map((feature: string, featureIndex: number) => {
                    const IconComponent = featureIcons[featureIndex as keyof typeof featureIcons];
                    return (
                      <motion.div
                        key={featureIndex}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                      >
                        <IconComponent className="h-5 w-5 text-yellow-600" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
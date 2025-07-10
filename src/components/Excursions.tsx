import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Users, Star } from 'lucide-react';

const Excursions: React.FC = () => {
  const { t } = useTranslation();

  const excursions = [
    {
      key: 'city',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '3h',
      capacity: '4 personas',
      price: '$120'
    },
    {
      key: 'sunset',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '2h',
      capacity: '2 personas',
      price: '$150'
    },
    {
      key: 'historic',
      image: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: '4h',
      capacity: '4 personas',
      price: '$180'
    },
    {
      key: 'custom',
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      duration: 'Flexible',
      capacity: '1-4 personas',
      price: 'Cotizar'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="excursions" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('excursions.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('excursions.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {excursions.map((excursion, index) => (
            <motion.div
              key={excursion.key}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={excursion.image}
                  alt={t(`excursions.tours.${excursion.key}.title`)}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {excursion.price}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {t(`excursions.tours.${excursion.key}.title`)}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {t(`excursions.tours.${excursion.key}.description`)}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <Clock className="h-4 w-4 text-yellow-500" />
                    <span>{excursion.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300 text-sm">
                    <Users className="h-4 w-4 text-yellow-500" />
                    <span>{excursion.capacity}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
                >
                  Reservar
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            {t('excursions.viewAll')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Excursions;
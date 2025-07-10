import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Car, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg">
              <Car className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold">Classic Taxi Agency</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            {t('footer.tagline')}
          </p>
          
          <div className="border-t border-gray-800 pt-6">
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Classic Taxi Agency.</span>
              <span>{t('footer.rights')}</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
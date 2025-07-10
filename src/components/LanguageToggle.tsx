import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg font-medium transition-colors duration-300"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase text-sm font-bold">
        {i18n.language === 'es' ? 'EN' : 'ES'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
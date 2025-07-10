import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Car, Globe } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'services', href: '#services' },
    { key: 'excursions', href: '#excursions' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg">
              <Car className="h-6 w-6 text-black" />
            </div>
            <span className="text-xl font-bold text-white">Classic Taxi</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                {t(`nav.${item.key}`)}
              </motion.a>
            ))}
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
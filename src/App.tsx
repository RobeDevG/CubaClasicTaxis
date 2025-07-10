import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './i18n/config';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Excursions from './components/Excursions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title and meta description based on language
    const updateSEO = () => {
      const lang = localStorage.getItem('i18nextLng') || 'es';
      const title = lang === 'es' 
        ? 'Classic Taxi Agency - Taxis Vintage de Lujo'
        : 'Classic Taxi Agency - Luxury Vintage Taxis';
      const description = lang === 'es'
        ? 'Servicio de taxis clásicos americanos y excursiones turísticas. Experimenta el lujo vintage con nuestros autos clásicos restaurados.'
        : 'Classic American taxi service and tourist excursions. Experience vintage luxury with our restored classic cars.';
      
      document.title = title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
      document.documentElement.lang = lang;
    };

    updateSEO();
    window.addEventListener('languageChanged', updateSEO);
    
    return () => {
      window.removeEventListener('languageChanged', updateSEO);
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen"
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <Excursions />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
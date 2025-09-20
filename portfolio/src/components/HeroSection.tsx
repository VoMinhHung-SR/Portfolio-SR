'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';    
import { useTranslation } from 'next-i18next';

const HeroSection = () => {
  const { t } = useTranslation('common');
  const [text, setText] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // First useEffect to mark client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Second useEffect for animation (only runs on client)
  useEffect(() => {
    if (!isClient) return;
    
    const titleText = t('hero.title');
    
    let index = 0;
    setText('');
    const timer = setInterval(() => {
      if (index < titleText.length) {
        setText(titleText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setShowButtons(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [t, isClient]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };


  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-12"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold justify-end
           text-white mb-6 leading-tight">
            {isClient ? text : t('hero.title')}
            {isClient && (
              <motion.span
                className="inline-block w-5 h-1 bg-white ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isClient && showButtons ? 1 : (isClient ? 0 : 1) }}
            transition={{ delay: 0.5 }}
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        {(isClient ? showButtons : true) && (
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">{t('hero.viewProjects')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>

            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              transition={{ delay: 0.2 }}
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              {t('hero.contactMe')}
            </motion.button>
          </motion.div>
        )}

        {/* Enhanced Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isClient && showButtons ? 1 : (isClient ? 0 : 1), y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.span
            className="text-gray-400 text-sm mb-2 font-light"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

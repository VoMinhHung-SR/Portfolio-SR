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
    <section id="hero" className="min-h-screen flex items-center justify-center relative py-8 sm:py-12">
      <motion.div
        className="z-10 max-w-7xl mx-auto px-4 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            variants={itemVariants}
          >
            <motion.div
              className="mb-6 sm:mb-8 lg:mb-12"
              variants={itemVariants}
            >
              {/* Greeting - Smaller text */}
              <motion.h2 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {t('hero.greeting')}
              </motion.h2>
              
              {/* Main Title - Responsive text size */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
                {isClient ? text : t('hero.title')}
                {isClient && (
                  <motion.span
                    className="inline-block w-3 sm:w-4 lg:w-5 h-0.5 sm:h-1 bg-white ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto lg:mx-0"
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
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center"
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
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden group text-sm sm:text-base"
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
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-sm sm:text-base"
                >
                  {t('hero.contactMe')}
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Avatar Container - Responsive sizing */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 relative">
                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl"></div>
                
                {/* Avatar Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    {/* Placeholder for avatar - you can replace this with an actual image */}
                    <div className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      H
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements - Responsive sizing */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-purple-500 rounded-full"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-yellow-400 rounded-full"
                  animate={{ 
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

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

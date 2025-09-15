'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';    
import { useTranslation } from 'next-i18next';

const HeroSection = () => {
  const { t } = useTranslation('common');
  const [text, setText] = useState('');
  const [fullText, setFullText] = useState('');
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
    setFullText(titleText);
    
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}

      {/* Floating particles - only render on client */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="text-center z-10 max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar */}
        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Typing Text */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            {isClient ? text : t('hero.title')}
            {isClient && (
              <motion.span
                className="inline-block w-1 h-8 md:h-12 bg-blue-500 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {t('hero.viewProjects')}
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
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {t('hero.contactMe')}
            </motion.button>
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isClient && showButtons ? 1 : (isClient ? 0 : 1), y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { formatBoldText } from '../lib/helpers';

const AboutSection = () => {
  const { t } = useTranslation('common');

  const experiences = [
    {
      id: 'job1',
      isCurrent: true
    },
    {
      id: 'job2', 
      isCurrent: false
    },
    {
      id: 'job3',
      isCurrent: false
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('about.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6">
              {t('about.myJourney')}
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              <p dangerouslySetInnerHTML={{ __html: formatBoldText(t('about.journey1')) }} />
              <p dangerouslySetInnerHTML={{ __html: formatBoldText(t('about.journey2')) }} />
              <p dangerouslySetInnerHTML={{ __html: formatBoldText(t('about.journey3')) }} />
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white mb-4 sm:mb-6">
              {t('about.experience')}
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {experiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative flex items-start mb-6 sm:mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white dark:bg-gray-800 rounded-full border-2 sm:border-4 border-blue-500 shadow-lg">
                    <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${experience.isCurrent ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-4 sm:ml-6 flex-1">
                    <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md border-l-2 sm:border-l-4 border-blue-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white mb-1 lg:mb-0">
                          {t(`about.timeline.${experience.id}.title`)}
                        </h4>
                        <span className={`text-xs sm:text-sm px-3 sm:px-3 py-1 rounded-full w-fit ${
                          experience.isCurrent 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {experience.isCurrent ? t('about.timeline.current') : t(`about.timeline.${experience.id}.period`)}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {t(`about.timeline.${experience.id}.company`)}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {t(`about.timeline.${experience.id}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

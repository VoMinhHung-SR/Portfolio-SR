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
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              {t('about.myJourney')}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
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
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              {t('about.experience')}
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {experiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative flex items-start mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 shadow-lg">
                    <div className={`w-3 h-3 rounded-full ${experience.isCurrent ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                          {t(`about.timeline.${experience.id}.title`)}
                        </h4>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          experience.isCurrent 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {experience.isCurrent ? t('about.timeline.current') : t(`about.timeline.${experience.id}.period`)}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {t(`about.timeline.${experience.id}.company`)}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {t(`about.timeline.${experience.id}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            { number: '1+', label: t('about.stats.experience') },
            { number: '50+', label: t('about.stats.projects') },
            { number: '20+', label: t('about.stats.clients') },
            { number: '100%', label: t('about.stats.satisfaction') }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutSection;

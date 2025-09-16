import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const ProjectsSection = () => {
  const { t } = useTranslation('common');
  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tech: t('projects.project1.tech', { returnObjects: true }),
      image: t('projects.project1.image'),
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tech: t('projects.project2.tech', { returnObjects: true }),
      image: "/placeholder-project.jpg",
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      tech: t('projects.project3.tech', { returnObjects: true }),
      image: "/placeholder-project.jpg",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      tech: t('projects.project4.tech', { returnObjects: true }),
      image: "/placeholder-project.jpg",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      tech: t('projects.project5.tech', { returnObjects: true }),
      image: "/placeholder-project.jpg",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      tech: t('projects.project6.tech', { returnObjects: true }),
      image: "/placeholder-project.jpg",
      demoUrl: "#",
      codeUrl: "#",
      featured: false
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

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              variants={itemVariants}
            >
              {/* Project Image */}
              <div className="flex-1">
                <motion.div
                  className="relative bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg overflow-hidden shadow-lg aspect-video flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-white text-8xl opacity-30">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-20 h-20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(project.tech) ? (
                    (project.tech as string[]).map((tech: string, techIndex: number) => (
                      <span
                        key={`p-${project.id}-tech-${techIndex}`}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span
                      key={`p-${project.id}-tech`}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {String(project.tech)}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.demoUrl}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('projects.liveDemo')}
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('projects.viewCode')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
            {t('projects.otherTitle')}
          </h3>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h4>
                  <div className="flex gap-2">
                    <a
                      href={project.demoUrl}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <a
                      href={project.codeUrl}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(project.tech) ? (
                    (project.tech as string[]).map((tech: string, techIndex: number) => (
                      <span
                        key={`p-${project.id}-tech-${techIndex}`}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))
                  ) : (
                    <span
                      key={`p-${project.id}-tech`}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                    >
                      {String(project.tech)}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: 'Languages & Frameworks',
      skills: ['Odoo', 'Python', 'PostgreSQL', 'Pandas', 'Scikit-learn', 'TensorFlow'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'Tools & OS',
      skills: ['Windows', 'Linux', 'Excel', 'Collab Notebook'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      category: 'Soft Skills',
      skills: ['Time Management', 'Adaptability', 'Communication', 'Creativity', 'Problem Solving', 'Team Player'],
      color: 'from-pink-500 to-pink-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through hands-on experience
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="relative"
              whileHover={{ y: -8 }}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 hover:opacity-10 dark:hover:opacity-20 rounded-xl transition-opacity duration-300`}></div>

              <div className="relative glass rounded-xl p-8 backdrop-blur-md">
                <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>

                {/* Skills Floating Pills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${category.color} shadow-md hover:shadow-lg transition-shadow cursor-default`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-center text-slate-600 dark:text-slate-400 mb-6 font-semibold">Currently Working With</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {['Odoo 18', 'Python 3', 'PostgreSQL', 'Pandas', 'TensorFlow', 'Linux'].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="text-slate-700 dark:text-slate-300 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  tech: string[]
  category: string
  image: string
  link?: string
  github?: string
  span: 'col-span-1' | 'col-span-2'
}

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'XGS Integration Module',
      description: 'Custom Odoo 18 module for XGS logistics',
      fullDescription: 'Designed and developed a custom Odoo 18 module to integrate Xpress Global Systems (XGS) logistics services, enhancing ERP freight and shipping capabilities. Implemented real-time API communication for direct rate calculation and quotation generation based on product dimensions, weight, and delivery zones.',
      tech: ['Odoo', 'Python', 'PostgreSQL', 'API Integration'],
      category: 'odoo',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      span: 'col-span-1',
    },
    {
      id: 2,
      title: 'Lot Split Stock Management',
      description: 'Warehouse inventory optimization system',
      fullDescription: 'Developed a lot split stock module for Delivery/Quant operations, enabling automatic warehouse split into child lots for improved batch tracking, quality control, and customer-specific allocations. Implemented dynamic lot number generation and real-time inventory updates.',
      tech: ['Odoo', 'Python', 'ORM', 'Inventory Management'],
      category: 'odoo',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      span: 'col-span-1',
    },
    {
      id: 3,
      title: 'Handwritten Digit Recognition',
      description: 'CNN-based ML classification system',
      fullDescription: 'Implemented a Convolutional Neural Network to classify handwritten digits using the MNIST dataset. Designed and trained the model with multiple layers (Conv2D, MaxPooling, Dense) achieving high accuracy through noise reduction, normalization, and hyperparameter optimization.',
      tech: ['Python', 'TensorFlow', 'CNN', 'Machine Learning'],
      category: 'ml',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      span: 'col-span-1',
    },
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'odoo', label: 'Odoo Development' },
    { value: 'ml', label: 'Machine Learning' },
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
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Explore a curated selection of my work across Odoo development and machine learning
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === category.value
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`${project.span} group relative overflow-hidden rounded-xl cursor-pointer h-80 md:h-96`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                whileHover={{ y: -4 }}
              >
                {/* Background Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-500/30 border border-primary-400 text-white text-xs font-semibold rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Static Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 group-hover:hidden">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expanded Project Modal */}
        <AnimatePresence>
          {expandedProject && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {projects.find(p => p.id === expandedProject) && (
                  <>
                    <h3 className="text-3xl font-bold mb-4">
                      {projects.find(p => p.id === expandedProject)?.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {projects.find(p => p.id === expandedProject)?.fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects.find(p => p.id === expandedProject)?.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setExpandedProject(null)}
                      className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Close
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects

'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Full-Stack Odoo Developer & Problem Solver"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText[index])
        setIndex(prev => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [index, fullText])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-0"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-300 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 dark:bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary-500 dark:bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Headline */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span className="block mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
              Owais Mirakar
            </span>
          </h1>
        </motion.div>

        {/* Typing Effect Subtitle */}
        <motion.div
          variants={itemVariants}
          className="mb-8 h-20 md:h-24 flex items-center justify-center"
        >
          <p className="text-xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 min-h-fit">
            {displayText}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Leveraging problem-solving skills and technical expertise to design and implement
          efficient business solutions. Passionate about Odoo development, real-world project
          implementations, and building scalable ERP systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(79, 150, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

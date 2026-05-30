'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setIsLoading(false)
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

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

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mirakar101@gmail.com',
      href: 'mailto:mirakar101@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 70396 76785',
      href: 'tel:+917039676785',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/owais',
      href: '#',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/owais',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
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
              Let's Connect
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{link.label}</p>
                    <p className="text-slate-600 dark:text-slate-400">{link.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <motion.label
                  className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
                  htmlFor="name"
                >
                  Name
                </motion.label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-2 transition-colors focus:outline-none ${
                    errors.name
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-slate-200 dark:border-slate-700 focus:border-primary-500'
                  }`}
                  placeholder="Your name"
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.name && (
                  <motion.p
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <AlertCircle className="w-4 h-4" /> {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <motion.label
                  className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
                  htmlFor="email"
                >
                  Email
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-2 transition-colors focus:outline-none ${
                    errors.email
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-slate-200 dark:border-slate-700 focus:border-primary-500'
                  }`}
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.email && (
                  <motion.p
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <AlertCircle className="w-4 h-4" /> {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <motion.label
                  className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300"
                  htmlFor="message"
                >
                  Message
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border-2 transition-colors focus:outline-none resize-none ${
                    errors.message
                      ? 'border-red-500 dark:border-red-400'
                      : 'border-slate-200 dark:border-slate-700 focus:border-primary-500'
                  }`}
                  placeholder="Your message..."
                  whileFocus={{ scale: 1.01 }}
                />
                {errors.message && (
                  <motion.p
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <AlertCircle className="w-4 h-4" /> {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-400 rounded-lg flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Thanks for reaching out! I'll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Fix for missing AnimatePresence
const { AnimatePresence } = require('framer-motion')

export default Contact

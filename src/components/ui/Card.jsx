import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : {}}
      transition={{ duration: 0.3 }}
      className={`glass rounded-2xl p-6 ${hover ? 'hover:shadow-lg hover:shadow-gold-500/10' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}
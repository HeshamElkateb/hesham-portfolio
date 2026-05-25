import { motion } from 'framer-motion'

export default function Timeline({ children }) {
  return (
    <div className="relative">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
      <div className="space-y-12">{children}</div>
    </div>
  )
}

export function TimelineItem({ children, align = 'left', index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex items-center ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gold-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-gold-500/50" />
      <div className={`ml-16 md:ml-0 md:w-1/2 ${align === 'left' ? 'md:mr-8 md:text-right' : 'md:ml-8'}`}>
        {children}
      </div>
    </motion.div>
  )
}
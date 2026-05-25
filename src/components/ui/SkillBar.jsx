import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SkillBar({ name, level }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gold-400 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"
        />
      </div>
    </div>
  )
}
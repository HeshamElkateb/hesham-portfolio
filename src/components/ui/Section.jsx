import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Section({ id, children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 px-4 md:px-8 lg:px-16 ${className}`}
    >
      {children}
    </motion.section>
  )
}
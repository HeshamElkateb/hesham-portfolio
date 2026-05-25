import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', onClick, href, className = '', icon: Icon }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300"
  const variants = {
    primary: "bg-gradient-to-r from-gold-400 to-gold-500 text-dark-900 hover:shadow-lg hover:shadow-gold-500/30",
    secondary: "border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-dark-900",
    ghost: "text-gray-400 hover:text-gold-400"
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </Component>
  )
}
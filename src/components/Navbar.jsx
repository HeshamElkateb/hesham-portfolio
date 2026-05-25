import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Code, Globe, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', to: 'home', icon: Home },
  { name: 'About', to: 'about', icon: User },
  { name: 'Experience', to: 'experience', icon: Briefcase },
  { name: 'Skills', to: 'skills', icon: Code },
  { name: 'Projects', to: 'projects', icon: Globe },
  { name: 'Contact', to: 'contact', icon: Mail },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gold-gradient"
        >
          H
        </motion.a>

        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              offset={-70}
              className="px-4 py-2 text-gray-400 hover:text-gold-400 cursor-pointer transition-colors rounded-lg hover:bg-dark-700/50"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                offset={-70}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-6 py-4 text-gray-400 hover:text-gold-400 hover:bg-dark-700/50 transition-colors"
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
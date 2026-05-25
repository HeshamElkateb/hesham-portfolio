import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import { languages } from '../data/portfolio'

export default function Languages() {
  return (
    <Section id="languages">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-white">Languages</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/20 rounded-full flex items-center justify-center">
                  <Globe size={32} className="text-gold-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{lang.name}</h3>
                <p className="text-gold-400 mb-3">{lang.level}</p>
                <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.fluency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-gold-400 to-gold-500 rounded-full"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
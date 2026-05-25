import { motion } from 'framer-motion'
import { MapPin, Mail } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import { personalInfo, about } from '../data/portfolio'

export default function About() {
  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-white">About </span>
          <span className="gold-gradient">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="aspect-square flex items-center justify-center bg-dark-800">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-dark-900">H</span>
                </div>
                <p className="text-gray-500 text-sm">Replace with your photo</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                {about.bio}
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={20} className="text-gold-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={20} className="text-gold-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-gold-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
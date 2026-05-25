import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <Section id="education">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-white">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full -mr-16 -mt-16" />

            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gold-500/20 rounded-xl">
                <GraduationCap size={32} className="text-gold-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{education.institution}</h3>
                <p className="text-gold-400">{education.degree}</p>
                <p className="text-gray-500">{education.period}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Award size={20} className="text-gold-400" />
              <span className="text-gray-300">GPA:</span>
              <span className="text-gold-400 font-bold text-lg">{education.gpa}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-dark-700 text-gray-300 rounded-full"
                >
                  {course}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
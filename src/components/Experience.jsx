import { motion } from 'framer-motion'
import { Headphones, Code } from 'lucide-react'
import Section from './ui/Section'
import { Timeline, TimelineItem } from './ui/Timeline'
import Card from './ui/Card'
import { experience } from '../data/portfolio'

const icons = {
  headphones: Headphones,
  code: Code
}

export default function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-white">Work </span>
          <span className="gold-gradient">Experience</span>
        </motion.h2>

        <Timeline>
          {experience.map((exp, index) => {
            const Icon = icons[exp.icon]
            return (
              <TimelineItem key={exp.id} index={index}>
                <Card className="relative">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-500/20 rounded-xl shrink-0">
                      <Icon size={28} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-gold-400 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                      <p className="text-gray-400">{exp.description}</p>
                      {exp.languages && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.languages.map((lang, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs bg-dark-700 text-gray-400 rounded"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </TimelineItem>
            )
          })}
        </Timeline>
      </div>
    </Section>
  )
}
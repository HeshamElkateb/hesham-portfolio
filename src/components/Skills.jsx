import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './ui/Section'
import SkillBar from './ui/SkillBar'
import { skills } from '../data/portfolio'

const categories = [
  { id: 'programming', label: 'Programming' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'concepts', label: 'Concepts' }
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('programming')

  const getSkills = () => {
    switch (activeTab) {
      case 'programming': return skills.programming
      case 'technologies': return skills.technologies
      case 'concepts': return skills.concepts
      default: return skills.programming
    }
  }

  return (
    <Section id="skills">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-white">Technical </span>
          <span className="gold-gradient">Skills</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === cat.id
                    ? 'bg-gold-500 text-dark-900 font-semibold'
                    : 'bg-dark-700 text-gray-400 hover:text-gold-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {getSkills().map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SkillBar name={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
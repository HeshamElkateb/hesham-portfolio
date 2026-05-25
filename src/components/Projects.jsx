import { motion } from 'framer-motion'
import Section from './ui/Section'
import ProjectCard from './ui/ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-white">Featured </span>
          <span className="gold-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
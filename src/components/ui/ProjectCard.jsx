import { motion } from 'framer-motion'
import { Github, Star } from 'lucide-react'
import Card from './Card'

export default function ProjectCard({ project, index }) {
  const isFeatured = project.featured

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className={`${isFeatured ? 'col-span-full lg:col-span-2' : ''} relative overflow-hidden`}>
        {isFeatured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 text-gold-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-semibold">Featured</span>
          </div>
        )}

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        {project.stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {project.stats.map((stat, i) => (
              <div key={i} className="bg-dark-800 rounded-lg p-3 text-center">
                <div className="text-gold-400 font-bold text-lg">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-dark-700 text-gold-400 rounded-full border border-gold-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors"
            >
              <Github size={20} />
              <span>Code</span>
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  )
}
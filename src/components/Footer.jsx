import { Github, Linkedin, Heart } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-dark-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-gold-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-gold-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-gold-400" /> using React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
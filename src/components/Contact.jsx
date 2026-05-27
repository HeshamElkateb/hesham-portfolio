import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react'
import toast from 'react-hot-toast'
import Section from './ui/Section'
import Card from './ui/Card'
import Button from './ui/Button'
import { personalInfo } from '../data/portfolio'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvzarkz'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })

      if (response.ok) {
        toast.success('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    }

    setSending(false)
  }

  return (
    <Section id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-white">Get In </span>
          <span className="gold-gradient">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-gray-400 hover:text-gold-400 transition-colors"
                >
                  <div className="p-3 bg-gold-500/20 rounded-xl">
                    <Mail size={24} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p>{personalInfo.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="p-3 bg-gold-500/20 rounded-xl">
                    <MapPin size={24} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p>{personalInfo.location}</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-700 rounded-xl text-gray-400 hover:text-gold-400 hover:bg-dark-600 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-700 rounded-xl text-gray-400 hover:text-gold-400 hover:bg-dark-600 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-gold-500 focus:outline-none text-white transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-gold-500 focus:outline-none text-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:border-gold-500 focus:outline-none text-white transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={sending}
                  icon={Send}
                  className="w-full"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
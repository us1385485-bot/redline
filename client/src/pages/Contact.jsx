import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Twitter, Youtube, MessageCircle, Store, Headphones } from 'lucide-react'
import axios from 'axios'
import BatIllustration from '../components/BatIllustration'

const storeLocations = [
  {
    city: 'Lahore (Main Showroom)',
    address: 'Main Boulevard, Gulberg III, Lahore, Pakistan',
    phone: '0311 225474',
    hours: 'Mon-Sat: 10AM - 10PM | Sun: 2PM - 9PM',
    icon: Store,
  },
  {
    city: 'Karachi',
    address: 'Tariq Road, PECHS Block 2, Karachi, Pakistan',
    phone: '+92 300 1359971',
    hours: 'Mon-Sat: 11AM - 9PM | Sun: 3PM - 8PM',
    icon: Store,
  },
  {
    city: 'Islamabad',
    address: 'Jinnah Super Market, F-7 Markaz, Islamabad, Pakistan',
    phone: '0311 225474',
    hours: 'Mon-Sat: 10AM - 9PM | Sun: 2PM - 8PM',
    icon: Store,
  },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/redlinesports', color: 'hover:text-blue-400' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/redlinesports', color: 'hover:text-pink-400' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/redlinesports', color: 'hover:text-sky-400' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@redlinesports', color: 'hover:text-red-400' },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'General Inquiry',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await axios.post('/api/contact', form)
      if (response.data.success) {
        setSubmitted(true)
        setForm(initialForm)
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = "glass-input"
  const labelClass = "block text-sm font-medium text-blue-300/80 mb-2"

  const inquiryTypes = [
    'General Inquiry',
    'Product Information',
    'Custom Bat Order',
    'Bat Repair Service',
    'Wholesale/Partnership',
    'Feedback',
  ]

  return (
    <div className="pt-32 md:pt-40">
      {/* ==================== HERO ==================== */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pulse-glow" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-2.5 text-sm font-medium text-blue-300">
                <Headphones className="w-4 h-4 text-blue-500" />
                Contact Us
              </div>
              <h1 className="font-display font-bold text-5xl lg:text-6xl uppercase">
                Get in <span className="text-gradient-blue">Touch</span>
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-blue-200/70 text-lg">
                Questions about our bats, custom orders, or services? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="tel:+923001359971" className="glass-btn-red group">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a href="mailto:us123221@gmail.com" className="glass-btn-ghost">
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                <BatIllustration
                  variant="contact-hero"
                  grains={12}
                  glowColor="#3b82f6"
                  className="w-full max-w-md mx-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT INFO CARDS ==================== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                value: '+92 300 1359971',
                sub: 'Mon-Sat: 10AM - 10PM',
                href: 'tel:+923001359971',
              },
              {
                icon: Mail,
                title: 'Email Us',
                value: 'us123221@gmail.com',
                sub: 'We reply within 24 hours',
                href: 'mailto:us123221@gmail.com',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                value: 'Lahore, Pakistan',
                sub: '3 showrooms nationwide',
                href: '#locations',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-900/30 border border-blue-400/30 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-glow-blue transition-all duration-300">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-blue-200/70 font-medium">{item.value}</p>
                  <p className="text-blue-300/50 text-sm mt-1">{item.sub}</p>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== FORM + INFO ==================== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="glass-strong rounded-3xl p-8">
                <h2 className="font-display font-bold text-3xl mb-2">Send Us a Message</h2>
                <p className="text-blue-200/60 mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-400/40 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-blue-400" />
                    </div>
                    <h3 className="font-display font-bold text-3xl mb-4">Message Sent!</h3>
                    <p className="text-blue-200/70 mb-8">
                      Thank you for contacting REDLINE SPORTS. Our team will get back to you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="glass-btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="03XX-XXXXXXX"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Inquiry Type</label>
                        <select
                          name="inquiryType"
                          value={form.inquiryType}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          {inquiryTypes.map(type => (
                            <option key={type} className="bg-pitch-900">{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Message *</label>
                      <textarea
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="How can we help you?"
                        className={inputClass}
                      />
                    </div>

                    {error && (
                      <div className="glass rounded-xl p-4 border-red-500/40 bg-red-600/10 text-red-300 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="glass-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Social Links */}
              <div className="glass-card mt-6 p-6">
                <h3 className="font-display font-bold text-xl mb-4">Follow Us</h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-12 h-12 rounded-xl bg-white/5 border border-blue-400/20 flex items-center justify-center text-blue-300/70 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 ${color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map + Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Map */}
              <div className="map-placeholder aspect-[4/5] lg:aspect-auto lg:h-[400px]">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-400/50 flex items-center justify-center mb-4 pulse-glow">
                    <MapPin className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <div className="font-display font-bold text-xl mb-2">REDLINE SPORTS</div>
                    <p className="text-blue-300/60 text-sm">Interactive Map Coming Soon</p>
                  </div>
                </div>
              </div>

              {/* Store Locations */}
              <div id="locations" className="space-y-4">
                <h3 className="font-display font-bold text-2xl">Our Stores</h3>
                {storeLocations.map((location, index) => {
                  const Icon = location.icon
                  return (
                    <motion.div
                      key={location.city}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-display font-bold text-lg">{location.city}</h4>
                          <p className="text-blue-200/60 text-sm mt-1">{location.address}</p>
                          <div className="flex flex-col sm:flex-row gap-4 mt-3 text-sm">
                            <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-blue-300/70 hover:text-blue-400 transition-colors">
                              <Phone className="w-3.5 h-3.5 text-blue-500" />
                              {location.phone}
                            </a>
                            <span className="flex items-center gap-2 text-blue-300/70">
                              <Clock className="w-3.5 h-3.5 text-blue-500" />
                              {location.hours}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-900/20" />
            <div className="relative">
              <h2 className="section-title text-4xl lg:text-5xl">
                Ready to <span className="text-gradient-blue">Order?</span>
              </h2>
              <p className="text-blue-200/70 max-w-2xl mx-auto mt-4 text-lg">
                Visit our showrooms, call us, or send a message — we're always ready to help you find your perfect bat.
              </p>
              <a href="tel:+923001359971" className="inline-flex glass-btn-red mt-8">
                <Phone className="w-5 h-5" />
                Call +92 300 1359971
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Hammer, Droplets, Shield, Hand, Scale, Send, CheckCircle, Phone, Mail, ChevronRight, Wrench, Paintbrush, Zap, ChevronLeft } from 'lucide-react'
import axios from 'axios'
import BatIllustration from '../components/BatIllustration'

const services = [
  {
    icon: Hammer,
    title: 'Bat Knocking-in',
    description: 'Professional knocking-in service to prepare your bat for match play. We use premium quality knocking-in hammers and follow the correct process to ensure your bat is game-ready.',
    duration: '2-3 Days',
    price: '₨1,500',
    image: 'https://images.unsplash.com/photo-1628051245385-aa2521d3e27d?w=800&q=80',
  },
  {
    icon: Droplets,
    title: 'Bat Oiling',
    description: 'Raw linseed oil treatment to protect and preserve your willow. Our craftsmen apply the perfect amount of oil to keep your bat in optimal condition.',
    duration: '1-2 Days',
    price: '₨800',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80',
  },
  {
    icon: Shield,
    title: 'Scuff Sheet Application',
    description: 'Professional scuff sheet application to protect the face and edges of your bat. We use high-quality anti-scuff sheets for maximum durability.',
    duration: '1 Day',
    price: '₨1,200',
    image: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&q=80',
  },
  {
    icon: Hand,
    title: 'Custom Handle Replacement',
    description: 'Replace your bat handle with a custom option - round, oval, or semi-oval. We match the handle to your playing style and grip preference.',
    duration: '2-3 Days',
    price: '₨2,500',
    image: 'https://images.unsplash.com/photo-1618506412326-df59d6cc929b?w=800&q=80',
  },
  {
    icon: Scale,
    title: 'Custom Weighted Bats',
    description: 'Order a bat with your exact weight preference. We can adjust the weight distribution to suit your batting style - from light pick-up to heavy power.',
    duration: '5-7 Days',
    price: 'From ₨35,000',
    image: 'https://images.unsplash.com/photo-1628004196018-78c3c7ceef95?w=800&q=80',
  },
  {
    icon: Wrench,
    title: 'Grip Replacement',
    description: 'Premium grip replacement service with a variety of colors and thicknesses. Get the perfect grip for your hands.',
    duration: '1 Day',
    price: '₨500',
    image: 'https://images.unsplash.com/photo-1628051245385-aa2521d3e27d?w=800&q=80',
  },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  batType: 'English Willow',
  weight: '2.8 lbs',
  profile: 'Hybrid',
  handle: 'Semi-Oval',
  gripColor: 'Blue',
  specialRequests: '',
}

export default function Customization() {
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
      const response = await axios.post('/api/custom-order', form)
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

  return (
    <div className="pt-32 md:pt-40">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
                <Paintbrush className="w-4 h-4 text-blue-500" />
                Customization & Services
              </div>
              <h1 className="font-display font-bold text-5xl lg:text-6xl uppercase">
                Your Bat,
                <span className="text-gradient-blue block mt-2">Your Way</span>
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-blue-200/70 text-lg">
                From professional knocking-in to fully custom bats — we offer a complete range of services to make your bat perfect.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a href="#custom-order" className="glass-btn-primary group">
                  Custom Order
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+923001359971" className="glass-btn-ghost">
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                >
                  <BatIllustration
                    variant="custom-hero"
                    grains={13}
                    glowColor="#ec4899"
                    className="w-full max-w-md mx-auto drop-shadow-[0_0_40px_rgba(236,72,153,0.3)]"
                  />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                  className="absolute top-8 left-0 glass-strong rounded-2xl px-5 py-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/40 to-rose-900/40 border border-pink-400/40 flex items-center justify-center">
                    <Scale className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">Custom Weight</div>
                    <div className="text-blue-300/70 text-xs">2.4 - 3.2 lbs</div>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, delay: 0.8 }}
                  className="absolute bottom-16 -right-2 glass-strong rounded-2xl px-5 py-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/40 to-blue-900/40 border border-blue-400/40 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">Pro Knocking</div>
                    <div className="text-blue-300/70 text-xs">Game Ready</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title text-4xl lg:text-5xl"
            >
              Our <span className="text-gradient-blue">Services</span>
            </motion.h2>
            <p className="section-subtitle mt-4">
              Professional bat care and customization services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card group overflow-hidden"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pitch-950 via-pitch-950/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/40 to-blue-900/40 border border-blue-400/40 flex items-center justify-center backdrop-blur-lg">
                      <Icon className="w-6 h-6 text-blue-300" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
                    <p className="text-blue-200/60 text-sm leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-blue-400/10">
                      <div>
                        <div className="text-blue-300/60 text-xs">Duration</div>
                        <div className="text-sm font-medium text-blue-200">{service.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-300/60 text-xs">Price</div>
                        <div className="font-display font-bold text-lg text-gradient-blue">{service.price}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== CUSTOM ORDER FORM ==================== */}
      <section className="py-16" id="custom-order">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="section-title text-4xl lg:text-5xl mb-4">
                  Custom <span className="text-gradient-blue">Bat Order</span>
                </h2>
                <p className="text-blue-200/70 leading-relaxed">
                  Tell us exactly what you need and our craftsmen will build the perfect bat for you. Whether it's a specific weight, profile, or handle type — we've got you covered.
                </p>
              </div>

              {/* Bat customization showcase */}
              <div className="relative rounded-3xl overflow-hidden border border-blue-400/20">
                <div className="relative aspect-[16/9]">
                  <img
                    src="https://images.unsplash.com/photo-1618506412326-df59d6cc929b?w=800&q=80"
                    alt="Custom bat craftsmanship"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pitch-950 via-pitch-950/60 to-transparent" />
                  <div className="absolute right-6 bottom-6 glass-strong rounded-2xl px-6 py-4">
                    <div className="font-display font-bold text-2xl text-gradient-blue">100%</div>
                    <div className="text-blue-300/70 text-xs">Custom-Made</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Scale, title: 'Custom Weight', desc: 'From 2.4 lbs to 3.2 lbs, we can match your exact preference.' },
                  { icon: Paintbrush, title: 'Custom Profile', desc: 'Hybrid, Bow Face, Curved Blade, or Flat Face — your choice.' },
                  { icon: Hand, title: 'Custom Handle', desc: 'Round, Oval, or Semi-Oval handles to suit your grip.' },
                  { icon: Shield, title: 'Premium Materials', desc: 'Grade 1+ English Willow or premium Kashmir Willow.' },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start gap-4 glass-card p-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <p className="text-blue-200/60 text-xs mt-1">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="glass-strong rounded-2xl p-6">
                <h3 className="font-display font-bold text-lg mb-4">Prefer to talk?</h3>
                <div className="space-y-3">
                  <a href="tel:+923001359971" className="flex items-center gap-3 text-blue-200/70 hover:text-blue-400 transition-colors">
                    <Phone className="w-4 h-4 text-blue-500" />
                    +92 300 1359971
                  </a>
                  <a href="mailto:us123221@gmail.com" className="flex items-center gap-3 text-blue-200/70 hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4 text-blue-500" />
                    us123221@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-3xl p-8"
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-blue-600/20 border border-blue-400/40 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="font-display font-bold text-3xl mb-4">Order Submitted!</h3>
                  <p className="text-blue-200/70 mb-8">
                    Thank you for your custom bat order. Our team will contact you within 24 hours to discuss the details.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="glass-btn-primary"
                  >
                    Submit Another Order
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display font-bold text-2xl mb-6">Request Custom Bat</h3>

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
                      <label className={labelClass}>Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="03XX-XXXXXXX"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Willow Type</label>
                      <select name="batType" value={form.batType} onChange={handleChange} className={inputClass}>
                        <option className="bg-pitch-900">English Willow</option>
                        <option className="bg-pitch-900">Kashmir Willow</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Weight</label>
                      <select name="weight" value={form.weight} onChange={handleChange} className={inputClass}>
                        {['2.4 lbs', '2.5 lbs', '2.6 lbs', '2.7 lbs', '2.8 lbs', '2.9 lbs', '3.0 lbs', '3.1 lbs', '3.2 lbs'].map(w => (
                          <option key={w} className="bg-pitch-900">{w}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Profile</label>
                      <select name="profile" value={form.profile} onChange={handleChange} className={inputClass}>
                        {['Hybrid', 'Bow Face', 'Curved Blade', 'Flat Face'].map(p => (
                          <option key={p} className="bg-pitch-900">{p}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Handle Type</label>
                      <select name="handle" value={form.handle} onChange={handleChange} className={inputClass}>
                        {['Semi-Oval', 'Oval', 'Round'].map(h => (
                          <option key={h} className="bg-pitch-900">{h}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Grip Color</label>
                    <select name="gripColor" value={form.gripColor} onChange={handleChange} className={inputClass}>
                      {['Blue', 'Red', 'Black', 'White', 'Green', 'Yellow'].map(c => (
                        <option key={c} className="bg-pitch-900">{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Special Requests</label>
                    <textarea
                      name="specialRequests"
                      value={form.specialRequests}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your playing style, any specific requirements..."
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
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Submit Custom Order
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
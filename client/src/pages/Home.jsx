import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Star, Award, Shield, Zap, Gauge, Target, Crown, ArrowRight, Phone, Sparkles, Flame, Trophy } from 'lucide-react'
import { products, testimonials } from '../data/products'
import BatIllustration from '../components/BatIllustration'

const highlights = [
  {
    icon: Crown,
    title: 'English Willow',
    description: 'Hand-selected Grade 1+ English Willow with premium straight grains for maximum performance.',
  },
  {
    icon: Gauge,
    title: 'Edge Thickness',
    description: 'Massive 40mm+ edges engineered to dominate even the best bowlers in the world.',
  },
  {
    icon: Target,
    title: 'Sweet Spot',
    description: 'Perfectly positioned sweet spot at the ideal height for explosive, effortless strokeplay.',
  },
  {
    icon: Shield,
    title: 'Pro Craftsmanship',
    description: 'Each bat undergoes 8+ hours of meticulous hand-crafting and quality control.',
  },
]

const stats = [
  { value: '10K+', label: 'Bats Crafted' },
  { value: '15+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Players' },
  { value: '100%', label: 'Hand-Crafted' },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80', alt: 'Cricket bat craftsmanship', label: 'Craftsmanship' },
  { src: 'https://images.unsplash.com/photo-1628051245385-aa2521d3e27d?w=800&q=80', alt: 'Premium cricket bats', label: 'Premium Willow' },
  { src: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&q=80', alt: 'Bat manufacturing', label: 'Manufacturing' },
  { src: 'https://images.unsplash.com/photo-1618506412326-df59d6cc929b?w=800&q=80', alt: 'Cricket bat details', label: 'Tour Grade' },
  { src: 'https://images.unsplash.com/photo-1628004196018-78c3c7ceef95?w=800&q=80', alt: 'Junior bats', label: 'Junior Range' },
  { src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80', alt: 'Bat workshop', label: 'Workshop' },
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export default function Home() {
  const featuredBats = products.slice(0, 4)

  return (
    <div className="pt-32 md:pt-40">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pulse-glow" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pulse-glow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-800/10 to-transparent rounded-full blur-[100px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-bg opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-2.5 text-sm font-medium text-blue-300">
                <Award className="w-4 h-4 text-blue-500" />
                Pakistan's Premium Cricket Equipment Brand
              </div>

              {/* Headline */}
              <h1 className="font-display font-bold uppercase leading-tight">
                <span className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight">
                  Crafted for
                  <span className="text-gradient-blue block mt-2">
                    Champions
                  </span>
                </span>
              </h1>

              {/* Subtext */}
              <p className="max-w-2xl mx-auto lg:mx-0 text-blue-200/70 text-lg sm:text-xl leading-relaxed">
                REDLINE SPORTS crafts high-performance cricket bats with premium English &
                Kashmir Willow, precision engineering, and championship DNA.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link to="/products" className="glass-btn-primary w-full sm:w-auto group">
                  Explore Bats
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/customization" className="glass-btn-ghost w-full sm:w-auto group">
                  Custom Orders
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Quick contact */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 text-sm text-blue-300/60">
                <a href="tel:+923001359971" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" /> +92 300 1359971
                </a>
                <span className="hidden sm:block text-blue-400/30">|</span>
                <a href="mailto:us123221@gmail.com" className="hover:text-blue-400 transition-colors">
                  us123221@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Right - Hero Bat Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="relative"
              >
                <BatIllustration
                  variant="hero"
                  grains={15}
                  glowColor="#3b82f6"
                  className="w-full max-w-xl mx-auto drop-shadow-[0_0_60px_rgba(59,130,246,0.4)]"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                className="absolute top-8 right-0 glass-strong rounded-2xl px-5 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/40 to-blue-900/40 border border-blue-400/40 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm">12+ Grains</div>
                  <div className="text-blue-300/70 text-xs">Premium Willow</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute bottom-10 -left-4 glass-strong rounded-2xl px-5 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/40 to-orange-900/40 border border-amber-400/40 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm">Tour Grade</div>
                  <div className="text-blue-300/70 text-xs">Pro-Level Performance</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, delay: 0.8 }}
                className="absolute bottom-32 right-8 glass-strong rounded-2xl px-5 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/40 to-rose-900/40 border border-pink-400/40 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm">44mm Edges</div>
                  <div className="text-blue-300/70 text-xs">Maximum Power</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeIn} className="stat-card !p-6">
                <div className="font-display font-bold text-3xl lg:text-4xl text-gradient-blue">
                  {stat.value}
                </div>
                <div className="text-blue-300/70 text-sm mt-1 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-blue-400/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-blue-400 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ==================== FEATURED BATS ==================== */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title text-4xl lg:text-5xl"
            >
              Featured <span className="text-gradient-blue">Bats</span>
            </motion.h2>
            <p className="section-subtitle mt-4">
              Hand-crafted precision for every batting style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBats.map((bat, index) => (
              <motion.div
                key={bat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group overflow-hidden"
              >
                <div className="relative overflow-hidden bg-gradient-to-b from-blue-900/20 via-pitch-900 to-pitch-950">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="relative h-56 flex items-center justify-center">
                    <BatIllustration
                      variant={`home-${bat.id}`}
                      grains={bat.grains}
                      glowColor={bat.willowType === 'English Willow' ? '#3b82f6' : '#ec4899'}
                      className="w-full h-full object-contain p-3 drop-shadow-[0_0_20px_rgba(59,130,246,0.25)] group-hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.45)] transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-lg border ${
                    bat.availability === 'In Stock'
                      ? 'bg-blue-600/30 border-blue-400/40 text-blue-200'
                      : 'bg-yellow-600/30 border-yellow-400/40 text-yellow-200'
                  }`}>
                    {bat.availability}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-2">{bat.name}</h3>
                  <p className="text-blue-200/60 text-sm mb-4">{bat.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-blue-300/60 text-xs">Price</div>
                      <div className="font-display font-bold text-2xl text-gradient-blue">
                        ₨{bat.price.toLocaleString()}
                      </div>
                    </div>
                    <Link
                      to="/products"
                      className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-blue-300 hover:bg-blue-600/40 hover:shadow-glow-blue transition-all duration-300"
                      aria-label={`View ${bat.name}`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="glass-btn-ghost group">
              View All Bats
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGY / HIGHLIGHTS ==================== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title text-4xl lg:text-5xl"
            >
              Built With <span className="text-gradient-blue">Precision</span>
            </motion.h2>
            <p className="section-subtitle mt-4">
              The technology behind every REDLINE bat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card group p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-900/30 border border-blue-400/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow-blue transition-all duration-300">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title text-4xl lg:text-5xl"
            >
              Our <span className="text-gradient-blue">Craft</span>
            </motion.h2>
            <p className="section-subtitle mt-4">
              A glimpse into the REDLINE workshop
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-blue-400/20 aspect-[4/3]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2">
                  <span className="text-sm font-semibold text-blue-200">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BRAND INTRO ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-8 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold uppercase tracking-wider">
                  <Zap className="w-4 h-4" fill="currentColor" />
                  Why REDLINE?
                </div>
                <h2 className="section-title text-4xl lg:text-5xl">
                  The REDLINE
                  <span className="text-gradient-blue block mt-2">Difference</span>
                </h2>
                <p className="text-blue-200/70 leading-relaxed">
                  At REDLINE SPORTS, we believe a cricket bat is more than wood — it's an extension
                  of the player. Our master craftsmen in Pakistan hand-select every piece of willow,
                  inspect every grain, and meticulously shape every profile to deliver bats that
                  feel alive in your hands.
                </p>
                <p className="text-blue-200/70 leading-relaxed">
                  From English Willow imported from the finest clefts to premium Kashmir Willow,
                  every REDLINE bat undergoes rigorous quality control to ensure championship-level
                  performance, match after match.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/about" className="glass-btn-primary group">
                    Our Story
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/contact" className="glass-btn-ghost group">
                    <Phone className="w-5 h-5" />
                    Contact Us
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden border border-blue-400/30 shadow-glow-blue">
                  <img
                    src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80"
                    alt="REDLINE Cricket Bat Craftsmanship"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pitch-950/80 via-transparent to-transparent" />
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -bottom-6 left-8 glass-strong rounded-2xl px-6 py-4 flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-900 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg">Tour Grade</div>
                    <div className="text-blue-300/70 text-xs">Pro-Level Performance</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title text-4xl lg:text-5xl"
            >
              Trusted By <span className="text-gradient-blue">Champions</span>
            </motion.h2>
            <p className="section-subtitle mt-4">
              What players across Pakistan say about REDLINE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-blue-400 fill-blue-400'
                          : 'text-blue-400/20'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-blue-200/70 text-sm leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-blue-400/10">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-blue-300/60 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA BANNER ==================== */}
      <section className="py-24">
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
                Ready to Play Like a <span className="text-gradient-blue">Champion?</span>
              </h2>
              <p className="text-blue-200/70 max-w-2xl mx-auto mt-4 text-lg">
                Order your custom REDLINE bat today — hand-crafted, perfectly weighted,
                and ready to dominate the crease.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link to="/products" className="glass-btn-primary group w-full sm:w-auto">
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/customization" className="glass-btn-ghost w-full sm:w-auto">
                  Custom Order
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-sm text-blue-300/60">
                <a href="tel:+923001359971" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" /> +92 300 1359971
                </a>
                <a href="mailto:us123221@gmail.com" className="hover:text-blue-400 transition-colors">
                  us123221@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
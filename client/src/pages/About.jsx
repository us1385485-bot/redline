import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Target, Heart, Users, ChevronRight, Award, CheckCircle, TreePine, Leaf, Hammer } from 'lucide-react'
import BatIllustration from '../components/BatIllustration'

const values = [
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    description: 'Every REDLINE bat is hand-crafted from the finest English and Kashmir Willow, with rigorous quality checks at every stage.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'We obsess over every grain, edge, and sweet spot to deliver bats that perform at the highest level.',
  },
  {
    icon: Heart,
    title: 'Passion for the Game',
    description: 'Founded by cricketers, for cricketers. We live and breathe the sport, and it shows in every bat we craft.',
  },
  {
    icon: Users,
    title: 'Player-First Approach',
    description: 'From custom weights to personalized grips, your game, your way. We put the player at the center of everything we do.',
  },
]

const timeline = [
  { year: '2010', title: 'The Beginning', description: 'REDLINE SPORTS was founded in Lahore with a vision to craft world-class cricket bats.' },
  { year: '2014', title: 'National Recognition', description: 'Our bats were picked up by first-class cricketers across Pakistan.' },
  { year: '2018', title: 'International Reach', description: 'Expanded operations to serve cricketers globally with custom bat solutions.' },
  { year: '2024', title: 'Innovation Leader', description: 'Launched our signature Pro-Zero and Thunder series, setting new benchmarks in bat performance.' },
]

const willowProcess = [
  {
    icon: TreePine,
    title: 'Willow Selection',
    description: 'We hand-select only the finest English Willow clefts and premium Kashmir Willow, inspecting for straight grains and optimal density.',
  },
  {
    icon: Target,
    title: 'Grain Inspection',
    description: 'Every cleft is examined for grain count, width, and consistency. Only bats with 8+ premium straight grains make the cut.',
  },
  {
    icon: Hammer,
    title: 'Hand Crafting',
    description: 'Our master craftsmen shape each bat blade by hand, carving the profile, edges, and sweet spot to exact specifications.',
  },
  {
    icon: Shield,
    title: 'Quality Control',
    description: 'Each finished bat undergoes rigorous testing for weight, balance, pickup, and performance before it gets the REDLINE stamp.',
  },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80', alt: 'Willow cleft selection', label: 'Willow Selection' },
  { src: 'https://images.unsplash.com/photo-1628051245385-aa2521d3e27d?w=800&q=80', alt: 'Handcrafted bat making', label: 'Hand Crafting' },
  { src: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&q=80', alt: 'Quality control', label: 'Quality Control' },
  { src: 'https://images.unsplash.com/photo-1618506412326-df59d6cc929b?w=800&q=80', alt: 'Finished bats', label: 'Finished Product' },
]

const team = [
  { name: 'Usman Mahmood', role: 'Founder & Master Craftsman', image: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Ahmed Raza', role: 'Head of Quality Control', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Bilal Khan', role: 'Customization Specialist', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Faisal Mahmood', role: 'Player Relations', image: 'https://randomuser.me/api/portraits/men/67.jpg' },
]

export default function About() {
  return (
    <div className="pt-32 md:pt-40">
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pulse-glow" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pulse-glow" />
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
                <Award className="w-4 h-4 text-blue-500" />
                Our Story
              </div>
              <h1 className="font-display font-bold text-5xl lg:text-7xl uppercase">
                About <span className="text-gradient-blue">REDLINE</span>
              </h1>
              <p className="max-w-2xl mx-auto lg:mx-0 text-blue-200/70 text-lg">
                From a small workshop in Lahore to the hands of champions — discover the story behind Pakistan's most exciting cricket equipment brand.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link to="/products" className="glass-btn-primary group">
                  View Bats
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="glass-btn-ghost">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <BatIllustration
                variant="about-hero"
                grains={14}
                glowColor="#3b82f6"
                className="w-full max-w-md mx-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="section-title text-4xl lg:text-5xl">
                Our <span className="text-gradient-blue">Story</span>
              </h2>
              <p className="text-blue-200/70 leading-relaxed">
                REDLINE SPORTS was born from a simple belief: that every cricketer deserves a bat that feels like it was made just for them. What started as a passion project in a small Lahore workshop has grown into a brand trusted by first-class cricketers and weekend warriors alike.
              </p>
              <p className="text-blue-200/70 leading-relaxed">
                Our master craftsmen bring decades of combined experience to every bat they create. We source the finest English Willow from the heart of England and the most premium Kashmir Willow from the valleys of Pakistan, ensuring that every REDLINE bat delivers unmatched performance.
              </p>
              <p className="text-blue-200/70 leading-relaxed">
                We don't just make bats — we craft legacies. From the first grain inspection to the final scuff sheet application, every step is performed with the care and precision that only true craftsmen can provide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-blue-400/30 shadow-glow-blue">
                <img
                  src="https://images.unsplash.com/photo-1628051245385-aa2521d3e27d?w=800&q=80"
                  alt="REDLINE Cricket Bat Craftsmanship"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pitch-950/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl px-6 py-4">
                <div className="font-display font-bold text-3xl text-gradient-blue">15+</div>
                <div className="text-blue-300/70 text-sm">Years of Excellence</div>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -top-4 right-4 glass-strong rounded-2xl px-5 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/40 to-blue-900/40 border border-blue-400/40 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm">Premium</div>
                  <div className="text-blue-300/70 text-xs">Grade 1+ Willow</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== WILLOW SELECTION PROCESS ==================== */}
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
              Willow Selection <span className="text-gradient-blue">Process</span>
            </motion.h2>
            <p className="section-subtitle mt-4">
              How we choose the perfect willow for every bat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {willowProcess.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 relative group"
                >
                  <span className="absolute top-4 right-6 font-display font-bold text-5xl text-blue-400/10 group-hover:text-blue-400/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-900/30 border border-blue-400/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow-blue transition-all duration-300">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Process gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
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
                <div className="absolute bottom-3 left-3 glass rounded-lg px-3 py-1.5">
                  <span className="text-xs font-semibold text-blue-200">{item.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VALUES ==================== */}
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
              Our <span className="text-gradient-blue">Values</span>
            </motion.h2>
            <p className="section-subtitle mt-4">
              What drives us every single day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 flex gap-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-900/30 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-blue-200/60 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE ==================== */}
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
              Our <span className="text-gradient-blue">Journey</span>
            </motion.h2>
            <p className="section-subtitle mt-4">
              Milestones that shaped REDLINE SPORTS
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-400/30 to-transparent hidden lg:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-start gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className="glass-card p-6 inline-block">
                      <span className="text-3xl font-display font-bold text-gradient-blue">{item.year}</span>
                      <h3 className="font-display font-bold text-xl mt-2">{item.title}</h3>
                      <p className="text-blue-200/60 text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-8 h-8 rounded-full bg-blue-600 border-4 border-pitch-950 flex-shrink-0 relative z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEAM ==================== */}
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
              Meet the <span className="text-gradient-blue">Team</span>
            </motion.h2>
            <p className="section-subtitle mt-4">
              The people behind the brand
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-blue-500/30 group-hover:border-blue-400 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display font-bold text-lg">{member.name}</h3>
                <p className="text-blue-300/60 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
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
                Ready to Join the <span className="text-gradient-blue">REDLINE</span> Family?
              </h2>
              <p className="text-blue-200/70 max-w-2xl mx-auto mt-4 text-lg">
                Experience the difference of a truly hand-crafted cricket bat. Get in touch with us today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Link to="/contact" className="glass-btn-primary group">
                  Contact Us
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/products" className="glass-btn-ghost">
                  View Products
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
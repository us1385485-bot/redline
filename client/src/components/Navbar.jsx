import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronRight, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/customization', label: 'Customization' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className={`hidden md:block transition-all duration-500 ${scrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-12 opacity-100'}`}>
        <div className="bg-pitch-900/80 backdrop-blur-xl border-b border-blue-400/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs text-blue-300/70">
            <span>Premium Cricket Equipment | Pakistan</span>
            <div className="flex items-center gap-6">
              <a href="tel:+923001359971" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-3 h-3" />
                +92 300 1359971
              </a>
              <a href="mailto:us123221@gmail.com" className="hover:text-blue-400 transition-colors">
                us123221@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-all duration-500 ${scrolled ? 'bg-pitch-900/95 shadow-glass' : 'bg-pitch-950/70'} backdrop-blur-xl border-b border-blue-400/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-900 flex items-center justify-center shadow-glow-blue group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" fill="currentColor" />
              </div>
              <div className="leading-tight">
                <span className="font-display font-bold text-2xl tracking-widest bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
                  REDLINE
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.4em] text-blue-300/70 uppercase">
                  Sports
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/customization"
                className="hidden lg:flex glass-btn-primary !py-2.5 !px-5 text-sm"
              >
                Customize Your Bat
                <ChevronRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/5 border border-blue-400/20 hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-pitch-900/95 backdrop-blur-xl border-t border-blue-400/10"
            >
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => `
                      block px-4 py-3 rounded-xl font-medium transition-all duration-300
                      ${isActive
                        ? 'bg-blue-600/20 border border-blue-400/40 text-blue-300'
                        : 'bg-white/5 border border-transparent text-blue-200/70 hover:bg-white/10 hover:text-blue-300'}
                    `}
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Link
                  to="/customization"
                  className="block mt-4 glass-btn-primary w-full"
                >
                  Customize Your Bat
                </Link>
                <div className="mt-4 pt-4 border-t border-blue-400/10 space-y-2 text-sm text-blue-300/70">
                  <a href="tel:+923001359971" className="flex items-center gap-2 hover:text-blue-400">
                    <Phone className="w-4 h-4" /> +92 300 1359971
                  </a>
                  <a href="mailto:us123221@gmail.com" className="hover:text-blue-400">
                    us123221@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
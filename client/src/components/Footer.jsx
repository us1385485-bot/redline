import { Link } from 'react-router-dom'
import { Zap, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ChevronRight } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/customization', label: 'Customization' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { to: '/customization', label: 'Bat Knocking-in' },
  { to: '/customization', label: 'Bat Oiling' },
  { to: '/customization', label: 'Scuff Sheet Application' },
  { to: '/customization', label: 'Custom Handle Replacement' },
  { to: '/customization', label: 'Custom Weighted Bats' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-400/10 bg-pitch-950/80 backdrop-blur-xl">
      {/* Glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-900 flex items-center justify-center shadow-glow-blue">
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
            <p className="text-blue-200/60 text-sm leading-relaxed">
              Crafted for Champions. Premium cricket bats and gear engineered with precision, passion, and the relentless pursuit of excellence.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-blue-400/20 flex items-center justify-center text-blue-300/70 hover:bg-blue-600/20 hover:text-blue-300 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-blue-300 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-blue-200/60 hover:text-blue-400 transition-colors text-sm"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-blue-300 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-blue-200/60 hover:text-blue-400 transition-colors text-sm"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-blue-300 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="tel:+923001359971" className="flex items-center gap-3 text-blue-200/60 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  +92 300 1359971
                </a>
              </li>
              <li>
                <a href="mailto:us123221@gmail.com" className="flex items-center gap-3 text-blue-200/60 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  us123221@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-blue-200/60">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                Lahore, Pakistan
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex glass-btn-ghost !py-2.5 !px-5 text-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-blue-400/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-300/40 text-xs">
            © {new Date().getFullYear()} REDLINE SPORTS. All rights reserved. Pakistan
          </p>
          <p className="text-blue-300/40 text-xs">
            Crafted for Champions. 🏏
          </p>
        </div>
      </div>
    </footer>
  )
}
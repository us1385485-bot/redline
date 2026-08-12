import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, SlidersHorizontal, X, Check, Weight, Ruler, Grid3X3, Hand, Crosshair, ShoppingCart, Package } from 'lucide-react'
import { products, filters, priceRanges } from '../data/products'
import BatIllustration from '../components/BatIllustration'

export default function Products() {
  const [selectedWillow, setSelectedWillow] = useState('All')
  const [selectedWeight, setSelectedWeight] = useState('All')
  const [selectedProfile, setSelectedProfile] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = useMemo(() => {
    const priceRange = priceRanges.find(p => p.id === selectedPrice)
    
    return products.filter(product => {
      if (selectedWillow !== 'All' && product.willowType !== selectedWillow) return false
      if (selectedWeight !== 'All' && product.weight !== selectedWeight) return false
      if (selectedProfile !== 'All' && product.profile !== selectedProfile) return false
      if (priceRange && (product.price < priceRange.min || product.price > priceRange.max)) return false
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false
      return true
    })
  }, [selectedWillow, selectedWeight, selectedProfile, selectedPrice, searchTerm])

  const resetFilters = () => {
    setSelectedWillow('All')
    setSelectedWeight('All')
    setSelectedProfile('All')
    setSelectedPrice('all')
    setSearchTerm('')
  }

  const FilterButton = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
        active
          ? 'bg-blue-600/30 border-blue-400/60 text-blue-300 shadow-glow-blue'
          : 'bg-white/5 border-blue-400/20 text-blue-200/70 hover:bg-white/10 hover:border-blue-400/50'
      }`}
    >
      {children}
    </button>
  )

  const FilterSection = ({ title, children }) => (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-300/60 mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  )

  const FilterPanel = () => (
    <div className="glass-card p-6 space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-300/50" />
        <input
          type="text"
          placeholder="Search bats..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="glass-input !pl-11"
        />
      </div>

      <FilterSection title="Willow Type">
        {filters.willowTypes.map((type) => (
          <FilterButton
            key={type}
            active={selectedWillow === type}
            onClick={() => setSelectedWillow(type)}
          >
            {type}
          </FilterButton>
        ))}
      </FilterSection>

      <FilterSection title="Weight">
        {filters.weights.map((weight) => (
          <FilterButton
            key={weight}
            active={selectedWeight === weight}
            onClick={() => setSelectedWeight(weight)}
          >
            {weight === 'All' ? weight : `${weight}`}
          </FilterButton>
        ))}
      </FilterSection>

      <FilterSection title="Profile">
        {filters.profiles.map((profile) => (
          <FilterButton
            key={profile}
            active={selectedProfile === profile}
            onClick={() => setSelectedProfile(profile)}
          >
            {profile}
          </FilterButton>
        ))}
      </FilterSection>

      <FilterSection title="Price Range">
        {priceRanges.map((range) => (
          <FilterButton
            key={range.id}
            active={selectedPrice === range.id}
            onClick={() => setSelectedPrice(range.id)}
          >
            {range.label}
          </FilterButton>
        ))}
      </FilterSection>

      <button
        onClick={resetFilters}
        className="w-full glass-btn-ghost !py-2.5 text-sm"
      >
        Reset All Filters
      </button>
    </div>
  )

  const SpecItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center justify-between py-2 border-b border-blue-400/10 last:border-0">
      <div className="flex items-center gap-2 text-blue-300/60 text-xs">
        <Icon className="w-3.5 h-3.5" />
        {label}
      </div>
      <span className="text-sm font-medium text-blue-200">{value}</span>
    </div>
  )

  return (
    <div className="pt-32 md:pt-40">
      {/* ==================== HEADER ==================== */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pulse-glow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pulse-glow" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-2.5 text-sm font-medium text-blue-300">
              <Filter className="w-4 h-4 text-blue-500" />
              Premium Collection
            </div>
            <h1 className="font-display font-bold text-5xl lg:text-7xl uppercase">
              Cricket <span className="text-gradient-blue">Bats</span>
            </h1>
            <p className="max-w-2xl mx-auto text-blue-200/70 text-lg">
              Hand-crafted bats for every style of play — from explosive openers to elegant accumulators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== PRODUCTS + FILTERS ==================== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile filter toggle */}
          <div className="lg:hidden mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full glass-btn-ghost !py-3"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <FilterPanel />
              </div>
            </div>

            {/* Filters - Mobile */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden"
                >
                  <FilterPanel />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Results count */}
              <div className="flex items-center justify-between mb-8">
                <p className="text-blue-300/70 text-sm">
                  Showing <span className="text-blue-400 font-semibold">{filteredProducts.length}</span> of {products.length} bats
                </p>
                {(selectedWillow !== 'All' || selectedWeight !== 'All' || selectedProfile !== 'All' || selectedPrice !== 'all' || searchTerm) && (
                  <button
                    onClick={resetFilters}
                    className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <X className="w-3 h-3" />
                    Clear
                  </button>
                )}
              </div>

              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="glass-card group overflow-hidden"
                    >
                      {/* Bat Illustration */}
                      <div className="relative overflow-hidden bg-gradient-to-b from-blue-900/20 via-pitch-900 to-pitch-950">
                        <div className="absolute inset-0 grid-bg opacity-30" />
                        <div className="relative h-64 flex items-center justify-center">
                          <BatIllustration
                            variant={`bat-${product.id}`}
                            grains={product.grains}
                            glowColor={product.willowType === 'English Willow' ? '#3b82f6' : '#ec4899'}
                            className="w-full h-full object-contain p-4 drop-shadow-[0_0_25px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-lg border ${
                            product.availability === 'In Stock'
                              ? 'bg-blue-600/30 border-blue-400/40 text-blue-200'
                              : 'bg-yellow-600/30 border-yellow-400/40 text-yellow-200'
                          }`}>
                            {product.availability}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-lg border border-blue-400/30 bg-pitch-900/60 text-blue-300">
                            {product.willowType}
                          </span>
                        </div>
                        <span className="absolute top-4 right-4 text-blue-300/40">
                          <Package className="w-5 h-5" />
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-display font-bold text-xl">{product.name}</h3>
                          <span className="text-blue-300/60 text-xs uppercase tracking-wider">{product.profile}</span>
                        </div>
                        <p className="text-blue-200/60 text-sm mb-4">{product.description}</p>

                        {/* Specs */}
                        <div className="glass rounded-xl p-4 mb-4">
                          <SpecItem icon={Weight} label="Weight" value={product.weight} />
                          <SpecItem icon={Ruler} label="Edges" value={product.edges} />
                          <SpecItem icon={Grid3X3} label="Grains" value={`${product.grains}`} />
                          <SpecItem icon={Hand} label="Handle" value={product.handle} />
                          <SpecItem icon={Crosshair} label="Sweet Spot" value={product.sweetSpot} />
                        </div>

                        {/* Price + Actions */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-blue-300/60 text-xs">Price</div>
                            <div className="font-display font-bold text-2xl text-gradient-blue">
                              ₨{product.price.toLocaleString()}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setSelectedProduct(product)}
                              className="glass-btn-ghost !py-2 !px-4 text-xs"
                            >
                              Details
                            </button>
                            <a
                              href="tel:+923001359971"
                              className="glass-btn-primary !py-2 !px-4 text-xs"
                              aria-label={`Order ${product.name}`}
                            >
                              <ShoppingCart className="w-4 h-4" />
                              Order
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="glass-card p-16 text-center">
                  <div className="text-6xl mb-4">🏏</div>
                  <h3 className="font-display font-bold text-2xl mb-2">No bats found</h3>
                  <p className="text-blue-200/60 mb-6">Try adjusting your filters or search term.</p>
                  <button onClick={resetFilters} className="glass-btn-primary">
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT DETAIL MODAL ==================== */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pitch-950/90 backdrop-blur-xl"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/10 border border-blue-400/30 flex items-center justify-center hover:bg-white/20 transition-all z-10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="relative h-80 overflow-hidden rounded-t-3xl bg-gradient-to-b from-blue-900/30 via-pitch-900 to-pitch-950">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <BatIllustration
                    variant={`modal-${selectedProduct.id}`}
                    grains={selectedProduct.grains}
                    glowColor={selectedProduct.willowType === 'English Willow' ? '#3b82f6' : '#ec4899'}
                    className="w-full h-full object-contain p-8"
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-lg border border-blue-400/40 bg-blue-600/30 text-blue-200">
                        {selectedProduct.availability}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-lg border border-blue-400/30 bg-pitch-900/60 text-blue-300">
                        {selectedProduct.willowType}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-4xl">{selectedProduct.name}</h3>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <p className="text-blue-200/70">{selectedProduct.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4">
                    <SpecItem icon={Weight} label="Weight" value={selectedProduct.weight} />
                  </div>
                  <div className="glass rounded-xl p-4">
                    <SpecItem icon={Ruler} label="Edges" value={selectedProduct.edges} />
                  </div>
                  <div className="glass rounded-xl p-4">
                    <SpecItem icon={Grid3X3} label="Grains" value={`${selectedProduct.grains}`} />
                  </div>
                  <div className="glass rounded-xl p-4">
                    <SpecItem icon={Hand} label="Handle" value={selectedProduct.handle} />
                  </div>
                  <div className="glass rounded-xl p-4">
                    <SpecItem icon={Crosshair} label="Sweet Spot" value={selectedProduct.sweetSpot} />
                  </div>
                  <div className="glass rounded-xl p-4">
                    <SpecItem icon={Check} label="Profile" value={selectedProduct.profile} />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-blue-400/10">
                  <div>
                    <div className="text-blue-300/60 text-sm">Price</div>
                    <div className="font-display font-bold text-4xl text-gradient-blue">
                      ₨{selectedProduct.price.toLocaleString()}
                    </div>
                  </div>
                  <a
                    href={`tel:+923001359971`}
                    className="glass-btn-primary"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Call to Order
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
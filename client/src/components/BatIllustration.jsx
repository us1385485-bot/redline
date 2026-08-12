export default function BatIllustration({
  variant = 'full',
  glowColor = '#3b82f6',
  className = '',
  grains = 12,
}) {
  const grainCount = Math.min(Math.max(grains, 6), 16)

  // Grain lines on the blade face (y: 290-540)
  const grainSpacing = 250 / grainCount
  const grainLines = Array.from({ length: grainCount }, (_, i) => {
    const y = 290 + i * grainSpacing
    return (
      <path
        key={i}
        d={`M 223 ${y} Q 250 ${y + 3} 277 ${y}`}
        stroke="rgba(120, 60, 10, 0.25)"
        strokeWidth="1.2"
        fill="none"
      />
    )
  })

  return (
    <svg
      viewBox="0 0 500 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Willow wood face gradient */}
        <linearGradient id={`batFace-${variant}`} x1="200" y1="0" x2="320" y2="620" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8C9A3" />
          <stop offset="25%" stopColor="#D4A574" />
          <stop offset="60%" stopColor="#C8956A" />
          <stop offset="100%" stopColor="#B07A4F" />
        </linearGradient>

        {/* Edge gradient */}
        <linearGradient id={`batEdge-${variant}`} x1="180" y1="0" x2="340" y2="620" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0D5B5" />
          <stop offset="50%" stopColor="#DDB68B" />
          <stop offset="100%" stopColor="#C8966D" />
        </linearGradient>

        {/* Handle */}
        <linearGradient id={`handle-${variant}`} x1="215" y1="0" x2="285" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="50%" stopColor="#252540" />
          <stop offset="100%" stopColor="#0d1224" />
        </linearGradient>

        {/* Spline */}
        <linearGradient id={`spline-${variant}`} x1="250" y1="400" x2="250" y2="620" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#16213e" />
          <stop offset="100%" stopColor="#0a0f1c" />
        </linearGradient>

        {/* Glow */}
        <radialGradient id={`glow-${variant}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={glowColor} stopOpacity="0.28" />
          <stop offset="60%" stopColor={glowColor} stopOpacity="0.08" />
          <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
        </radialGradient>

        <filter id={`shadow-${variant}`} x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="4" dy="12" stdDeviation="18" floodColor="#000" floodOpacity="0.6" />
        </filter>

        <filter id={`softGlow-${variant}`}>
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <ellipse cx="250" cy="300" rx="240" ry="300" fill={`url(#glow-${variant})`} />

      {/* ===== HANDLE (TOP) ===== */}
      <g>
        {/* Handle body */}
        <rect x="222" y="8" width="56" height="185" rx="9" fill={`url(#handle-${variant})`} />
        
        {/* Grip wrap lines */}
        {Array.from({ length: 15 }, (_, i) => (
          <line
            key={`g-${i}`}
            x1="222"
            y1={20 + i * 12}
            x2="278"
            y2={20 + i * 12}
            stroke="rgba(99, 102, 241, 0.35)"
            strokeWidth="1.5"
          />
        ))}

        {/* Handle cap */}
        <rect x="219" y="3" width="62" height="12" rx="4" fill="#2d2d44" stroke="rgba(99,102,241,0.3)" />

        {/* Bottom ferule */}
        <rect x="222" y="175" width="56" height="18" rx="4" fill="#1f1f38" stroke="rgba(99,102,241,0.15)" />
      </g>

      {/* ===== SHOULDER ===== */}
      <path
        d="M225 190 
           C 210 215, 198 255, 204 300 
           L 296 300 
           C 302 255, 290 215, 275 190 
           Z"
        fill={`url(#batFace-${variant})`}
        stroke="rgba(120, 60, 10, 0.4)"
        strokeWidth="1"
      />

      {/* ===== BLADE ===== */}
      <g filter={`url(#shadow-${variant})`}>
        {/* Blade outer shape */}
        <path
          d="M204 300 
             L 204 540 
             C 204 572, 218 600, 250 610 
             C 282 600, 296 572, 296 540 
             L 296 300 
             Z"
          fill={`url(#batEdge-${variant})`}
          stroke="rgba(120, 60, 10, 0.5)"
          strokeWidth="1.5"
        />

        {/* Face (slightly inset) */}
        <path
          d="M216 300 
             L 216 540 
             C 216 565, 228 588, 250 598 
             C 272 588, 284 565, 284 540 
             L 284 300 
             Z"
          fill={`url(#batFace-${variant})`}
        />

        {/* Wood grain lines */}
        {grainLines}

        {/* Grain highlight streaks */}
        {Array.from({ length: Math.floor(grainCount / 3) }, (_, i) => (
          <path
            key={`hl-${i}`}
            d={`M 225 ${330 + i * 60} Q 250 ${333 + i * 60} 275 ${330 + i * 60}`}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="0.8"
            fill="none"
          />
        ))}

        {/* Left edge shadow */}
        <path
          d="M204 300 L 216 300 L 216 540 C 216 565, 228 588, 250 598 L 250 610 C 218 600, 204 572, 204 540 Z"
          fill="rgba(60, 30, 0, 0.25)"
        />

        {/* Right edge highlight */}
        <path
          d="M284 300 L 296 300 L 296 540 C 296 572, 282 600, 250 610 L 250 598 C 272 588, 284 565, 284 540 Z"
          fill="rgba(255, 235, 200, 0.2)"
        />
      </g>

      {/* ===== TOE GUARD ===== */}
      <path
        d="M215 585 
           C 215 600, 228 618, 250 620 
           C 272 618, 285 600, 285 585 
           Z"
        fill="#141428"
        stroke="rgba(99, 102, 241, 0.2)"
      />

      {/* ===== REDLINE BRANDING ===== */}
      <g filter={`url(#softGlow-${variant})`}>
        <rect x="218" y="420" width="64" height="28" rx="5" fill="rgba(59, 130, 246, 0.12)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" />
        <text
          x="250"
          y="439"
          textAnchor="middle"
          fill="#60a5fa"
          fontSize="11"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          letterSpacing="1.5"
        >
          REDLINE
        </text>
        <text
          x="250"
          y="452"
          textAnchor="middle"
          fill="rgba(147, 197, 253, 0.8)"
          fontSize="7"
          fontWeight="600"
          fontFamily="Arial, sans-serif"
          letterSpacing="3"
        >
          SPORTS
        </text>
      </g>

      {/* Surface reflection */}
      <path
        d="M230 300 L 230 540 C 230 545, 232 550, 235 555 L 235 300 Z"
        fill="white"
        opacity="0.05"
      />
    </svg>
  )
}
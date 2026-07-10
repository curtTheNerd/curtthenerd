export const GemstoneCaveLayer = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      className="w-full h-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Cave background - nearly black with depth */}
        <linearGradient
          id="caveCoreGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#0a0a12", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#050508", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 1 }} />
        </linearGradient>

        {/* Primary bioluminescent glow - cyan */}
        <radialGradient id="bioGlowCyan" cx="50%" cy="50%" r="45%">
          <stop offset="0%" style={{ stopColor: "#00e5ff", stopOpacity: 0.5 }} />
          <stop offset="40%" style={{ stopColor: "#00b0d4", stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
        </radialGradient>

        {/* Secondary bioluminescent glow - purple */}
        <radialGradient id="bioGlowPurple" cx="50%" cy="50%" r="45%">
          <stop offset="0%" style={{ stopColor: "#b366ff", stopOpacity: 0.45 }} />
          <stop offset="40%" style={{ stopColor: "#8040ff", stopOpacity: 0.15 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
        </radialGradient>

        {/* Crystal geometry filter - glow effect */}
        <filter id="crystalGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Ambient cave glow */}
        <filter id="ambientLight">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Rock texture for cave floor */}
        <pattern id="rockFloor" x="0" y="0" width="250" height="250" patternUnits="userSpaceOnUse">
          <rect width="250" height="250" fill="#05050a" />
          <polygon points="40,60 100,40 140,120 80,140" fill="#0a0a15" opacity="0.5" />
          <polygon points="150,80 210,60 240,160 180,180" fill="#0a0a15" opacity="0.45" />
          <path d="M 30 150 Q 80 140 140 160" stroke="#0f0f20" strokeWidth="1.5" fill="none" opacity="0.3" />
        </pattern>
      </defs>

      {/* Cave base background */}
      <rect width="1920" height="1080" fill="url(#caveCoreGradient)" />

      {/* Rock floor texture */}
      <rect width="1920" height="1080" fill="url(#rockFloor)" opacity="0.5" />

      {/* ===== CRYSTAL FORMATIONS ===== */}

      {/* Left crystal cluster - cyan dominant */}
      <g filter="url(#crystalGlow)">
        {/* Large primary crystal */}
        <polygon
          points="200,850 120,450 280,380 360,750"
          fill="#0a1a2a"
          stroke="#00e5ff"
          strokeWidth="2"
          opacity="0.9"
        />
        <polygon
          points="120,450 80,250 180,200 280,380"
          fill="#050f20"
          stroke="#00b0d4"
          strokeWidth="1.5"
          opacity="0.8"
        />
      </g>

      {/* Center-left crystal - purple accent */}
      <g filter="url(#crystalGlow)">
        <polygon
          points="600,900 500,350 700,280 800,800"
          fill="#0a0f1f"
          stroke="#b366ff"
          strokeWidth="2"
          opacity="0.85"
        />
        <polygon
          points="500,350 450,150 580,120 700,280"
          fill="#050510"
          stroke="#8040ff"
          strokeWidth="1.5"
          opacity="0.75"
        />
      </g>

      {/* Center crystal - strong cyan */}
      <g filter="url(#crystalGlow)">
        <polygon
          points="950,950 850,400 1100,320 1200,900"
          fill="#0a1a2a"
          stroke="#00e5ff"
          strokeWidth="2.5"
          opacity="0.9"
        />
        <polygon
          points="850,400 800,180 950,150 1100,320"
          fill="#050f25"
          stroke="#00d4ff"
          strokeWidth="1.5"
          opacity="0.8"
        />
      </g>

      {/* Center-right crystal - purple */}
      <g filter="url(#crystalGlow)">
        <polygon
          points="1350,900 1250,380 1480,300 1550,850"
          fill="#0f0a1f"
          stroke="#b366ff"
          strokeWidth="2"
          opacity="0.85"
        />
        <polygon
          points="1250,380 1220,160 1380,130 1480,300"
          fill="#05050f"
          stroke="#9955ff"
          strokeWidth="1.5"
          opacity="0.78"
        />
      </g>

      {/* Right crystal cluster - cyan */}
      <g filter="url(#crystalGlow)">
        <polygon
          points="1700,920 1600,470 1850,400 1920,880"
          fill="#0a1a2a"
          stroke="#00e5ff"
          strokeWidth="2"
          opacity="0.88"
        />
        <polygon
          points="1750,750 1680,450 1880,380 1920,700"
          fill="#050f20"
          stroke="#00c4e8"
          strokeWidth="1.5"
          opacity="0.75"
        />
      </g>

      {/* ===== BIOLUMINESCENT ATMOSPHERE ===== */}

      {/* Primary glow zones */}
      <circle cx="300" cy="350" r="150" fill="url(#bioGlowCyan)" opacity="0.6" filter="url(#ambientLight)" />
      <circle cx="1100" cy="450" r="180" fill="url(#bioGlowCyan)" opacity="0.55" filter="url(#ambientLight)" />
      <circle cx="1700" cy="350" r="140" fill="url(#bioGlowCyan)" opacity="0.5" filter="url(#ambientLight)" />

      {/* Secondary purple glow zones */}
      <circle cx="650" cy="500" r="160" fill="url(#bioGlowPurple)" opacity="0.5" filter="url(#ambientLight)" />
      <circle cx="1400" cy="600" r="150" fill="url(#bioGlowPurple)" opacity="0.48" filter="url(#ambientLight)" />

      {/* ===== GEOMETRIC FLOATING ELEMENTS ===== */}

      {/* Floating hex patterns */}
      <g stroke="#00d4ff" strokeWidth="1.5" fill="none" opacity="0.25" filter="url(#crystalGlow)">
        <polygon points="400,250 430,230 460,250 460,290 430,310 400,290" />
        <polygon points="950,300 980,280 1010,300 1010,340 980,360 950,340" />
        <polygon points="1500,280 1535,255 1570,280 1570,330 1535,355 1500,330" />
      </g>

      {/* Floating geometric lines - suggesting movement/energy */}
      <g stroke="#b366ff" strokeWidth="1" fill="none" opacity="0.2" filter="url(#crystalGlow)">
        <line x1="250" y1="200" x2="450" y2="550" />
        <line x1="750" y1="300" x2="850" y2="650" />
        <line x1="1200" y1="250" x2="1350" y2="600" />
        <line x1="1650" y1="350" x2="1800" y2="700" />
      </g>

      {/* Connecting geometric mesh - subtle */}
      <g stroke="#00a8d4" strokeWidth="0.8" fill="none" opacity="0.12">
        <path d="M 400 300 L 700 500 L 1000 350 L 1300 600 L 1600 400" />
        <path d="M 300 600 L 600 700 L 900 650 L 1200 750 L 1500 700" />
      </g>

      {/* ===== CAVE DEPTH EFFECTS ===== */}

      {/* Vignette - darkens edges to create focus */}
      <defs>
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0.4 }} />
        </radialGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#vignette)" opacity="0.8" />

      {/* Bottom depth shadow */}
      <defs>
        <linearGradient id="bottomDepth" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
          <stop offset="70%" style={{ stopColor: "#000000", stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0.5 }} />
        </linearGradient>
      </defs>
      <rect height="1080" width="1920" fill="url(#bottomDepth)" />
    </svg>
  );
};

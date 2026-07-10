export const EarthLayer = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      className="w-full h-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Deep earth gradient */}
        <linearGradient
          id="earthGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#3D2F1F", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#2A1F15", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#1A1410", stopOpacity: 1 }} />
        </linearGradient>

        {/* Rock texture with irregularities */}
        <pattern id="rockTexture" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" fill="#2A1F15" />
          <polygon points="20,40 50,30 70,60 45,75" fill="#1A1410" opacity="0.6" />
          <polygon points="100,80 140,60 160,100 120,110" fill="#1A1410" opacity="0.5" />
          <circle cx="80" cy="40" r="15" fill="#1A1410" opacity="0.4" />
          <path d="M 10 120 Q 50 100 90 130" stroke="#1A1410" strokeWidth="2" fill="none" opacity="0.3" />
        </pattern>

        {/* Stone layering effect */}
        <linearGradient id="stoneLayer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#1A1410", stopOpacity: 0.5 }} />
          <stop offset="50%" style={{ stopColor: "#2A1F15", stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: "#1A1410", stopOpacity: 0.5 }} />
        </linearGradient>

        {/* Mineral vein hints */}
        <radialGradient id="mineralHint" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#4A5566", stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: "#2A1F15", stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Main earth background */}
      <rect width="1920" height="1080" fill="url(#earthGradient)" />

      {/* Rock texture overlay */}
      <rect width="1920" height="1080" fill="url(#rockTexture)" opacity="0.6" />

      {/* Large jagged rock formations */}
      <g fill="#1A1410" opacity="0.85">
        <polygon points="0,100 150,50 250,200 100,250" />
        <polygon points="300,150 500,100 600,300 400,350" />
        <polygon points="800,80 1000,60 1150,250 950,280" />
        <polygon points="1400,120 1650,70 1800,280 1550,310" />
        <polygon points="1700,200 1920,150 1920,350 1800,380" />
      </g>

      {/* Horizontal stratification - strong definition */}
      <g stroke="#1A1410" strokeWidth="3" opacity="0.6">
        <line x1="0" y1="250" x2="1920" y2="260" />
        <line x1="0" y1="500" x2="1920" y2="520" />
        <line x1="0" y1="800" x2="1920" y2="820" />
      </g>

      {/* Stone layers with subtle shading */}
      <rect y="200" width="1920" height="200" fill="url(#stoneLayer)" opacity="0.4" />
      <rect y="500" width="1920" height="180" fill="url(#stoneLayer)" opacity="0.35" />
      <rect y="800" width="1920" height="280" fill="url(#stoneLayer)" opacity="0.3" />

      {/* Cracks and fissures */}
      <g stroke="#0F0A05" strokeWidth="2" fill="none" opacity="0.5">
        <path d="M 150 0 L 180 400 L 150 800" />
        <path d="M 600 100 L 650 500 L 600 900" />
        <path d="M 1100 0 L 1200 450 L 1100 800" />
        <path d="M 1600 50 L 1700 500 L 1600 950" />
      </g>

      {/* Mineral deposits (subtle hints) */}
      <circle cx="400" cy="350" r="50" fill="url(#mineralHint)" opacity="0.5" />
      <circle cx="900" cy="600" r="60" fill="url(#mineralHint)" opacity="0.45" />
      <circle cx="1400" cy="450" r="55" fill="url(#mineralHint)" opacity="0.4" />

      {/* Depth shadow at bottom */}
      <defs>
        <linearGradient id="depthShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0.3 }} />
        </linearGradient>
      </defs>
      <rect height="1080" width="1920" fill="url(#depthShadow)" />
    </svg>
  );
};

export const DeepEarthLayer = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      className="w-full h-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Very deep earth gradient */}
        <linearGradient
          id="deepEarthGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#1A1410", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#0F0A05", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#050301", stopOpacity: 1 }} />
        </linearGradient>

        {/* Rough stone pattern */}
        <pattern id="stonePattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
          <rect width="150" height="150" fill="#0F0A05" />
          <polygon points="20,30 60,20 80,70 40,80" fill="#1A1410" opacity="0.7" />
          <polygon points="90,40 120,50 130,100 100,110" fill="#1A1410" opacity="0.6" />
          <circle cx="45" cy="100" r="20" fill="#1A1410" opacity="0.5" />
          <path d="M 5 60 L 45 75 L 90 65" stroke="#1A1410" strokeWidth="1.5" fill="none" opacity="0.4" />
        </pattern>

        {/* Highlight for rock definition */}
        <radialGradient id="rockDefinition" cx="35%" cy="35%">
          <stop offset="0%" style={{ stopColor: "#2A1F15", stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: "#0F0A05", stopOpacity: 0 }} />
        </radialGradient>

        {/* Subtle glow for cave entrance approach */}
        <radialGradient id="caveGlowHint" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#1a3a4a", stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: "#050301", stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Main deep earth background */}
      <rect width="1920" height="1080" fill="url(#deepEarthGradient)" />

      {/* Stone texture overlay */}
      <rect width="1920" height="1080" fill="url(#stonePattern)" opacity="0.7" />

      {/* Massive rock formations - very dark */}
      <g fill="#050301" opacity="0.9">
        <polygon points="0,80 180,30 280,180 80,220" />
        <polygon points="350,120 600,60 750,280 550,340" />
        <polygon points="1000,50 1250,30 1400,250 1200,300" />
        <polygon points="1600,100 1850,70 1920,300 1750,340" />
      </g>

      {/* Rock definition with subtle highlights */}
      <g opacity="0.4">
        <ellipse cx="180" cy="200" rx="120" ry="80" fill="url(#rockDefinition)" />
        <ellipse cx="600" cy="280" rx="150" ry="100" fill="url(#rockDefinition)" />
        <ellipse cx="1150" cy="220" rx="140" ry="90" fill="url(#rockDefinition)" />
        <ellipse cx="1700" cy="250" rx="160" ry="110" fill="url(#rockDefinition)" />
      </g>

      {/* Strong horizontal stratification */}
      <g stroke="#1A1410" strokeWidth="2.5" opacity="0.7">
        <line x1="0" y1="180" x2="1920" y2="195" />
        <line x1="0" y1="450" x2="1920" y2="475" />
        <line x1="0" y1="750" x2="1920" y2="780" />
        <line x1="0" y1="1000" x2="1920" y2="1035" />
      </g>

      {/* Vertical fault lines */}
      <g stroke="#0F0A05" strokeWidth="2.5" fill="none" opacity="0.6">
        <path d="M 200 0 L 220 300 L 200 600 L 180 900 L 200 1080" />
        <path d="M 700 0 L 750 350 L 700 750 L 680 1080" />
        <path d="M 1200 0 L 1280 400 L 1250 800 L 1200 1080" />
        <path d="M 1750 0 L 1820 350 L 1800 750 L 1750 1080" />
      </g>

      {/* Deep mineral deposits - very subtle hints */}
      <circle cx="350" cy="400" r="70" fill="url(#caveGlowHint)" opacity="0.6" />
      <circle cx="1000" cy="550" r="80" fill="url(#caveGlowHint)" opacity="0.5" />
      <circle cx="1600" cy="450" r="75" fill="url(#caveGlowHint)" opacity="0.5" />

      {/* Cave entrance approach - slight color shift */}
      <defs>
        <linearGradient id="caveApproach" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
          <stop offset="80%" style={{ stopColor: "#050301", stopOpacity: 0.2 }} />
          <stop offset="100%" style={{ stopColor: "#0a0f15", stopOpacity: 0.3 }} />
        </linearGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#caveApproach)" />
    </svg>
  );
};

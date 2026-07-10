export const CaveEntranceLayer = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      className="w-full h-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Cave entrance lighting gradient */}
        <linearGradient
          id="caveEntranceGradient"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: "#0a0f15", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#050a10", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 1 }} />
        </linearGradient>

        {/* Bioluminescent glow - subtle blue-green */}
        <radialGradient
          id="bioGlowSubtle"
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop offset="0%" style={{ stopColor: "#0088aa", stopOpacity: 0.3 }} />
          <stop offset="50%" style={{ stopColor: "#004466", stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
        </radialGradient>

        {/* Cave ceiling texture */}
        <pattern id="caveTexture" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <rect width="200" height="200" fill="#050a10" />
          <polygon points="30,40 80,20 120,60 70,90" fill="#000000" opacity="0.8" />
          <polygon points="100,30 160,50 180,120 130,100" fill="#000000" opacity="0.7" />
          <path d="M 20 80 Q 60 60 120 100" stroke="#0a0f15" strokeWidth="1.5" fill="none" opacity="0.4" />
        </pattern>

        {/* Stalactite shadow */}
        <linearGradient id="stalactiteShadow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0.3 }} />
        </linearGradient>

        {/* Ambient cave lighting */}
        <filter id="caveAmbient">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feFlood floodColor="#0088aa" floodOpacity="0.15" result="coloredFlood" />
          <feComposite in="coloredFlood" in2="coloredBlur" operator="in" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main cave background */}
      <rect width="1920" height="1080" fill="url(#caveEntranceGradient)" />

      {/* Cave texture overlay */}
      <rect width="1920" height="1080" fill="url(#caveTexture)" opacity="0.6" />

      {/* Cave ceiling formations - stalactites */}
      <g fill="url(#stalactiteShadow)" opacity="0.9">
        <polygon points="150,0 180,320 120,320" />
        <polygon points="500,0 560,280 440,280" />
        <polygon points="950,0 1050,380 850,380" />
        <polygon points="1400,0 1480,300 1320,300" />
        <polygon points="1800,0 1870,340 1730,340" />
      </g>

      {/* Cave walls - jagged and natural */}
      <g fill="#000000" opacity="0.85">
        {/* Left wall formations */}
        <polygon points="0,200 120,300 80,500 0,600" />
        <polygon points="0,400 140,550 100,750 0,850" />

        {/* Right wall formations */}
        <polygon points="1920,250 1800,380 1850,600 1920,700" />
        <polygon points="1920,600 1780,750 1820,950 1920,1080" />
      </g>

      {/* Subtle bioluminescent lighting spots - very faint */}
      <g filter="url(#caveAmbient)">
        <circle cx="350" cy="400" r="100" fill="url(#bioGlowSubtle)" opacity="0.5" />
        <circle cx="1200" cy="550" r="120" fill="url(#bioGlowSubtle)" opacity="0.45" />
        <circle cx="850" cy="800" r="90" fill="url(#bioGlowSubtle)" opacity="0.4" />
      </g>

      {/* Highlight on formations to show depth */}
      <g fill="#0a1f2f" opacity="0.3">
        <ellipse cx="200" cy="250" rx="80" ry="120" />
        <ellipse cx="1700" cy="350" rx="90" ry="130" />
        <ellipse cx="950" cy="600" rx="100" ry="100" />
      </g>

      {/* Edge lighting - shows cave opening to next area */}
      <defs>
        <linearGradient id="edgeLighting" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 0.6 }} />
          <stop offset="50%" style={{ stopColor: "#0088aa", stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: "#000000", stopOpacity: 0.6 }} />
        </linearGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#edgeLighting)" opacity="0.5" />

      {/* Bottom transition - hinting at deeper cave */}
      <defs>
        <linearGradient id="bottomTransition" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#000000", stopOpacity: 0 }} />
          <stop offset="80%" style={{ stopColor: "#004466", stopOpacity: 0.15 }} />
          <stop offset="100%" style={{ stopColor: "#0088aa", stopOpacity: 0.25 }} />
        </linearGradient>
      </defs>
      <rect height="1080" width="1920" fill="url(#bottomTransition)" />
    </svg>
  );
};

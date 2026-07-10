export const TopsoilLayer = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      className="w-full h-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Topsoil gradient */}
        <linearGradient id="topsoilGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#5C4A2F", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#6B5835", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#4A3A28", stopOpacity: 1 }} />
        </linearGradient>

        {/* Soil texture pattern */}
        <pattern id="soilTexture" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="15" fill="#3D2F1F" opacity="0.4" />
          <circle cx="90" cy="60" r="20" fill="#2F2420" opacity="0.3" />
          <circle cx="60" cy="90" r="12" fill="#3D2F1F" opacity="0.35" />
          <path d="M 10 50 Q 30 40 50 50" stroke="#2F2420" strokeWidth="1" fill="none" opacity="0.2" />
          <path d="M 70 20 Q 90 30 110 25" stroke="#3D2F1F" strokeWidth="1" fill="none" opacity="0.25" />
        </pattern>

        {/* Rock highlights for depth */}
        <radialGradient id="rockHighlight" cx="40%" cy="40%">
          <stop offset="0%" style={{ stopColor: "#8B7355", stopOpacity: 0.6 }} />
          <stop offset="100%" style={{ stopColor: "#5C4A2F", stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Main topsoil background */}
      <rect width="1920" height="1080" fill="url(#topsoilGradient)" />

      {/* Soil texture overlay */}
      <rect width="1920" height="1080" fill="url(#soilTexture)" opacity="0.5" />

      {/* Layered soil formations */}
      <g opacity="0.7">
        <ellipse cx="300" cy="200" rx="180" ry="100" fill="#3D2F1F" />
        <ellipse cx="900" cy="280" rx="220" ry="120" fill="#4A3A28" />
        <ellipse cx="1500" cy="180" rx="200" ry="90" fill="#3D2F1F" />
      </g>

      {/* Rocks with highlights */}
      <g>
        <ellipse cx="200" cy="350" rx="100" ry="70" fill="#2F2420" />
        <ellipse cx="200" cy="340" rx="90" ry="60" fill="url(#rockHighlight)" opacity="0.5" />

        <ellipse cx="700" cy="500" rx="130" ry="85" fill="#2F2420" />
        <ellipse cx="700" cy="490" rx="120" ry="75" fill="url(#rockHighlight)" opacity="0.5" />

        <ellipse cx="1300" cy="400" rx="110" ry="75" fill="#2F2420" />
        <ellipse cx="1300" cy="390" rx="100" ry="65" fill="url(#rockHighlight)" opacity="0.5" />

        <ellipse cx="1700" cy="550" rx="140" ry="95" fill="#2F2420" />
        <ellipse cx="1700" cy="540" rx="130" ry="85" fill="url(#rockHighlight)" opacity="0.5" />
      </g>

      {/* Subtle stratification lines */}
      <g stroke="#3D2F1F" strokeWidth="2" opacity="0.4">
        <line x1="0" y1="300" x2="1920" y2="320" />
        <line x1="0" y1="650" x2="1920" y2="670" />
      </g>

      {/* Root-like formations */}
      <g stroke="#2F2420" strokeWidth="2" fill="none" opacity="0.3">
        <path d="M 400 100 L 450 400 L 420 700" />
        <path d="M 1200 150 L 1150 450 L 1180 750" />
        <path d="M 600 50 L 650 350 L 620 800" />
      </g>
    </svg>
  );
};

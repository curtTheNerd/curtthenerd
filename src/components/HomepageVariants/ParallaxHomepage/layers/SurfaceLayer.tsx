export const SurfaceLayer = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      className="w-full h-full object-cover"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Light blue sky */}
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#87CEEB", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#E0F6FF", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#skyGradient)" />

      {/* Clouds */}
      <g opacity="0.6">
        <path
          d="M 150 200 Q 200 180 250 200 Q 280 190 300 220 Q 320 230 280 250 Q 230 260 150 240 Z"
          fill="white"
        />
        <path
          d="M 800 150 Q 900 120 1000 150 Q 1050 130 1100 170 Q 1120 190 1050 210 Q 900 240 800 200 Z"
          fill="white"
          opacity="0.7"
        />
        <path
          d="M 1400 300 Q 1500 270 1600 300 Q 1650 280 1700 320 Q 1720 340 1660 360 Q 1520 380 1400 340 Z"
          fill="white"
          opacity="0.5"
        />
      </g>

      {/* Green grass/horizon line */}
      <rect y="700" width="1920" height="380" fill="#2D5016" />

      {/* Grass texture variations */}
      <g fill="#3A6B1F" opacity="0.8">
        <rect x="0" y="680" width="1920" height="40" fill="url(#grassGradient)" />
      </g>

      <defs>
        <pattern
          id="grassGradient"
          x="0"
          y="0"
          width="100"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 10 40 Q 15 20 20 40 M 30 40 Q 35 15 40 40 M 50 40 Q 55 25 60 40"
            stroke="#1A3D00"
            strokeWidth="2"
            fill="none"
          />
        </pattern>
      </defs>
    </svg>
  );
};

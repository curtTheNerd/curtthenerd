const Logo: React.FC = () => {
  return (
    <div className="w-[240px] h-[50px]">
      <svg viewBox="0 0 240 50" className="w-full h-full rounded-sm">
        <defs>
          <mask id="text-mask" x="0" y="0" width="240" height="50">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="44%"
              y="74%"
              text-anchor="middle"
              dominant-baseline="middle"
              font-size="36"
              font-family="sans-serif"
              fill="black"
            >
              CurtTheNerd
            </text>
          </mask>
        </defs>

        <rect width="100%" height="100%" fill="black" mask="url(#text-mask)" />
      </svg>
    </div>
  );
};

export default Logo;

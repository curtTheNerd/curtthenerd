import Content from "../Content/Content";

const TestHomepage: React.FC = () => {
  return (
    <div
      id="parallax-banner-content"
      className="relative w-screen h-screen bg-[var(--bgColor)]"
    >
      <div className="w-full flex flex-col items-center justify-start relative bg-[var(--bgColor)]">
        <Content />
      </div>
    </div>
  );
};

export default TestHomepage;

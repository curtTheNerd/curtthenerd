import ContentGrid from "./ContentGrid";
// import ContentCardSection from "./ContentCardSection";

const Content: React.FC = () => {
  return (
    <div className="relative flex-center flex-col w-full min-h-screen">
      <div className="relative flex-center w-full min-h-screen" id="content">
        <ContentGrid />
      </div>
    </div>
  );
};

export default Content;

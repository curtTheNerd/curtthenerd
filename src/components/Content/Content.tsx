import ContentGrid from "./ContentGrid";
import Background from "./ContentGridPages/DesignApps/BackgroundApp/Background";
import Footer from "../Footer";

const Content: React.FC = () => {
  return (
    <div className="relative flex-center flex-col w-full min-h-screen">
      <div className="relative flex-center w-full min-h-screen" id="content">
        <ContentGrid />
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default Content;

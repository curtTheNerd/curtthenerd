import ContentGrid from "./ContentGrid";
//import Background from "./ContentGridPages/DesignApps/BackgroundApp/Background";
import Footer from "../Footer";

const Content: React.FC = () => {
  return (
    <div
      className="relative flex-center flex-col w-full max-w-[1440px] h-full m-2 md:m-4 xl:m-8"
      id="content"
    >
      <ContentGrid />

      <Footer />
    </div>
  );
};

export default Content;

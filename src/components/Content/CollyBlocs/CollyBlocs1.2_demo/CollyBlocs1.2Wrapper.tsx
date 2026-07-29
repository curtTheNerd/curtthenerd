import { Link } from "react-router";
import Game from "./Game";
import Footer from "../../../HomepageVariants/MinimalHomepage/Footer";

const CollyBlocs1_2Wrapper = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-100 py-12 text-white">
      <Link to="/">
        <img src="/CurtTheNerd_cursive_main.svg" alt="logo" className="absolute top-0 left-0 lg:ml-24 flex w-75"/>
      </Link>
      <h2 className="text-center text-2xl font-semibold text-[var(--textColor)]">CollyBlocs 1.2 Demo</h2>
      <Game />
      <Footer />
    </div>
  );
};

export default CollyBlocs1_2Wrapper;

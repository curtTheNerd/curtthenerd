import { Link } from "react-router";
import SHC_App from "./SHC_App.jsx";
import Footer from "../../HomepageVariants/MinimalHomepage/Footer.js";

const CollyBlocs1_2Wrapper = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center gap-8 bg-gray-100 py-12 text-white">
      <Link to="/">
        <img src="/public/CurtTheNerd_cursive_2.svg" alt="logo" className="absolute top-0 left-0 lg:left-24 flex w-75"/>
      </Link>
      <h2 className="text-center text-2xl font-semibold text-[var(--textColor)]">CollyBlocs 1.2 Demo</h2>
      <SHC_App />
      <Footer />
    </div>
  );
};

export default CollyBlocs1_2Wrapper;

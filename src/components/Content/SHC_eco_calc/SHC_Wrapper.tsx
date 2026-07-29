import { Link } from "react-router";
import SHC_App from "./SHC_App.jsx";
import Footer from "../../HomepageVariants/MinimalHomepage/Footer.js";

const SHC_Wrapper = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center gap-8 bg-stone-950 py-12 text-white">
      <Link to="/">
        <img src="/public/CurtTheNerd_cursive_main_negative.svg" alt="logo" className="absolute top-0 left-0 lg:left-24 flex w-75"/>
      </Link>
      <div className="pt-8 lg:pt-12">
        <SHC_App />
      </div>
      
      <Footer />
    </div>
  );
};

export default SHC_Wrapper;    

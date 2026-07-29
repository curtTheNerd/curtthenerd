import { Link } from "react-router";
import WeatherApp from "./WeatherApp";
import Footer from "../../HomepageVariants/MinimalHomepage/Footer";

const WeatherWrapper: React.FC = () => {
    return (
        <div
        id="weatherAppWrapper"
         className="flex flex-col w-[95%] md:w-[90%] max-w-360 mx-auto overflow-hidden"
        > 
            <Link to="/">
                <img src="/public/CurtTheNerd_cursive_main.svg" alt="logo" className="flex w-75"/>
            </Link>
            <div className="pt-4 lg:pt-12"><WeatherApp /> </div>
            
            
            <div className="w-full py-12"><Footer/></div>
        </div>
    )
}

export default WeatherWrapper;
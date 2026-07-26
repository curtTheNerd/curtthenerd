import { Link } from "react-router";
import WeatherApp from "./WeatherApp";
import Footer from "../../HomepageVariants/MinimalHomepage/Footer";

const WeatherWrapper: React.FC = () => {
    return (
        <div
        id="contactFormPage"
         className="flex flex-col w-[95%] md:w-[90%] max-w-360 mx-auto overflow-hidden"
        > 
            <Link to="/">
                <img src="/public/CurtTheNerd_cursive_2.svg" alt="logo" className="flex w-75 pb-2 lg:py-12 "/>
            </Link>
            
            <WeatherApp /> 
            
            <div className="w-full py-12"><Footer/></div>
        </div>
    )
}

export default WeatherWrapper;
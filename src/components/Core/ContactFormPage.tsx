import { Link } from "react-router";
import ContactForm from "../Content/ContactForm";
import Footer from "../HomepageVariants/MinimalHomepage/Footer";

const ContactPage: React.FC = () => {
    return (
        <div
        id="colorShaderApp"
         className="flex flex-col w-[95%] md:w-[90%] max-w-360 mx-auto overflow-hidden"
        > 
            <Link to="/">
                <img src="/public/CurtTheNerd_cursive_2.svg" alt="logo" className="flex w-75"/>
            </Link>
            
            <ContactForm /> 
            
            <div className="w-full py-12"><Footer/></div>
        </div>
    )
}

export default ContactPage;
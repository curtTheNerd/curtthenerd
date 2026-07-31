import { Link } from "react-router";
import ContactForm from "./ContactForm";
import Footer from "../HomepageVariants/MinimalHomepage/Footer";

const ContactPage: React.FC = () => {
    return (
        <div
        id="contactFormPage"
         className="flex flex-col w-[95%] md:w-[90%] max-w-360 mx-auto overflow-hidden"
        > 
            <Link to="/">
                <img src="/CurtTheNerd_cursive_main.svg" alt="logo" className="flex w-75 lg:ml-24"/>
            </Link>
            
            <ContactForm /> 
            
            <div className="w-full py-12"><Footer/></div>
        </div>
    )
}

export default ContactPage;
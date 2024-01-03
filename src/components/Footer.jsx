import { Link } from "react-router-dom";
import logo from "../assets/wttech-assets/logo-new-edit1.png";
import facebook from "../assets/team-assets/icons/facebook3.svg";
import linkedin from "../assets/team-assets/icons/linkedin.png";


export default function Footer() {
  return (
    <>
      <footer className="bg-footerBg flex flex-col justify-center items-center pt-10 md:justify-between md:flex-row md:px-20 lg:px-[140px]">
        <div className="logo-link mb-12 md:flex md:flex-row md:justify-between md:items-center md:gap-10 md:mb-10">
        <Link to="/" className="flex justify-center items-center gap-2  ">
          <img src={logo} alt="Wttech logo" className="w-10" />
          <h1 className="text-2xl text- uppercase tracking-widest">
            Wttech
          </h1>
        </Link>
          
          <div id="foot-link" className="flex flex-col gap-4 uppercase items-center mt-8 md:flex-row md:items-center md:justify-center md:mt-0">
            <Link to="/about-us" className="hover:text-primarygreen transition-all">ABout Us</Link>
            <Link to="/projects" className="hover:text-primarygreen transition-all">Projects</Link>
            <Link to="/contact" className="hover:text-primarygreen  transition-all">Contact</Link>
          </div>
          
        </div>

        <div className="flex justify-center items-center gap-12 mb-10 md:gap-5" id="socials">
          <Link to="https://facebook.com/profile.php?id=61554725091629&mibextid=ZbWKwL">
            <img 
              src={facebook} 
              alt="facebook icon" 
              className="cursor-pointer bg-white rounded-full p-2 hover:bg-primarygreen transition-all w-12" 
            />
          </Link>
          
          <Link to="https://www.linkedin.com/company/wttech/">
            <img 
              src={linkedin} 
              alt="twitter icon" 
              className="cursor-pointer bg-white rounded-full p-2 hover:bg-primarygreen transition-all w-12" 
            />
          </Link>
        </div>
      </footer>
    </>
  )
}

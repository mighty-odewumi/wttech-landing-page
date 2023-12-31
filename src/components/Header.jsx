import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/wttech-assets/logo-new-edit1.png";
import hamburger from "../assets/wttech-assets/icon-hamburger.svg";
import close from "../assets/wttech-assets/icon-close.svg";


export default function Header() {

  const [toggleNav, setToggleNav] = useState(false);
  
  function alterNav(e) {
    e.preventDefault();
    setToggleNav(prevValue => !prevValue);
  }

  return (
    <>
      <motion.header 
        animate={{  }}
        transition={{ type: "spring", stiffness: 70, ease: "easeInOut", delay: .2 }}
        className="pt-6 pb-6 px-6 flex justify-between items-center md:mx-20 md:pt-0 md:pb-0 md:mt-[-30px] md:px-0 lg:mx-[140px]"
      >
        <Link to="/" className="flex justify-center items-center gap-2  ">
          <img src={logo} alt="Wttech logo" className="w-10" />
          <h1 className="text-2xl tex t-primarygreen uppercase tracking-widest">
            Wttech
          </h1>
        </Link>

        <img
          src={hamburger}
          alt="Hamburger icon"
          className={`${
            toggleNav ? "hidden" : "block"
          } md:hidden w-6 h-6 cursor-pointer`}
          onClick={alterNav}
        />

        <motion.nav
          className={`${
            toggleNav 
              ? "w-full h-full z-20 text-white fixed top-0 left-0 p-6 text-center text-xl bg-primaryblack uppercase tracking-widest transition-all md:bg-transparent md:static md:flex md:px-0" 
              : "hidden md:block z-20 text-white fixed top-0 left-0 p-6 text-center text-xl bg-primaryblack uppercase tracking-widest transition-all md:bg-transparent md:static md:fl ex md:px-0"} 
          `}
          // initial={{ opacity: 0, }}
          
        >
          <div className="nav-header flex justify-between items-center">
            <Link to="/" className="flex justify-center items-center gap-2 md:hidden">
              <img src={logo} alt="Wttech logo" className="w-10" />
              <h1 className="text-2xl tex t-primarygreen uppercase tracking-widest">
                Wttech
              </h1>
            </Link>

            <img
              src={close}
              alt="Close icon"
              className={`${
                toggleNav ? "block" : "hidden"
              }  md:hidden w-4 h-4 cursor-pointer`}
              onClick={alterNav}
            />
          </div>

          <div className="flex flex-col py-10 md:flex-row md:py-10 md:gap-8 md:font-light md:text-sm">
            {/* <div className="border border-gray-600 md:hidden"></div> */}

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                  borderBottom: isActive && "2px solid #22c55e",
                };
              }}
              className="hover:text-primarygreen hover:font-bold py-4 md:hover:border-none md:hover:text-primarygreen  transition-all md:font-semibold md:text-white"
              to="/"
            >
              Home
            </NavLink>

            <div className="border border-gray-600 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                  borderBottom: isActive && "2px solid #22c55e",
                };
              }}
              className="hover:text-primarygreen hover:font-bold py-4 md:hover:border-none md:hover:text-primarygreen md:font-semibold transition-all md:text-white"
              to="/about-us"
            >
              About Us
            </NavLink>

            <div className="border border-gray-600 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                  borderBottom: isActive && "2px solid #22c55e",
                };
              }}
              className="hover:text-primarygreen hover:font-bold py-4 md:hover:border-none md:hover:text-primarygreen  md:font-semibold transition-all md:text-white"
              to="/contact"
            >
              Contact
            </NavLink>

            {/* <div className="border border-gray-600 md:hidden"></div> */}

            {/* <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                };
              }}
              className="hover:text-primarygreen hover:font-bold py-4 md:font-bold md:bg-primarygreen md:px-6 md:rounded-md md:hover:border-2 md:hover:border-primarygreen  md:hover:bg-transparent md:hover:text-primarygreen  md:transition-all md:text-white"
              to="/login"
            >
              Login
            </NavLink> */}

            {/* <div className="border border-gray-600 md:hidden"></div> */}
          </div>
        </motion.nav>
      </motion.header>
    </>
  );
}

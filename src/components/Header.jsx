import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/wttech-assets/logo-wttech-main-edit1.png";
import hamburger from "../assets/wttech-assets/icon-hamburger.svg";
import close from "../assets/wttech-assets/icon-close.svg";


export default function Header() {

  const [toggleNav, setToggleNav] = useState(false);
  
  // Called when there is a click action on the Hamburger menu 
  function alterNav(e) {
    e.preventDefault();
    setToggleNav(prevValue => !prevValue);
    console.log("toggled");
  }

  return (
    <>
      <header className="pt-6 pb-6 px-6 flex justify-between items-center md:mx-20 md:pt-0 md:pb-0 md:mt-[-30px] md:px-0 lg:mx-[140px]">
        <Link to="/" className="flex justify-center items-center gap-2  ">
          <img src={logo} alt="Wttech logo" className="w-10" />
          <h1 className="text-2xl text-gray-700 uppercase tracking-widest">
            Wttech
          </h1>
        </Link>

        <img
          src={hamburger}
          alt="Hamburger icon"
          className={`${
            toggleNav ? "hidden" : "block"
          } md:hidden w-6 h-6 cursor-pointer transition-1`}
          onClick={alterNav}
        />

        <nav
          className={`${
            toggleNav 
              ? "w-full" 
              : "hidden"} h-full z-20 text-black fixed top-0 left-0 p-6 text-center text-xl bg-white uppercase tracking-widest transition-all md:bg-transparent md:static md:flex md:px-0`}
        >
          <div className="nav-header flex justify-between items-center">
            <Link to="/" className="flex justify-center items-center gap-2 md:hidden">
              <img src={logo} alt="Wttech logo" className="w-10" />
              <h1 className="text-2xl text-gray-700 uppercase tracking-widest">
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
            <div className="border border-grayishblue-100 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                };
              }}
              className="hover:border hover:font-bold py-4 md:hover:border-none md:hover:text-softred-100 transition-all md:font-semibold"
              to="/"
            >
              Home
            </NavLink>

            <div className="border border-grayishblue-100 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                };
              }}
              className="hover:border hover:font-bold py-4 md:hover:border-none md:hover:text-softred-100 md:font-semibold transition-all"
              to="/about-us"
            >
              About Us
            </NavLink>

            <div className="border border-grayishblue-100 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                };
              }}
              className="hover:border hover:font-bold py-4 md:hover:border-none md:hover:text-softred-100 md:font-semibold transition-all"
              to="/contact"
            >
              Contact
            </NavLink>

            <div className="border border-grayishblue-100 md:hidden"></div>

            <NavLink
              style={({ isActive }) => {
                return {
                  fontWeight: isActive && "bold",
                };
              }}
              className="hover:border hover:font-bold py-4 md:font-bold md:bg-softred-100 md:text-black md:px-6 md:rounded-md md:hover:border-2 md:hover:border-softred-100 md:hover:bg-white md:hover:text-softred-100 md:transition-all "
              to="/login"
            >
              Login
            </NavLink>

            <div className="border border-grayishblue-100 md:hidden"></div>
          </div>
        </nav>
      </header>
    </>
  );
}

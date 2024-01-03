import { Link } from "react-router-dom";
import hero from "../assets/wttech-assets/hero-assets/hero36.svg";
import learnMore from "../assets/wttech-assets/learn-more.svg";
import { useState } from "react";
import Video from "./Video";


export default function Hero() {

  const [showVid, setShowVid] = useState(false);

  function showVideoFunc() {
    setShowVid(true);
  }

  return (
    <>
      <div 
        id="hero" 
        className="font-inter md:flex md:flex-row-reverse md:pl-20 md:justify-between md:items-center lg:pl-[140px] lg:gap-20 md:px-10"
      >
        
        <div id="hero-img" className="">
          <img 
            src={hero} 
            alt="hero icon" 
            className="w-full lg:w-[110vw] xl:pr-10 "
          />
        </div>

        <div id="hero-main-text" className="py-10 md:text-left px-6 md:pl-0">
          <h1 className="font-bold text-4xl pb-6 text-darkblue-100 md:text-4xl lg:text-5xl">
            Designing tomorrow, today
          </h1>

          <p className="leading-loose text-grayishblue-100 pb-12 md:px-0 ">
            We exist to give you a daily dose of design ingenuity and creative brilliance
          </p>

          <div className="flex justify-center items-center gap-3 md:justify-start
          ">
            <Link to="/" className="bg-primarygreen text-slate-100 py-3 px-6 font-bold rounded-lg hover:border hover:border-primarygreen hover:bg-transparent hover:text-green-500 transition-all w-1/2 text-center md:w-full">
              Get Started
            </Link>

            <Link 
              onClick={showVideoFunc}
              to="/" 
              className="py-3 px-4 font-bold rounded-lg hover:border hover:border-gray-400 hover:bg-transparent  transition-all flex justify-center items-center gap-2 md:gap-4 w-1/2 text-center md:w-full"
            >
              <img 
                src={learnMore}
                alt="learn more icon" 
                className="w-5"
              />
              Learn More
            </Link>
          </div>

        </div>

        {
          showVid && <Video />
        }
      </div>
    </>
  )
}

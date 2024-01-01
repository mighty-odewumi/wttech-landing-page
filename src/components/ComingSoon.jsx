import comingSoon from "../assets/coming.svg";
import Header from "./Header";
import Footer from "./Footer";

export default function ComingSoon() {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center h-screen text-center px-4">
        <img 
          src={comingSoon}
          className="" 
        />

        <h1 className="font-inter mt-4">
          This page is currently under construction. Please check again later.
        </h1> 
         
      </div>
      
      <Footer />
    </>
  )
}

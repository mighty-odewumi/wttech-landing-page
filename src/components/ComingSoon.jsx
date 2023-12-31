import comingSoon from "../assets/coming.svg";
import Header from "./Header";
import Footer from "./Footer";

export default function ComingSoon() {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center items-center h-full text-center px-4 py-6">
        <img 
          src={comingSoon}
          className="" 
        />

        <h1 className="font-inter mt-4">
          Site currently under construction. Please check again later.
        </h1> 
         
      </div>
      
      <Footer />
    </>
  )
}

import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <motion.div 
        className=""
        initial={{ opacity: 0, transform: "translateX(-100px)" }}
        animate={{ opacity: 1, transform: "translateX(0px)" }}
        transition={{ type: "tween",  ease: "easeOut", delay: .5, }}
      >
        <Header />

        <Hero />

        <main className="text-center font-inter mx-6 md:mx-20">
          <Services />

          <Team />
        </main>

        <Footer />
      </motion.div>
    </>
  )
}

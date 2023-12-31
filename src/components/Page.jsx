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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1, type: "spring", }}
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

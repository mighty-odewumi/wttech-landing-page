import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
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

        <Outlet />

        <Footer />

      </motion.div>
    </>
  )
}

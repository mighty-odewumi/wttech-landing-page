import { useState } from "react";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";
import Video from "./Video";

export default function MainUI() {

  const [showVid, setShowVid] = useState(false);

  function showVideoFunc() {
    setShowVid(true);
  }


  return (
    <>
      <Hero 
        showVideoFunc={showVideoFunc}
      />

      <main className="text-center font-inter mx-6 md:mx-20">
        {
          showVid && <Video />
        }

        <Services />

        <Team />
      </main>
    </>
  );
}

import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";

export default function MainUI() {
  return (
    <>
      <Hero />

      <main className="text-center font-inter mx-6 md:mx-20">
        <Services />

        <Team />
      </main>
    </>
  );
}

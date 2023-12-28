import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";

export default function Page() {
  return (
    <>
      <div className="">
        <Header />

        <Hero />

        <main className="font-inter mx-6 md:mx-20">
          <Services />
        </main>
      </div>
    </>
  )
}

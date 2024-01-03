import { Link } from "react-router-dom";
import serviceImg1 from "../assets/services-assets/content.svg";
import serviceImg2 from "../assets/services-assets/video.svg"
import serviceImg3 from "../assets/services-assets/web.svg";
import serviceImg4 from "../assets/services-assets/research.svg";
import serviceImg5 from "../assets/services-assets/graph.svg";
import serviceImg6 from "../assets/services-assets/stack.svg";


export default function Services() {

  const serviceInfo = [
    {
      id: 1,
      title: "website content creation",
      text: "Our content creation services go beyond words, curating materials that resonate with your audience. From impactful copywriting to engaging multimedia content, we turn ideas into compelling narratives.",
      src: serviceImg1, 
    },

    {
      id: 2,
      title: "photo and video retouching",
      text: "Unleash the power of stunning imagery and captivating videos. Our experts specialize in photo retouching and video editing turning ordinary visuals into extraordinary stories. Let your visuals speak louder!",
      src: serviceImg2,      
    },

    {
      id: 3,
      title: "website design",
      text: "Elevate your online presence with our innovative web design, crafting stunning and responsive websites for an engaging user experience.",
      src: serviceImg3,
    },

    {
      id: 4,
      title: "technical and research writing",
      text: "We are experts in the art of clear and precise technical writing, expertly conveying complex ideas in documentation and research papers.",
      src: serviceImg4,
    },    

    {
      id: 5,
      title: "web scraping",
      text: "Dive deep into data and gain a competitive edge. Our web scraping services extract valuable insights, providing the foundation for informed decision-making.",
      src: serviceImg5,
    },


    {
      id: 6,
      title: "full-stack engineering mastery",
      text: "Experience the art of full-stack engineering with our expert team. From frontend aesthetics to robust backend architecture, we bring creativity and technical excellence to every project.",
      src: serviceImg6,
    },
  ];

  const serviceCard = serviceInfo.map((data) => (
      <div 
        key={data.id}
        className="font-interLight text-left shadow-lg rounded-2xl py-8 pb-8 px-6 ring-1 hover:shadow-gray-700 my-6 md:w-1/2 md:m-auto md:my-6 lg:w-full lg:h -1/2" 
      >
        <img 
          src={data.src} 
          alt="service icon"
          className="mb-4 w-10 bg-white rounded-full p-2"
        />

        <h4 className="font-bold text-xl capitalize mb-4 ">{data.title}</h4>

        <p className="text-md font-sans text-gray-300 mb-4">
          {data.text}
        </p>

        <Link to="" className="font-sans text-blue-400 underline-white rounded-lg py-2 hover:underline transition-all mt-4 ">
          Learn more →
        </Link>
      </div>
    )
  );

  return (
    <>
      <div className="text-center mt-20 mb-20">
        <h3 className="uppercase">
          Services
        </h3>

        <h4 className="text-4xl font-bold mt-3">What We Offer</h4>

        <div className="mt-10 lg:grid lg:grid-flow-row-dense lg:grid-rows-2 lg:grid-cols-myCol md:gap-10 ">
          {serviceCard}
        </div>
      </div>
      
    </>
  )
}

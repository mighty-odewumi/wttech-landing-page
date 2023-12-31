import { Link } from "react-router-dom";

export default function Services() {

  const serviceInfo = [
    {
      id: 1,
      title: "graphic design",
      text: "Transform your ideas into visual masterpieces with our graphic design expertise. From eye-catching logos to stunnign marketing collateral, we craft designs that leave a lasting impression.",
      src: "./src/assets/wttech-assets/activity.svg", 
    },

    {
      id: 2,
      title: "video editing",
      text: "Bring your story to life through video editing prowess. We seamlessly blend visuals, sound, and effects to create captivating narratives that resonate with your audience. Elevate your content with our cinematic touch.",
      src: "./src/assets/wttech-assets/video.svg",      
    },

    {
      id: 3,
      title: "website design",
      
      text: "Forge a strong online presence with our cutting-edge web design solutions. We create responsive and visually stunning websites that not only captivate your audience but also provide an intuitive user experience.",
      src: "./src/assets/wttech-assets/activity.svg",
    },
  ];

  const serviceCard = serviceInfo.map((data) => (
      <div 
        key={data.id}
        className="font-interLight text-center shadow-lg rounded-2xl py-8 pb-8 px-6 flex flex-col justify-center items-center gap-4 ring-1 hover:shadow-gray-700 cursor-pointer my-6 md:w-1/2 md:m-auto md:my-6 lg:w-1/3" 
      >
        <img 
          src={data.src} 
          alt="service icon"
          className="text-center"
        />

        <h4 className="font-bold text-2xl capitalize">{data.title}</h4>

        <p className="text-md">
          {data.text}
        </p>

        <Link to="" className="bg-primarygreen text-white rounded-lg py-2 px-6 hover:text-primarygreen hover:bg-white hover:border-2  hover:font-bold transition-all ">
          Learn more
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

        <h4 className="text-4xl font-bold mt-3">Our Vision & Our Goal</h4>

        <div className="mt-10 lg:flex lg:flex-row md:gap-10 lg:gap0 ">
          {serviceCard}
        </div>
      </div>
      
    </>
  )
}

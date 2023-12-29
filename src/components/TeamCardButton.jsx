import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export function TeamCardButton({ id, fb, twitter, youtube }) {

  const btnAssets = [
    {
      imgPath: "../src/assets/team-assets/icon-facebook.svg",
      link: fb,
    },

    {
      imgPath: "../src/assets/team-assets/icon-twitter.svg",
      link: twitter,
    },

    {
      imgPath: "../src/assets/team-assets/youtube.svg",
      link: youtube,
    },
    
  ];

  const btn = btnAssets.map(data => (
    <button 
      key={id}
      className="border w-full flex justify-center py-6 rounded-b-md rounded-t-sm"
    >
      <Link 
        to={data.link} 
        className="text-center"
      >
        <img 
          src={data.imgPath} 
          alt="facebook icon" 
          className=""
        />
      </Link>
      
    </button>
  ));

  return (
    <>
      {btn}
    </>
  )
}

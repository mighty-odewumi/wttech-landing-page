import { Link } from "react-router-dom";
import imgPath1 from "../assets/team-assets/icons/icon-facebook.svg";
import imgPath2 from "../assets/team-assets/icons/icon-twitter.svg";
import imgPath3 from "../assets/team-assets/icons/youtube.svg";


// eslint-disable-next-line react/prop-types
export function TeamCardButton({ id, fb, twitter, youtube }) {

  const btnAssets = [
    {
      imgPath: imgPath1,
      link: fb,
    },

    {
      imgPath: imgPath2,
      link: twitter,
    },

    {
      imgPath: imgPath3,
      link: youtube,
    },
    
  ];

  const btn = btnAssets.map(data => (
    <button 
      key={id}
      className="border w-full flex justify-center py-6 rounded-b-md rounded-t-sm hover:bg-slate-700"
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

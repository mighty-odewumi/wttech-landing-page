import { Link } from "react-router-dom";
import imgPath1 from "../assets/team-assets/icons/icon-facebook.svg";
import imgPath2 from "../assets/team-assets/icons/icon-twitter.svg";
import imgPath3 from "../assets/team-assets/icons/youtube.svg";
import imgPath4 from "../assets/team-assets/icons/instagram.png";
import imgPath5 from "../assets/team-assets/icons/envelopes.svg";


/* 
  TODOs:
  # Make it so that only images with valid links are displayed
  # 
*/

// eslint-disable-next-line react/prop-types
export function TeamCardButton({ id, fb, twitter, youtube, email, instagram }) {

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
          alt="icon" 
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

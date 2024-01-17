/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import imgPath1 from "../assets/team-assets/icons/facebook5.svg";
import imgPath2 from "../assets/team-assets/icons/twitter2.svg";
import imgPath3 from "../assets/team-assets/icons/youtube2.svg";
import imgPath4 from "../assets/team-assets/icons/instagram2.svg";
import imgPath5 from "../assets/team-assets/icons/mail-edit1.png";
import imgPath6 from "../assets/team-assets/icons/linkedin3.svg";
import imgPath7 from "../assets/team-assets/icons/github1.svg";


export function TeamCardButton({ fb, twitter, youtube, email, instagram, linkedIn, github, data, }) {

  const btnAssetsArr = [
    {
      imgPath: imgPath1,
      link: fb,
      myId: 1,
    },

    {
      imgPath: imgPath2,
      link: twitter,
      myId: 2,
    },

    {
      imgPath: imgPath3,
      link: youtube,
      myId: 3,
    },

    {
      imgPath: imgPath4,
      link: instagram,
      myId: 4,
    },

    {
      imgPath: imgPath5,
      link: email,
      myId: 5,
    },
    
    {
      imgPath: imgPath6,
      link: linkedIn,
      myId: 6,
    },

    {
      imgPath: imgPath7,
      link: github,
      myId: 7,
    },

  ];

  const socials = ["email", "fbLink", "instagram", "twitterLink", "youtubeLink", "linkedIn", "github",];

  /*
    ** Check if the data from the teamInfo has a property of each social, 
    ** Check the btnAssetsArr list and see if the value of the link is same as that from teamInfo.
    ** Then, display the corresponding social media icon. 
  */

  const buttons = socials.map((social) => {
    const socialData = data[social];
    const asset = btnAssetsArr.find((item) => item.link === socialData);

    if (socialData && asset) {
      return (
        <button
          key={asset.myId}
          className="border w-full flex justify-center py-6 rounded-b-md rounded-t-sm hover:bg-slate-700"
        >
          <Link to={asset.link} className="text-center">
            <img src={asset.imgPath} alt="icon" className="" />
          </Link>
        </button>
      );
    }

    return null; // Render nothing if the social link is not defined
  });

  
  return (
    <>
      { buttons }
    </>
  );
}

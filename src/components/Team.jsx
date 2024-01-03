import { TeamCardButton } from "./TeamCardButton";
import teamMate1 from "../assets/team-assets/teamImg1.avif";
import teamMate2 from "../assets/team-assets/teamImg2.avif";
import teamMate3 from "../assets/team-assets/teamImg3.avif";
import teamMate4 from "../assets/team-assets/teamImg7.avif";
import teamMate5 from "../assets/team-assets/teamImg9.jpg";


export default function Team() {

  const teamInfo = [
    {
      id: 1,
      name: "Blake Gentleman",
      position: "Visionary",
      src: teamMate1, 
      fbLink: "https://facebook.com",
      twitterLink: "https://twitter.com",
      youtubeLink: "https://youtube.com",
    },

    {
      id: 2,
      name: "Dickson Houston",
      position: "Backend Engineer",
      src: teamMate2, 
      fbLink: "https://facebook.com",
      twitterLink: "https://twitter.com",
      youtubeLink: "https://youtube.com",
    },

    {
      id: 3,
      name: "Wutoma Nakamoto",
      position: "Video Designer",
      src: teamMate3, 
      fbLink: "https://facebook.com",
      twitterLink: "https://twitter.com",
      youtubeLink: "https://youtube.com",
    },

    {
      id: 4,
      name: "Jack Reacher",
      position: "Frontend Developer",
      src: teamMate4, 
      fbLink: "https://facebook.com",
      twitterLink: "https://twitter.com",
      youtubeLink: "https://youtube.com",
    },

    {
      id: 5,
      name: "Iann Stonewall",
      position: "AI Researcher",
      src: teamMate5, 
      fbLink: "https://facebook.com",
      twitterLink: "https://twitter.com",
      youtubeLink: "https://youtube.com",
    },

  ];

  /*
  Sammy, Dieko, Wttech, Gr1ntch, Iyanu
  */

  const teamCard = teamInfo.map(data => (
    <div 
      key={data.id}
      className="pt-6 flex flex-col gap-4 justify-center rounded-lg shadow-lg ring-2 hover:shadow-gray-700 transition-all"
    >
      <img 
        src={data.src} 
        alt="team member"
        className="rounded-full w-20 m-auto" 
      />
      <h3 className="px-10 text-xl font-bold">{data.name}</h3>
      <h4 className="px-10 text-gray-200">{data.position}</h4>

      <div className="flex pt-4">
        <TeamCardButton 
          id={data.id}
          fb={data.fbLink}
          twitter={data.twitterLink}
          youtube={data.youtubeLink}
        />
        
      </div>
    </div>
  ));

  return (
    <>
      <h3 className="uppercase">
          Our team
      </h3>
      <h4 className="text-4xl font-bold mt-3">Meet The Team</h4>

      <div className="flex flex-col gap-10 mt-10 mb-20 md:flex-row md:overflow-auto md:whitespace-nowrap p-4">
        {teamCard}
      </div>
    </>
  )
}

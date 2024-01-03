import { TeamCardButton } from "./TeamCardButton";
import { teamInfo } from "./teamInfo";


/* 
  TODOs: 
  # Replace details of team members
*/

export default function Team() {

  const teamCard = teamInfo.map(data => (
    <div 
      key={data.id}
      className="pt-6 flex flex-col gap-4 justify-center rounded-lg shadow-lg ring-2 hover:shadow-gray-700 transition-all"
    >
      <img 
        src={data.src} 
        alt="team member"
        className="rounded-full w-32 m-auto border-4 " 
      />
      <h3 className="px-10 text-xl font-bold">{data.name}</h3>
      <h4 className="px-10 text-gray-200">{data.position}</h4>

      {/* <p className="">
        <img 
          src="#" 
          alt="icon" 
          className=""
        />

        
      </p> */}

      <div className="flex pt-4">
        <TeamCardButton 
          id={data.id}
          fb={data.fbLink}
          twitter={data.twitterLink}
          youtube={data.youtubeLink}
          email={data.email}
          instagram={data.instagram}
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

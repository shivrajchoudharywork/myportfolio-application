import SkillsCard from "../components/skillscard";
import { Link } from "react-router-dom";

export default function Mine() {
  return (
    <div className="w-full max-w-screen-sm mx-auto mb-20">
      <img 
        src="/photo.jpeg" 
        alt="Profile" 
        className="w-40 h-40 mx-auto rounded-full border-4 border-violet-300 shadow-lg mt-20 mb-14 transition-transform transform hover:scale-105"
      />
      <h2 className="text-5xl font-bold tracking-tight text-violet-200 text-center p-5 hover:underline">
        <Link to={"/about"}>Shivraj Choudhary</Link>
      </h2>

      <div className="mb-10">
        <div className="text-2xl font-semibold tracking-tight text-violet-100 text-center p-5 bg-gray-800 rounded-lg shadow-md">
          Full Stack Developer
        </div>
        <div className="text-xl font-normal tracking-tight text-violet-100 text-center p-5 mt-4 bg-gray-800 rounded-lg shadow-md">
          Empowering the digital world with innovative full stack solutions, driven by a passion for continuous learning and growth.
        </div>
      </div>

      <div className="text-2xl font-semibold tracking-tight text-violet-100 text-center p-5 mt-28 mb-10">
        My Top Skills
      </div>

      {/* Flex container with flex-wrap to wrap the skill cards */}
      <div className="flex flex-wrap justify-center gap-6">
        <SkillsCard label1={"/c.jpg"} label2={"C"} />
        <SkillsCard label1={"/javascript.png"} label2={"JavaScript"} />
        <SkillsCard label1={"/typescript.png"} label2={"TypeScript"} />
        <SkillsCard label1={"/python.jpg"} label2={"Python"} />
        <SkillsCard label1={"/react.png"} label2={"React"} />
        <SkillsCard label1={"/nextjs.jpg"} label2={"Next.js"} />
        <SkillsCard label1={"/css.jpg"} label2={"CSS"} />
        <SkillsCard label1={"/tailwind.jpg"} label2={"Tailwind CSS"} />
        <SkillsCard label1={"/html.jpg"} label2={"HTML"} />
        <SkillsCard label1={"/nodejs.png"} label2={"Nodejs"} />
        <SkillsCard label1={"/mongodb.png"} label2={"MongoDB"} />
        <SkillsCard label1={"/bootsrap.svg"} label2={"Bootstrap"} />
        <SkillsCard label1={"/vscode.png"} label2={"Visual Studio Code"} />
        <SkillsCard label1={"/postgre.png"} label2={"Postgres"} />
        <SkillsCard label1={"/docker.jpg"} label2={"Docker"} />
        <SkillsCard label1={"/shadcn.png"} label2={"Shadcn UI"} />
      </div>
    </div>
  );
}

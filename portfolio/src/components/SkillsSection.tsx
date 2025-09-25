import React from "react";
import HTMLIcon from "./icon/techs/HTMLIcon";
import CSSIcon from "./icon/techs/CSSIcon";
import JavascriptIcon from "./icon/techs/JavascriptIcon";
import ReactIcon from "./icon/techs/ReactIcon";
import NextIcon from "./icon/techs/NextIcon";
import TypescriptIcon from "./icon/techs/TypescriptIcon";
import BooStrapIcon from "./icon/techs/BoostrapIcon";
import TailwindIcon from "./icon/techs/TailwindIcon";
import JqueryIcon from "./icon/techs/JqueryIcon";
import PythonIcon from "./icon/techs/PythonIcon";
import JavaIcon from "./icon/techs/JavaIcon";

const SkillItem = ({ skill, index, setPrefix }: { 
  skill: { Icon: React.ElementType; name: string }; 
  index: number; 
  setPrefix: string 
}) => (
  <div 
    key={`${setPrefix}-${index}`}
    className="flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
  >
    <skill.Icon width={80} height={80} />
    <span className="text-white text-sm font-medium">{skill.name}</span>
  </div>
);

const SkillsSection = () => {
  const skills = [
    { Icon: HTMLIcon, name: "HTML" },
    { Icon: CSSIcon, name: "CSS" },
    { Icon: JavascriptIcon, name: "JavaScript" },
    { Icon: TypescriptIcon, name: "TypeScript" },
    { Icon: JqueryIcon, name: "jQuery" },
    { Icon: ReactIcon, name: "React" },
    { Icon: NextIcon, name: "Next.js" },
    { Icon: BooStrapIcon, name: "Bootstrap" },
    { Icon: TailwindIcon, name: "Tailwind CSS" },
  ];

  const additionalSkill = [
    { Icon: PythonIcon, name: "Python" },
    { Icon: JavaIcon, name: "Java" },

    { Icon: JavascriptIcon, name: "JavaScript" },
    { Icon: TypescriptIcon, name: "TypeScript" },
    { Icon: JqueryIcon, name: "jQuery" },
    { Icon: ReactIcon, name: "React" },
    { Icon: NextIcon, name: "Next.js" },
    { Icon: BooStrapIcon, name: "Bootstrap" },
    { Icon: TailwindIcon, name: "Tailwind CSS" },

  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          <div className="flex gap-8 animate-seamless w-max">
            {Array.from({ length: 2 }, (_, setIndex) => 
              skills.map((skill, index) => (
                <SkillItem 
                  key={`set-${setIndex}-${index}`}
                  skill={skill} 
                  index={index} 
                  setPrefix={`set-${setIndex}`}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 py-16">
        <h3 className="text-2xl font-bold text-white mb-4">Additional Skills</h3>
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
          <div className="flex gap-8 animate-seamless w-max">
          {Array.from({ length: 2 }, (_, setIndex) => 
              additionalSkill.map((skill, index) => (
                <SkillItem 
                  key={`add-set-${setIndex}-${index}`}
                  skill={skill} 
                  index={index} 
                  setPrefix={`add-set-${setIndex}`}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
   
       
  );
};

export default SkillsSection;
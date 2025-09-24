import React from "react";
import HTMLIcon from "./icon/HTMLIcon";
import CSSIcon from "./icon/CSSIcon";
import JavascriptIcon from "./icon/JavascriptIcon";
import ReactIcon from "./icon/ReactIcon";
import NextIcon from "./icon/NextIcon";
import TypescriptIcon from "./icon/TypescriptIcon";
import BooStrapIcon from "./icon/BoostrapIcon";
import TailwindIcon from "./icon/TailwindIcon";
import JqueryIcon from "./icon/JqueryIcon";

// Skill Item Component
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

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16">
      <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
      
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div 
          className="flex gap-8 animate-scroll"
          style={{ 
            animation: 'scroll 45s linear infinite',
            width: 'calc(300% + 4rem)' // 3x width for seamless loop
          }}
        >
          {/* Render 3 sets for seamless loop */}
          {Array.from({ length: 3 }, (_, setIndex) => 
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
  );
};

export default SkillsSection;
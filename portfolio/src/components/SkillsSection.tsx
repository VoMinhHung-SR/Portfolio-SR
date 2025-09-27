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
import GithubIcon from "./icon/techs/GithubIcon";
import GitIcon from "./icon/techs/GitIcon";
import MySQLIcon from "./icon/techs/MySQLIcon";
import PostgreSQLIcon from "./icon/techs/PostgreSQLIcon";
import FirebaseIcon from "./icon/techs/FirebaseIcon";
import DockerIcon from "./icon/techs/DockerIcon";
import PostmanIcon from "./icon/techs/PostmanIcon";

interface Skill {
  Icon: React.ElementType;
  name: string;
}

interface SkillItemProps {
  skill: Skill;
  index: number;
  setPrefix: string;
}

const SkillItem = ({ skill, index, setPrefix }: SkillItemProps) => (
  <div 
    key={`${setPrefix}-${index}`}
    className="flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
  >
    <skill.Icon width={80} height={80} />
    <span className="text-white text-sm font-medium">{skill.name}</span>
  </div>
);

interface SkillsListProps {
  title: string;
  skills: Skill[];
  titleClassName?: string;
  setPrefix: string;
}

const SkillsList = ({ title, skills, titleClassName = "text-3xl", setPrefix }: SkillsListProps) => (
  <div className="flex flex-col items-center justify-center gap-8 py-16">
    <h2 className={`${titleClassName} font-bold text-white mb-4`}>{title}</h2>
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex gap-8 animate-seamless w-max">
        {Array.from({ length: 2 }, (_, setIndex) => 
          skills.map((skill, index) => (
            <SkillItem 
              key={`${setPrefix}-${setIndex}-${index}`}
              skill={skill} 
              index={index} 
              setPrefix={`${setPrefix}-${setIndex}`}
            />
          ))
        )}
      </div>
    </div>
  </div>
);

const SkillsSection = () => {
  // Core skills
  const coreSkills: Skill[] = [
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

  // Additional skills (only unique ones)
  const additionalSkills: Skill[] = [
    { Icon: PythonIcon, name: "Python" },
    { Icon: JavaIcon, name: "Java" },
    { Icon: MySQLIcon, name: "MySQL" },
    { Icon: PostgreSQLIcon, name: "PostgreSQL" },
    { Icon: FirebaseIcon, name: "Firebase" },
    { Icon: GitIcon, name: "Git" },
    { Icon: GithubIcon, name: "GitHub" },
    { Icon: DockerIcon, name: "Docker" },
    { Icon: PostmanIcon, name: "Postman" },
  ];

  return (
    <>
      <SkillsList 
        title="Skills" 
        skills={coreSkills} 
        setPrefix="core"
      />
      <SkillsList 
        title="Additional Skills" 
        skills={additionalSkills} 
        titleClassName="text-2xl"
        setPrefix="additional"
      />
    </>
  );
};

export default SkillsSection;
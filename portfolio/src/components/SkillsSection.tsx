import { useEffect, useRef } from "react";
import HTMLIcon from "./icon/HTMLIcon";
import CSSIcon from "./icon/CSSIcon";
import JavascriptIcon from "./icon/JavascriptIcon";
import ReactIcon from "./icon/ReactIcon";
import NextIcon from "./icon/NextIcon";
import TypescriptIcon from "./icon/TypescriptIcon";
import BooStrapIcon from "./icon/BoostrapIcon";
import TailwindIcon from "./icon/TailwindIcon";
import JqueryIcon from "./icon/JqueryIcon";

const SkillsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scroll = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

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
      
      <div className="relative w-full max-w-4xl mx-auto">
        <div 
          ref={carouselRef}
          className="flex gap-8 overflow-hidden scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* First set of icons */}
          {skills.map((skill, index) => (
            <div 
              key={`first-${index}`}
              className="flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <skill.Icon width={80} height={80} />
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {skills.map((skill, index) => (
            <div 
              key={`second-${index}`}
              className="flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
            >
              <skill.Icon width={80} height={80} />
              <span className="text-white text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
};

export default SkillsSection;
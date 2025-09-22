import HTMLIcon from "./icon/HTMLIcon";
import CSSIcon from "./icon/CSSIcon";
import JavascriptIcon from "./icon/JavascriptIcon";
import ReactIcon from "./icon/ReactIcon";
import NextIcon from "./icon/NextIcon";
import TypescriptIcon from "./icon/TypescriptIcon";
import BooStrapIcon from "./icon/BoostrapIcon";
import TailwindIcon from "./icon/TailwindIcon";

const SkillsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
      <div className="flex flex-col items-center gap-6">
        <HTMLIcon width={120} height={120} />
        <CSSIcon width={120} height={120} />
        <JavascriptIcon width={120} height={120} />
        <TypescriptIcon width={120} height={120} />
        <JqueryIcon width={120} height={120} />
        <ReactIcon width={120} height={120} />
        <NextIcon width={120} height={120} />
        <BooStrapIcon width={120} height={120} />
        <TailwindIcon width={120} height={120} />
      </div>
    </div>
  );
};

export default SkillsSection;
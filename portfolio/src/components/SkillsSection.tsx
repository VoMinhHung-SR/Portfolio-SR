import HTMLIcon from "./icon/HTMLIcon";
import CSSIcon from "./icon/CSSIcon";

const SkillsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Skills</h2>
      <HTMLIcon width={48} height={48} />
      <CSSIcon width={48} height={48} />
    </div>
  );
};

export default SkillsSection;
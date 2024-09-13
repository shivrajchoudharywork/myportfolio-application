interface SkillsCardProps {
  label1: string; // URL for the image
  label2: string; // Skill name
}

export default function SkillsCard({ label1, label2 }: SkillsCardProps) {
  return (
    <div className="text-white flex items-center border-solid border-2 border-violet-200 p-3 rounded-2xl w-48 h-20">
      <img src={label1} alt="Skill" className="w-10 h-10 rounded-lg" />
      <span className="pl-4">{label2}</span>
    </div>
  );
}

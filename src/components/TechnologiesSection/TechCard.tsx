import type { Technology } from "../types/Technologies";

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechCard = ({ tech, isAdded, onAdd }: TechCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-8 h-8 object-contain"
        />
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-50 text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#0F172A] mb-1">{tech.name}</h3>
      <p className="text-sm text-[#6B7586] mb-4 flex-1">{tech.description}</p>

      <div className="flex items-center gap-2 text-xs text-[#6B7586] mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded-md">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-[#0F172A] font-medium">
          <span className="text-yellow-400">★</span>
          {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`py-2.5 rounded-lg font-medium text-sm transition ${
          isAdded
            ? "bg-green-50 text-green-600 cursor-not-allowed"
            : "bg-[#0F172A] text-white hover:opacity-90 cursor-pointer"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
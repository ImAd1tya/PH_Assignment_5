import type { Technology } from "../types/Technologies";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 h-fit sticky top-24">
      <h3 className="text-lg font-bold text-[#0F172A]">Your Stack</h3>
      <p className="text-sm text-[#6B7586] mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-gray-400">
          No technologies added yet. Start building your stack!
        </p>
      ) : (
        <div className="space-y-2 mb-4">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-5 h-5 object-contain"
                />
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">{tech.name}</p>
                  <p className="text-xs text-[#6B7586]">{tech.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                className="text-gray-400 hover:text-red-500 transition cursor-pointer"
                aria-label={`Remove ${tech.name}`}
              >               
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full border border-red-200 text-red-500 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackSidebar;
import { use, useState } from "react";
import { toast } from "react-toastify";

import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";
import type { Technology } from "../types/Technologies";

interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  const [stack, setStack] = useState<Technology[]>([]);

  const isInStack = (id: string) => stack.some((t) => t.id === id);

  const handleAdd = (tech: Technology) => {
    if (isInStack(tech.id)) {
      toast.warning(`${tech.name} is already in your stack`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemove = (id: string) => {
    const tech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("All technologies removed");
  };

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
        Explore the <span className="text-pink-500">Technologies</span>
      </h2>
      <p className="text-[#6B7586] mt-2 mb-8">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechCard
              key={tech.id}
              tech={tech}
              isAdded={isInStack(tech.id)}
              onAdd={handleAdd}
            />
          ))}
        </div>

        <StackSidebar
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </div>
  );
};

export default Technologies;
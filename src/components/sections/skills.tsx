import SKILLS from '@/data/skills';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Skills() {
  return (
    <div className="mb-16 section motion-translate-x-in-[-24%] motion-translate-y-in-[0%]">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Compétences</h2>

      {SKILLS.map((category) => (
        <div key={category.field}>
          <h3 className="mb-4 text-lg font-heading sm:text-xl">
            {category.field}
          </h3>

          <div className="mb-10 flex flex-wrap gap-5">
            {category.skills.map((skill) => (
              <TooltipProvider key={skill.skill}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center text-center group">
                      <skill.icon
                        className="h-8 w-8 text-gray-700 group-hover:text-blue-500"
                        title={skill.skill}
                      />
                      <span className="mt-2 text-sm text-gray-600 group-hover:text-blue-500">
                        {skill.skill}
                      </span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{skill.skill}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

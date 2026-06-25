import { skills } from "../data/myDetails"
const Skills = () => {

  return (
    <>
      <div className="mt-20 mb-30 max-w-5xl mx-4 lg:mx-auto space-y-10">
        <p className="text-2xl md:text-4xl">Technologies <span className="text-sm md:text-xl text-slate-700 dark:text-slate-400">[Familiar]</span></p>
        <div className="overflow-hidden">
          <div className="animate-morque flex gap-x-8">
            {
              [...skills, ...skills, ...skills].map((skillType, i) => (
                <div key={i} className="flex items-center gap-1 whitespace-nowrap">
                  <div className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0">
                    <img className="w-full h-full" src={skillType.url} alt={skillType.skill} />
                  </div>
                  <p className="text-sm md:text-base">{skillType.skill}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
import Project from "./Project"
import { CgMoreVertical } from "react-icons/cg";
import { projectInfos } from "../data/myDetails"

const Projects = () => {
  return (
    <>
      <section className="relative max-w-5xl mx-4 lg:mx-auto my-40">
        <div className="font-oswald ">
          <h1 id="projects" className="text-6xl lg:text-8xl uppercase font-black tracking-tight bg-gradient-to-b from-black via-black/50 to-transparent dark:bg-gradient-to-b dark:from-white dark:via-white/30 to-transparent bg-clip-text text-transparent leading-none text-center select-none pointer-events-none mb-6">Projects</h1>
        </div>
        <section className="relative z-10 ">
          <div className="mb-10 space-y-10">
            <p className="glass-3 rounded-xl p-4 text-black/50 dark:text-white/50 border border-red-500/50 flex items-center justify-start gap-1 "><span className="text-red-500 text-xl animate-pulse">&bull;</span>Ideas are cheap. Building them is what changes everything.</p>
          </div>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {
              projectInfos.map((projectInfo, i) => (
                <div key={i}>
                  <Project info={projectInfo} />
                </div>
              ))
            }
          </section>
        </section>
        <div className="flex items-center justify-center">
          <a href="https://github.com/veeru-10?tab=repositories" target="_blank" className="mt-20 text-center bg-black text-white hover:bg-black/60 dark:bg-white dark:hover:bg-white/60 dark:text-black px-4 py-3 rounded flex gap-x-2 items-center justify-center transition-colors duration-300">View More<span><CgMoreVertical /></span></a>
        </div>
      </section>
    </>
  )
}

export default Projects
// import { FolderOpenDot } from "lucide-react"
import { GiOnTarget } from "react-icons/gi";
import { strengths } from "../data/myDetails"
const Hero = () => {
  return (
    <section id="home" className="relative mb-40 max-w-5xl mx-4 lg:mx-auto transition-all duration-500 gap-y-8 mt-10">
      <div>
        <div className="space-y-16">
          <div>
            <p className="text-black/70 dark:text-white/70 font-serif text-xl md:text-2xl -mb-3 ps-2">Hi everyone,</p>
            <h1 className="text-8xl lg:text-9xl font-cursive select-none">
              <span className="font-cinzel tracking-wider">I'm</span>
              <span className="font-kaushan text-green-800">V</span>eeranjini..</h1>
          </div>
          <div>
            <h1 className="text-black/60 dark:text-white/70 font-mono font-black text-xl md:text-2xl flex gap-1"> <span className="text-black dark:text-white/70  animate-pulse text-2xl"><GiOnTarget/></span> Aspiring Full Stack Developer</h1>
          </div>
          <div>
            <h2 className=" text-5xl py-2 md:text-6xl lg:text-7xl xl-text-8xl font-oswald bg-gradient-to-b from-green-900 via-green-900 to-black/10 dark:bg-gradient-to-b dark:from-green-700 dark:via-green-700 dark:to-green-400 bg-clip-text text-transparent tracking-tight ">Code with patience, design with passion.
            </h2>
          </div>
          <div className="overflow-hidden">
            <ul className="flex flex-col md:flex-row md:justify-around gap-4 md:gap-0 list-inside  md:list-disc lg:text-xl">
              {
                [...strengths].map((strength, i) => (
                  <li 
                  key={i} 
                  className="relative text-black dark:text-white hover:text-green-800 dark:hover:text-green-400 transition-colors duration-300 font-medium cursor-pointer group py-2 w-fit md:w-auto">
                    <span className="relative">
                      {strength}
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-green-800 to-black/50 dark:bg-gradient-to-r dark:from-green-400 dark:to-white/50 scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-center"></span>
                    </span>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* <div className="flex gap-2 bg-green-800 hover:bg-green-900 transition-all duration-300 px-4 py-2 md:px-6 md:py-4 cursor-pointer rounded-lg text-white">
            <span><FolderOpenDot/></span>
            <p className="">MyResume</p>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
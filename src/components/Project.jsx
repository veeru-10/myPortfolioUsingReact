import { FaGithub } from "react-icons/fa";
import { ExternalLink } from 'lucide-react';
const Project = ({ info }) => {
  const techs = info.techs;
  return (
    <>
      <section className="relative overflow-hidden rounded-xl shadow-md  shadow-slate-800/80 cursor-pointer border border-white transition-all hover:transform hover:-translate-y-2 duration-300 ">
        <div className="w-full overflow-hidden shadow shadow-black/20 dark:shadow-white/50 relative group">
          <img src={info.img} alt={info.alt} className="object-cover aspect-[16/9] w-full group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gray-800/50 group-hover:bg-transparent transition-colors duration-300"></div>
        </div>
        
        <div className="flex flex-col justify-between items-start space-y-4 my-6 mx-2 group">
          <h1 className="uppercase text-xl">{info.title}</h1>
          <p className="dark:text-slate-300 text-xs sm:text-sm text-justify tracking-wider text-black/70">{info.disc}</p>
          {/* technologies */}
          <div className="flex gap-x-3">
            {
              techs.map((tech, i) => (
                <div key={i} className="size-10 p-2 sm:size-12 sm:p-3 bg-black dark:border  dark:border-white  rounded-full hover:transform hover:-translate-y-2 duration-300">
                  <img src={`/${tech}`} alt="skill logo" className="w-full" />
                </div>
              ))
            }
          </div>
        </div>
        {/* urls */}
        <div className=" flex gap-x-4 pe-8 pb-8 float-end">
            <div className="hover:transform hover:-translate-y-2 duration-300">
              <a href={info.github} target="_blank"><FaGithub size={"28px"} /></a>
            </div>
            <div className="hover:transform hover:-translate-y-2 duration-300">
              <a href={info.preview} target="_blank"><ExternalLink size={"28px"} /></a>
            </div>
          </div>
      </section>
    </>
  )
}

export default Project
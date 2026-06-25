import { useState } from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const EdAccordian = ({details}) => {
  const [isAccordianOpen, setisAccordianopen] = useState(false)
  return (
    <>
      <section className="p-4 bg-white/15 dark:bg-black/5 border border-white/50 backdrop-blur-3xl shadow-md transition-colors duration-300 rounded-xl cursor-pointer  hover:bg-white/25 dark:hover:bg-black/10">
        <div onClick={()=>setisAccordianopen(!isAccordianOpen)} className="flex justify-between items-center text-black/60 dark:text-white/50 text-md md:text-xl ">
          <span className="text-sm sm:text-xl md:text-2xl">{details.role}</span>
          {isAccordianOpen ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
        </div>
        {
          isAccordianOpen && <hr />
        }
        <section className={`grid overflow-hidden transition-all duration-300 text-gray-950 dark:text-white text-sm ${isAccordianOpen ? 'grid-rows-[1fr] opacity-100 my-6' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden flex flex-col gap-6 text-sm md:text-lg">
            <h1 className="text-sm sm:text-xl md:text-2xl font-bold uppercase">{details.name}</h1>
            <div className="flex justify-between text-sx sm:text-sm md:text-lg">
              <h1 className="">{details.course}</h1>
              <p className="">{details.year}</p>
            </div>
            <p>{details.percentage}</p>
            <p className="flex gap-x-2 items-center"><span className="text-green-800"><FaLocationDot/></span> {details.location}</p>
          </div>
        </section>
      </section>
    </>
  )
}

export default EdAccordian
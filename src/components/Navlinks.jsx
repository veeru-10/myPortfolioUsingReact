import { navLinks } from "../data/myDetails";
const Navlinks = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 lg:inset-auto lg:right-20 lg:top-1/2 lg:-translate-y-1/2 glass-2 dark:bg-black/10 space-y-4 border-t border-white lg:rounded-xl lg:border lg:border-white z-40 animate-fadeUp lg:animate-fadeToLeft">
      <div className="flex justify-around items-center lg:block max-w-md mx-auto">
        {
        navLinks.map((icon, i) => {
          const NavIconComp = icon.NavIcon;
          return (
            <div key={i} className="hover:bg-black/10 dark:hover:bg-white/40 group px-3 sm:px-6 py-3 lg:px-3 lg:py-4 flex items-center justify-center transition-all duration-300">
              <a href={`#${icon.link}`} className="flex flex-col gap-2 items-center justify-center">
                <NavIconComp className="text-white text-xl sm:text-2xl group-hover:text-green-800 transition-all duration-300"/>
                <span className="text-xs md:text-sm group-hover:text-white dark:group-hover:text-black duration-200">{icon.title}</span>
              </a>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Navlinks
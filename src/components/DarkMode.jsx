import {
  MoonStar,
  Sun
} from "lucide-react";
import { useState, useEffect } from "react";
const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);
  return (
    <>
      <div className="group flex flex-col gap-y-3 sm:gap-0 sm:flex-row justify-between items-center mt-20">
        <button onClick={() => setDarkMode(!darkMode)} className={` w-18 h-9 ${darkMode ? 'bg-black/20' : 'bg-white/30'} shadow shadow-black dark:shadow-white/10 rounded-full cursor-pointer px-1 transition-all duration-300 `}>
          <div className={`bg-white/70 rounded-full p-1 float-start ${darkMode ? "opacity-100 transform translate-0" : "opacity-0 transform translate-x-4"} text-black transition-all duration-100`}>
            <Sun size={18} />
          </div>
          <div className={`bg-black/70 text-white rounded-full p-1 float-end ${darkMode ? "opacity-0 transform -translate-x-4" : "opacity-100"} transition-all duration-100`}>
            <MoonStar size={18} />
          </div>
        </button>
        <p className="font-medium text-black/60 dark:text-white/70">Copyright © 2026 <span>&bull;</span> VeeranjiniVemala</p>
      </div>

    </>
  )
}

export default DarkMode
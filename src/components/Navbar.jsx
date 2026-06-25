import { Menu, X } from 'lucide-react';
import { useEffect } from "react";
import { iconItems } from '../data/myDetails';

const Navbar = ({show, setShow}) => {

  function handleShow() {
      setShow(!show);
    }

  useEffect(()=>{
    if(show) {
      document.body.classList.add("overflow-hidden");
    }else {
      document.body.classList.remove("overflow-hidden");
    }
    return ()=> document.body.classList.remove("overflow-hidden");
  }, [show])

  return (
    <div className="py-4">
      <div className="max-w-5xl px-6 py-3 flex justify-between mx-2 lg:mx-auto glass dark:bg-black/20 rounded-lg transition-all duration-500 animate-fadeIn">
        {/* left section */}
        <div id="home">
          <img src="/logo.jpg" alt="logo" className="aspect-square w-10 h-10 md:w-12 md:h-12 rounded-full cursor-pointer" />
        </div>

        {/* right section */}
        <div className="hidden md:flex items-center justify-around gap-x-8 text-2xl md:text-3xl text-white ">
          {iconItems.map((icon) => {
            const IconComponent = icon.Icon;
            return (
              <a href={icon.link} target="_blank" rel="noreferrer" key={icon.id}>
                <IconComponent className={`${icon.color} transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-2`} />
              </a>
            );
          })}
        </div>

        {/* menu button */}
        <div className="md:hidden flex justify-center items-center w-10 h-10 text-white rounded-full hover:bg-black/50 transition-colors duration-300 cursor-pointer" onClick={handleShow}>
          <Menu />
        </div>
      </div>
      
      {/* blur and contrast div */}
      <section onClick={handleShow} className={`fixed inset-0 bg-black/40  transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></section>
      {/* Mobile Drawer Slide-out Menu */}
      <div 
        className={`fixed right-0 top-0 w-[320px] min-h-screen bg-green-900 transition-transform duration-500 ease-in-out z-50 transform ${
          show ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative p-6">
          {/* Close button */}
          <div onClick={handleShow} className="absolute right-2 top-2">
            <X className="text-2xl text-white w-10 h-10 hover:bg-black/50 transition-colors duration-300 cursor-pointer rounded-full p-1" />
          </div>
          {/* Drawer content */}
          <div className="space-y-8 flex flex-col  mt-12">
            <div className='flex flex-col gap-8 items-center justify-center mb-15'>
              <img src="/profile.jpeg" alt="profile-img" className="aspect-square rounded-full w-[100px] shadow-lg shadow-black/50" />
              <h2 className="text-4xl font-black text-transparent [-webkit-text-stroke:.8px_white] select-none">Veeranjini</h2>
            </div>
            {/* <p className="text-lg text-gray-300">Aspiring Full Stack Developer</p> */}
            
            <div className="flex flex-col gap-6 text-2xl text-white justify-center gap-x-6 ">
              {iconItems.map((icon) => {
                const IconComponent = icon.Icon;
                return (
                  <a href={icon.link} target="_blank" rel="noreferrer" key={icon.id}>
                    <div className={`group flex items-center  gap-2 ${icon.color} transition-colors duration-300 cursor-pointer`}>
                      <IconComponent className='hover:transform hover:-translate-y-2 duration-300 ' />
                      <p>{icon.name}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <a href="#contact" onClick={handleShow}>
              <button className="text-white border px-4 py-2 rounded font-semibold hover:text-black hover:bg-white hover:border-transparent cursor-pointer transition-all duration-300">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

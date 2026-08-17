
const About = () => {
  return (
    <>
      <div id="about" className="max-w-5xl relative mx-4 lg:mx-auto space-y-10 my-10">
        <div className="">
          <h1 className="text-6xl lg:text-8xl uppercase font-black tracking-tight bg-gradient-to-b from-black via-black/50 to-transparent dark:bg-gradient-to-b dark:from-white dark:via-white/30 dark:to-transparent bg-clip-text text-transparent leading-none text-center select-none pointer-events-none font-oswald">About Me</h1>
        </div>
        <p className="tracking-wider text-sm sm:text-base lg:text-xl text-justify">
          I'm <strong className="font-medium underline decoration-[#0a3b0d] dark:decoration-[#0ec21a] decoration-2 underline-offset-2">Veeranjini</strong>, an aspiring Full-Stack Developer passionate about building robust, scalable web applications. Over the past six months, I have specialized in the <strong>MERN stack</strong>, developing hands-on full-stack projects alongside a strong foundation in core Computer Science principles.
        </p>

        <p className="tracking-wider text-sm sm:text-base lg:text-xl text-justify">
          I recently completed intensive full-stack development training at <strong className="text-red-700/80 dark:text-red-400">Innomatics Research Labs</strong> in Hyderabad. Currently, I am expanding my technical toolkit with <strong>TypeScript</strong> and <strong>Next.js</strong> to build production-ready applications.
        </p>

        <p className="tracking-wider text-sm sm:text-base lg:text-xl text-justify">
          I am actively seeking an entry-level <strong className="font-semibold text-gray-900 dark:text-white">Software Developer</strong> role where I can contribute to meaningful projects, collaborate with experienced engineers, and continuously elevate my technical craft.
        </p>
      </div>
    </>
  )
}

export default About
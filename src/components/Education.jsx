import EdAccordian from "./EdAccordian"
import { edcutionDetails } from "../data/myDetails"
const Education = () => {
  return (
    <>
      <section className="relative max-w-5xl mt-20 mb-40 mx-4 lg:mx-auto">
        <div className="translate-y-3.5 lg:translate-y-6 z-0">
          <h1 id="education" className="text-6xl lg:text-8xl uppercase font-black tracking-tight bg-gradient-to-b from-black to-white/95 dark:bg-gradient-to-b dark:from-white dark:via-white/50 dark:to-black bg-clip-text text-transparent leading-none text-center">Education</h1>
        </div>
        <div className="relative z-10 w-full flex flex-col gap-y-8 bg-white/5 dark:bg-black/10 backdrop-blur-lg border border-white/50 py-10 px-4 rounded-lg shadow-lg dark:shadow-white/10  ">
          {
            edcutionDetails.map((ed, i) => (
              <div key={i}>
                <EdAccordian details={ed}/>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Education
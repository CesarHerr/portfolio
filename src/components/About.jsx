import images from "../assets/images";
import TicTacToe from "./TicTacToe";

function About () {
  return (
    <div className="h-screen relative hidden md:inline items-end gap-4 pr-4 xl:pr-10 2xl:pr-0 ml-[30%]
    lg:ml-[20%] xl:ml-[20%] 2xl:ml-[35%] mb-24 overflow-hidden" id="about">
      <h3 className="w-9/12 text-left ml-[25%] text-3xl lg:text-4xl mt-64 text-myBlue">I&apos;m a Full Stack Developer</h3>
      <p className="w-9/12 text-left  ml-[25%] text-xl "> With a background in database administration, and technical
        support. In the last year I spent 1300+ hours studying and working in a remote environment, in pair
        programming, using GitHub, industry-standard git-flow, and daily stand ups to communicate and collaborate
        with international remote developers.</p>
      <div className="w-[210px] h-[260px] opacity-80 2xl:pt-16 absolute right-4">
        <img src={images.post} className="w-[210px] h-[220px] rotate-6 absolute -z-10" />
        <TicTacToe /> 
      </div>
    </div>
  )
}

export default About;
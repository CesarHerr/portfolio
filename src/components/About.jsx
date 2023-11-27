import images from '../assets/images';
import TicTacToe from './TicTacToe';

function About() {
  return (
    <section
      className="h-screen relative hidden items-end gap-2 pr-4 md:inline xl:pr-20
      md:ml-[20%] xl:ml-[30%] mb-24 overflow-hidden"
      id="about"
    >
      <h3 className="w-9/12 text-left ml-[25%] text-3xl lg:text-4xl mt-64 text-myBlue">
        I&apos;m a Full Stack Developer
      </h3>
      <p className="w-9/12 text-left  ml-[25%] text-xl ">
        {' '}
        With a background in database administration, and technical support. In
        the last year I spent 1300+ hours studying and working in a remote
        environment, in pair programming, using GitHub, industry-standard
        git-flow, and daily stand ups to communicate and collaborate with
        international remote developers.
      </p>
      <div className="w-[210px] h-[260px] opacity-80 2xl:pt-16 absolute right-20">
        <img
          src={images.post}
          className="w-[210px] h-[220px] rotate-6 absolute -z-10"
        />
        <TicTacToe />
      </div>
    </section>
  );
}

export default About;

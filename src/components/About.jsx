import images from '../assets/images';
import TicTacToe from './TicTacToe';

function About() {
  return (
    <section
      className="h-screen relative hidden items-end gap-2 pr-4 md:flex flex-col xl:pr-20
      md:ml-[20rem] xl:ml-[25rem] mb-24"
      id="about"
    >
      <h3 className="w-10/12 text-left text-3xl lg:text-4xl mt-[20%] text-myBlue">
        I&apos;m a Full Stack Developer
      </h3>
      <p className="w-10/12 text-left text-xl ">
        {' '}
        With a background in database administration, and technical support. In
        the last year I spent 1300+ hours studying and working in a remote
        environment, in pair programming, using GitHub, industry-standard
        git-flow, and daily stand ups to communicate and collaborate with
        international remote developers.
      </p>
      <div className="w-[210px] h-[260px] opacity-80 2xl:pt-16 absolute bottom-10 lg:bottom-24 right-10">
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

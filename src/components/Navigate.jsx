import x from '../assets/x.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function Navigate() {
  return (
    <section className="flex flex-col items-end fixed mt-16 rightSide">
      <h2 className="text-left text-5xl font-dancing -rotate-12 w-3/4">Hey There.</h2>
      <h2 className="text-left text-5xl font-dancing -rotate-12 mb-16 w-3/4">I&apos;m César.</h2>
      <h3 className="w-full text-right text-3xl mt-10">I&apos;m a Software Developer</h3>
      <p className="pt-10 w-3/4 text-left"> I can help you build a product , feature or website Look through some of my work and 
        experience! If you like what you see and have a project you need coded, 
        don&apos;t hesitate to contact me.</p>
      <nav className="flex flex-col items-center pt-32 leading-8 w-4/5">
        <a href="#computer"> About </a>
        <a href="#projects" className="my-6"> Projects</a>
        <a href="#skills" className="mb-6"> Skills</a>
        <a href="#contactForm"> Contact</a>
      </nav>
      <div className="flex flex-col justify-center gap-4 h-full absolute left-1">
        <a className="c cursor-pointer hover:scale-110" href="https://twitter.com/Cesarherr2" target="_blank" rel="noreferrer"><img className="w-8" src={x} alt="x" /></a>
        <a className="c cursor-pointer hover:scale-110" href="https://www.linkedin.com/in/cesarherr/" target="_blank" rel="noreferrer"><img className="w-8" src={linkedin} alt="linkedin" /></a>
        <a className="c cursor-pointer hover:scale-110" href="https://github.com/CesarHerr" target="_blank" rel="noreferrer"><img className="w-8" src={github} alt="github" /></a>
      </div>
    </section>
  );
}

export default Navigate;

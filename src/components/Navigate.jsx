import { useSelector } from "react-redux";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import images from '../assets/images';

function Navigate() {
  const { onProject, onAbout, onSkills, onContact } = useSelector((state) => state.project);

  return (
    <section className="flex flex-col w-full md:w-[20%] xl:w-[24%] items-start justify-around md:fixed h-screen bg-myYellow min-w-[330px] z-30">
      <header className="flex justify-start items-end ml-10 md:ml-14 w-full max-w-[400px] relative top-2">
        <div className="min-w-[350px] relative z-30 mb-10 lg:mb-0">
          <h1 className="text-left text-5xl xl:text-6xl 2xl:text-7xl font-dancing font-bold -rotate-12 w-full animation">Hey There.</h1>
          <h2 className="text-left text-5xl xl:text-6xl 2xl:text-7xl font-dancing font-bold -rotate-12 mb-14 w-full">I&apos;m César.</h2>
        </div>
        <div className="w-36 h-36 lg:w-28 lg:h-28 2xl:w-48 2xl:h-48 absolute top-32 lg:top-20 right-24 md:right-14 2xl:relative 
          2xl:right-32 2xl:top-32  lg:-right-2 z-0 ">
          <img src={images.myAvatar} alt="avatar" className=" w-36 h-36 lg:w-28 lg:h-28 2xl:w-48 2xl:h-48 absolute rounded-full bg-myPurple z-0 max-w-[162px] lg:max-w-[142px] 2xl:max-w-[232px]"/>
          <div className="w-36 h-36 lg:w-28 lg:h-28 2xl:w-48 2xl:h-48 absolute rounded-full border-4 border-myYellow z-10"></div>
        </div>
      </header>
      <div>
        <h3 className="w-full text-left text-2xl md:text-3xl mt-5 ml-10 md:ml-14 text-myBlue">I&apos;m a Full Stack Developer</h3>
        <p className="pt-5 w-10/12 md:w-9/12 text-left ml-10 md:ml-14 text-lg"> I can help you build a product , feature or website Look through some of my work and 
        experience! If you like what you see and have a project you need coded, 
        don&apos;t hesitate to contact me.</p>
        <nav className="flex items-center w-full bg-myPurple md:bg-transparent md:bg-none justify-around md:flex-col fixed md:relative md:items-start 
        top-0 md:pt-5 leading-8 md:w-4/5 md:ml-14 text-xl z-40">
          <a href="/" className={`font-bold ${onAbout ? 'animatedBack active' : 'animatedOut reverse'}`}> Me </a>
          <a href="#projects" className={`font-bold md:my-2 ${onProject ? 'animatedBack active' : 'animatedOut reverse'}`}> Projects</a>
          <a href="#skills" className={`font-bold md:my-2 ${onSkills ? 'animatedBack active' : 'animatedOut reverse'}`}> Skills</a>
          <a href="#contactForm" className={`font-bold ${onContact ? 'animatedBack active' : 'animatedOut reverse'}`}> Contact</a>
          <a href="#playGround" className="text-sm md:hidden">🐱</a>
        </nav>
      </div>
      <aside className="flex md:flex-col md:justify-center gap-4 md:h-full p-1 fixed bottom-2 right-2 md:right-auto bg-myGray md:bg-transparent rounded">
        <a className="cursor-pointer hover:scale-110" href="https://twitter.com/Cesarherr2" target="_blank" rel="noreferrer" aria-label="go to my twitter account">
          <RiTwitterXLine className=" hover:text-purple-800 w-5 md:w-10 md:text-myGray text-white"/>
        </a>
        <a className="cursor-pointer hover:scale-110" href="https://www.linkedin.com/in/cesarherr/" target="_blank" rel="noreferrer" aria-label="go to my linkedin account">
          <FaLinkedinIn className=" hover:text-purple-800 w-5 md:w-10 md:text-myGray text-white" />
        </a>
        <a className="cursor-pointer hover:scale-110" href="https://github.com/CesarHerr" target="_blank" rel="noreferrer" aria-label="go to my github account">
          <FiGithub className=" hover:text-purple-800 w-5 md:w-10 md:text-myGray text-white" />
        </a>
      </aside>
    </section>
  );
}

export default Navigate;

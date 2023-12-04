import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import images from '../assets/images';
import { setTheme } from '../redux/projectSlice';

function Navigate() {
  const dispatch = useDispatch();
  const { onProject, onAbout, onSkills, onContact, theme } = useSelector(
    (state) => state.project
  );

  const handleClick = () => {
    if (theme === 'dark') {
      localStorage.theme = 'light';
      dispatch(setTheme('light'));
    } else {
      dispatch(setTheme('dark'));
      localStorage.theme = 'dark';
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  if ('theme' in localStorage) {
    localStorage.theme = theme;
  }

  return (
    <aside
      className="flex flex-col w-full md:w-[20rem] xl:w-[25rem] items-start justify-center gap-5 
      md:fixed h-screen bg-myYellow z-10 relative md:mx-auto dark:bg-slate-950 dark:text-white"
    >
      <header
        className="flex justify-center items-center max-w-[400px] top-2 md:flex-col md:items-end 
      gap-0 md:ml-10 w-full sm:w-auto"
      >
        <button
          type="button"
          aria-label="dark mode"
          className="top-10 right-5 sm:right-10 text-4xl dark:hidden absolute xl:fixed"
          onClick={() => {
            handleClick();
          }}
        >
          🌔
        </button>
        <button
          type="button"
          aria-label="dark mode"
          className="top-10 right-5 sm:right-10 text-4xl hidden dark:inline absolute xl:fixed"
          onClick={() => {
            handleClick();
          }}
        >
          😎
        </button>
        <div className="min-w-[250px] relative z-20">
          <h1 className="text-left text-5xl xl:text-6xl font-dancing font-bold -rotate-12 w-full animation">
            Hey There.
          </h1>
          <h2 className="text-left text-5xl xl:text-6xl font-dancing font-bold -rotate-12 w-full">
            I&apos;m César.
          </h2>
        </div>
        <img
          src={images.myAvatar}
          alt="avatar"
          className="w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-myGray
          bg-myPurple z-0 relative right-8 md:right-auto"
        />
      </header>
      <section>
        <h3 className="text-left text-2xl pt-5 w-10/12 ml-5 text-myBlue md:hidden dark:text-myLightBlue">
          I&apos;m a Full Stack Developer
        </h3>
        <p className="w-10/12 text-left text-md ml-5 md:hidden">
          {' '}
          With a background in database administration, and technical support.
          In the last year I spent 1300+ hours studying and working in a remote
          environment, in pair programming, using GitHub, industry-standard
          git-flow, and daily stand ups to communicate and collaborate with
          international remote developers.
        </p>
        <p className="hidden md:block w-10/12 md:w-9/12 text-left ml-10 md:ml-14 text-lg">
          {' '}
          I can help you build a product , feature or website. Look through some
          of my work and experience!{' '}
        </p>

        <nav
          className="flex items-center fixed w-full bg-myPurple justify-around top-0 text-xl z-40 leading-8 
          dark:bg-purple-950 dark:md:bg-transparent md:bg-transparent md:bg-none md:flex-col md:ml-14 md:items-start md:relative
          md:pt-5 md:w-4/5"
        >
          <a
            href="/portfolio_1.2/"
            className={`font-bold md:my-2 ${
              theme === 'light' && onAbout
                ? 'animatedBack active'
                : theme === 'light' && !onAbout
                ? 'animatedOut reverse'
                : theme === 'dark' && onAbout
                ? 'animatedBack2 active'
                : theme === 'dark' && !onAbout
                ? 'animatedOut2 reverse'
                : ''
            }`}
          >
            <hr
              className={`hidden md:inline border-1 border-myGray px-2  mx-2 relative top-3 dark:border-white ${
                onAbout ? '' : ''
              }`}
            />{' '}
            Me{' '}
          </a>
          <a
            href="#projects"
            className={`font-bold md:my-2 ${
              theme === 'light' && onProject
                ? 'animatedBack active'
                : theme === 'light' && !onProject
                ? 'animatedOut reverse'
                : theme === 'dark' && onProject
                ? 'animatedBack2 active'
                : theme === 'dark' && !onProject
                ? 'animatedOut2 reverse'
                : ''
            }`}
          >
            <hr className="hidden md:inline border-1 border-myGray px-2  mx-2 relative top-3 dark:border-white" />{' '}
            Projects
          </a>
          <a
            href="#skills"
            className={`font-bold md:my-2 ${
              theme === 'light' && onSkills
                ? 'animatedBack active'
                : theme === 'light' && !onSkills
                ? 'animatedOut reverse'
                : theme === 'dark' && onSkills
                ? 'animatedBack2 active'
                : theme === 'dark' && !onSkills
                ? 'animatedOut2 reverse'
                : ''
            }`}
          >
            <hr className="hidden md:inline border-1 border-myGray px-2  mx-2 relative top-3 dark:border-white" />{' '}
            Skills
          </a>
          <a
            href="#contactForm"
            className={`font-bold md:my-2 ${
              theme === 'light' && onContact
                ? 'animatedBack active'
                : theme === 'light' && !onContact
                ? 'animatedOut reverse'
                : theme === 'dark' && onContact
                ? 'animatedBack2 active'
                : theme === 'dark' && !onContact
                ? 'animatedOut2 reverse'
                : ''
            }`}
          >
            <hr className="hidden md:inline border-1 border-myGray px-2  mx-2 relative top-3 dark:border-white" />{' '}
            Contact
          </a>
        </nav>
      </section>

      <footer className="flex md:w-full md:justify-center gap-4 p-1 md:py-2 fixed md:absolute bottom-2 right-6 md:bottom-0 md:right-auto bg-myGray rounded dark:bg-black dark:border dark:border-white"
      >
        <a
          className="cursor-pointer hover:scale-110"
          href="https://twitter.com/Cesarherr2"
          target="_blank"
          rel="noreferrer"
          aria-label="go to my twitter account"
        >
          <RiTwitterXLine className=" hover:text-purple-800 w-5 md:w-10 text-white" />
        </a>
        <a
          className="cursor-pointer hover:scale-110"
          href="https://www.linkedin.com/in/cesarherr/"
          target="_blank"
          rel="noreferrer"
          aria-label="go to my linkedin account"
        >
          <FaLinkedinIn className=" hover:text-purple-800 w-5 md:w-10 text-white" />
        </a>
        <a
          className="cursor-pointer hover:scale-110"
          href="https://github.com/CesarHerr"
          target="_blank"
          rel="noreferrer"
          aria-label="go to my github account"
        >
          <FiGithub className=" hover:text-purple-800 w-5 md:w-10 text-white" />
        </a>
        <div className="absolute w-full z-50 right-1">
          <img
            src={images.cat2}
            alt="cat"
            className="absolute -right-1 bottom-0 inline dark:hidden"
          />
          <img
            src={images.tail}
            alt="cat tail"
            className="absolute -right-[22.5px] -bottom-[70px] tail inline dark:hidden"
          />
          <img
            src={images.catBlack}
            alt="cat"
            className="absolute -right-1 bottom-0 hidden dark:inline"
          />
          <img
            src={images.tailBlack}
            alt="cat tail"
            className="absolute -right-[54.5px] -bottom-[70px] tail hidden dark:inline"
          />
        </div>
      </footer>
    </aside>
  );
}

export default Navigate;

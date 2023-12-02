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

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <aside
      className="flex flex-col w-full md:w-[20rem] xl:w-[25rem] items-start justify-center gap-5 
      md:fixed h-screen bg-myYellow z-10 relative overflow-hidden md:mx-auto dark:bg-slate-950 dark:text-white"
    >
      <header
        className="flex justify-center items-center ml-5 max-w-[400px] top-2 md:flex-col md:items-end 
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
          className="flex items-center w-full bg-myPurple dark:bg-purple-950 dark:md:bg-transparent md:bg-transparent md:bg-none justify-around md:flex-col fixed md:relative md:items-start 
          top-0 md:pt-5 leading-8 md:w-4/5 md:ml-14 text-xl z-40 overflow-hidden"
        >
          <a
            href="/portfolio_1.2/"
            className={`font-bold md:my-2 ${
              onAbout && theme === 'light'
                ? 'animatedBack active'
                : onAbout && theme === 'dark'
                ? 'animatedBack2 active'
                : 'animatedOut2 reverse'
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
              onProject && theme === 'light'
                ? 'animatedBack active'
                : onProject && theme === 'dark'
                ? 'animatedBack2 active'
                : 'animatedOut2 reverse'
            }`}
          >
            <hr className="hidden md:inline border-1 border-myGray px-2  mx-2 relative top-3 dark:border-white" />{' '}
            Projects
          </a>
          <a
            href="#skills"
            className={`font-bold md:my-2 ${
              onSkills && theme === 'light'
                ? 'animatedBack active'
                : onSkills && theme === 'dark'
                ? 'animatedBack2 active'
                : 'animatedOut2 reverse'
            }`}
          >
            <hr className="hidden md:inline border-1 border-myGray px-2  mx-2 relative top-3 dark:border-white" />{' '}
            Skills
          </a>
          <a
            href="#contactForm"
            className={`font-bold md:my-2 ${
              onContact && theme === 'light'
                ? 'animatedBack active'
                : onContact && theme === 'dark'
                ? 'animatedBack2 active'
                : 'animatedOut2 reverse'
            }`}
          >
            <hr className="hidden md:inline border-1 border-myGray px-2  mx-2 relative top-3 dark:border-white" />{' '}
            Contact
          </a>
        </nav>
      </section>
      <footer className="flex md:w-full md:justify-center gap-4 p-1 md:py-2 fixed md:absolute bottom-2 right-2 md:bottom-0 md:right-auto bg-myGray rounded dark:bg-black dark:border dark:border-white">
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
          href="https://cesarherr.github.io/portfolio_1.2/"
          target="_blank"
          rel="noreferrer"
          aria-label="go to my github account"
        >
          <FiGithub className=" hover:text-purple-800 w-5 md:w-10 text-white" />
        </a>
      </footer>
    </aside>
  );
}

export default Navigate;

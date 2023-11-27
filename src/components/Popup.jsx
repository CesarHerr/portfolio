import { useSelector, useDispatch } from 'react-redux';
import img from '../assets/images';
import { GrDeploy } from 'react-icons/gr';
import { setProject } from '../redux/projectSlice';
import { FiGithub } from 'react-icons/fi';

function Popup() {
  const { project } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const allProjects = [
    {
      image: img.rfad2,
      name: 'Rent for a day',
      description:
        'This is a reservation-based application to rent a property/accommodation for a day.',
      tech: [
        'Ruby on Rails',
        'Devise',
        'RSpec',
        'Swagger',
        'postgreSQL',
        'React-redux',
        'JavaScript',
        'Bootstrap',
        'HTML',
      ],
      live: 'https://cesarherr.github.io/metrics_webapp_botw/',
      source: 'https://github.com/CesarHerr/metrics_webapp_botw',
    },
    {
      image: img.paids,
      name: 'Paid Ups',
      description:
        'This application is designed to help you manage your finances and expenses, assisting in maintaining clear financial organization for personal, family, or work-related finances.',
      tech: [
        'Ruby on Rails',
        'Devise',
        'RSpec',
        'postgreSQL',
        'Tailwind CSS',
        'HTML',
      ],
      live: 'https://paid-up.up.railway.app/',
      source: 'https://github.com/CesarHerr/budget_app',
    },
    {
      image: img.recipe,
      name: 'Recipe App',
      description:
        'The Recipe app keeps track of all your recipes, ingredients, and inventory.',
      tech: [
        'Ruby on Rails',
        'Devise',
        'RSpec',
        'postgreSQL',
        'Bootstrap',
        'HTML',
      ],
      live: 'https://the-best-recipe-app.up.railway.app/',
      source: 'https://github.com/CesarHerr/Recipe_App',
    },
    {
      image: img.zelda,
      name: 'Bowtf Encyclopedia',
      description:
        'This web application is a Single Page Application (SPA) serving as an encyclopedia for all the interactive in-game items in the world of Hyrule.',
      tech: ['JavaScript', 'React-redux', 'CSS', 'HTML', 'SASS'],
      live: 'https://cesarherr.github.io/metrics_webapp_botw/',
      source: 'https://github.com/CesarHerr/metrics_webapp_botw',
    },
    {
      image: img.space,
      name: 'Space Travelers Hub',
      description:
        'The space travelers hub is a web application that allows users to book rockets and join space missions.',
      tech: ['JavaScript', 'React-redux', 'Jest', 'CSS', 'HTML'],
      live: 'space-travelers-z8vp.onrender.com/',
      source: 'https://github.com/CesarHerr/Space_Travelers',
    },
    {
      image: img.hiking,
      name: 'Hiking and Adventure Sports',
      description: 'This is a web abpot Adventure Sports experiences',
      tech: ['JavaScript', 'SASS', 'HTML'],
      live: 'cesarherr.github.io/CapstoneModule1',
      source: 'https://github.com/CesarHerr/Recipe_App',
    },
  ];

  const handleClick = () => {
    dispatch(setProject(null));
  };

  return (
    <>
      {allProjects[project] && (
        <section className="fixed w-full h-full grid place-items-center bg-myGreen z-50 left-0 overflow-hidden">
          <div className="popup w-11/12 md:w-9/12 h-[85%] md:h-[80%] xl:h-[75%] bg-myYellow flex flex-col rounded-xl md:items-center shadow-myShadow">
            <h2 className="pt-10 lg:py-3 hidden lg:inline xl:py-7 text-3xl xl:text-5xl font-dancing font-bold">
              {allProjects[project].name}
            </h2>
            <button
              type="button"
              className="absolute right-2 top-2 xl:right-10 xl:top-6 text-2xl xl:text-5xl  hover:scale-125 transition duration-300"
              onClick={() => {
                handleClick();
              }}
            >
              X
            </button>
            <div className="md:w-full">
              <h2 className="pt-10 lg:py-3 lg:hidden  xl:py-7 text-3xl xl:text-5xl font-dancing font-bold">
                {allProjects[project].name}
              </h2>
              <hr className="border-2 border-myGreen my-2" />
              <ul className="flex flex-wrap gap-1 md:gap-1 xl:gap-2 p-5 w-full md:w-11/12 xl:w-10/12 mx-auto">
                {allProjects[project].tech.map((tech, index) => (
                  <li
                    key={index}
                    className={
                      tech
                        ? 'font-extrabold text-white leading-4 md:leading-4 md:p-2 border-2 border-myBlue bg-myPurple rounded p-1 text-sm'
                        : 'noDisplay'
                    }
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <img
                src={allProjects[project].image}
                alt="algo"
                className="w-10/12 mx-auto lg:hidden mb-4 md:mb-1 lg:mt-2 border-2 
            border-myGray rounded shadow-myShadow"
              />
            </div>

            <div className="w-11/12 lg:w-[95%] flex flex-col lg:flex-row justify-around lg:gap-10 items-center lg:items-start  mx-auto md:h-5/6 lg:h-full">
              <img
                src={allProjects[project].image}
                alt="algo"
                className="w-7/12 hidden lg:inline lg:max-w-[380px] xl:max-w-[600px] mx-auto
            mb-4 lg:mt-2 border-2 border-myGray rounded shadow-myShadow"
              />
              <p className="lg:w-4/12 xl:w-5/12 text-left md:text-lg lg:min-w-[300px]">
                {allProjects[project].description}
              </p>
              <div
                className="absolute bottom-3 md:relative lg:absolute lg:bottom-8 md:bottom-auto flex justify-between xl:justify-end
              w-8/12 xl:w-11/12 mx-auto min-w-[250px] xl:gap-6"
              >
                <a
                  href={allProjects[project].live}
                  target="_blank"
                  className="bg-myYellow p-2 w-3/12 max-w-[200px] font-bold active:bg-myGray
              active:text-white hover:bg-myHoverButton shadow-myShadow border border-myGray hover:translate-x-2 hover:translate-y-2
              hover:text-myBlue flex justify-center items-center group hover:shadow-none transition-all min-w-[120px] xl:w-2/12"
                  rel="noreferrer"
                >
                  See live
                  <GrDeploy className="w-4 inline group-hover:translate-x-2 group-hover:scale-125 translate-x-2 transition-all" />
                </a>

                <a
                  href={allProjects[project].source}
                  target="_blank"
                  className="bg-myYellow p-1 w-4/12 max-w-[200px] font-bold active:bg-myGray
              active:text-white hover:bg-myHoverButton shadow-myShadow border border-myGray hover:translate-x-2 hover:translate-y-2
              hover:text-myBlue flex justify-center items-center group hover:shadow-none transition-all min-w-[120px] xl:w-2/12"
                  rel="noreferrer"
                >
                  See Source
                  <FiGithub className="w-4 inline group-hover:translate-x-2 group-hover:scale-125 translate-x-2 transition" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Popup;

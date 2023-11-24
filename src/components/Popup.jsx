import { useSelector, useDispatch } from 'react-redux';
import zelda from '../assets/zelda.png';
import paid from '../assets/paids.png';
import recipe from '../assets/recipe.png';
import space from '../assets/space.png';
import hiking from '../assets/hiking.png';
import rent from '../assets/rfad2.png';
import { GrDeploy } from "react-icons/gr";
import { setProject } from '../redux/projectSlice';
import { FiGithub } from "react-icons/fi";


function Popup(){
  const { project } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  const allProjects = [{
    image: rent,
    name: 'Rent for a day',
    description: 'This is a reservation-based application to rent a property/accommodation for a day.',
    tech: ['Ruby on Rails', 'Devise', 'RSpec', 'Swagger', 'postgreSQL', 'React-redux', 'JavaScript', 'Bootstrap', 'HTML'],
    live: 'https://cesarherr.github.io/metrics_webapp_botw/',
    source: 'https://github.com/CesarHerr/metrics_webapp_botw'
  },
  {
    image: paid,
    name: 'Paid Ups',
    description: 'This application is designed to help you manage your finances and expenses, assisting in maintaining clear financial organization for personal, family, or work-related finances.',
    tech: ['Ruby on Rails', 'Devise', 'RSpec', 'postgreSQL', 'Tailwind CSS', 'HTML'],
    live: 'https://paid-up.up.railway.app/',
    source: 'https://github.com/CesarHerr/budget_app'
  },
  {
    image: recipe,
    name: 'Recipe App',
    description: 'The Recipe app keeps track of all your recipes, ingredients, and inventory.', 
    tech: ['Ruby on Rails', 'Devise', 'RSpec', 'postgreSQL', 'Bootstrap', 'HTML'],
    live: 'https://the-best-recipe-app.up.railway.app/',
    source: 'https://github.com/CesarHerr/Recipe_App'
  },
  {
    image: zelda,
    name: 'Breath of the wild Encyclopedia',
    description: 'This web application is a Single Page Application (SPA) serving as an encyclopedia for all the interactive in-game items in the world of Hyrule.',
    tech: ['JavaScript', 'React-redux', 'CSS', 'HTML', 'SASS'],
    live: 'https://cesarherr.github.io/metrics_webapp_botw/',
    source: 'https://github.com/CesarHerr/metrics_webapp_botw'
  },
  {
    image: space,
    name: 'Space Travelers Hub',
    description: 'The space travelers hub is a web application that allows users to book rockets and join space missions.',
    tech: ['JavaScript', 'React-redux', 'Jest', 'CSS', 'HTML'],
    live: 'space-travelers-z8vp.onrender.com/',
    source: 'https://github.com/CesarHerr/Space_Travelers'
  },
  {
    image: hiking,
    name: 'Hiking and Adventure Sports',
    description: 'This is a web abpot Adventure Sports experiences', 
    tech: ['JavaScript', 'SASS', 'HTML'],
    live: 'cesarherr.github.io/CapstoneModule1',
    source: 'https://github.com/CesarHerr/Recipe_App'
  },
];

const handleClick = () => {
  dispatch(setProject(null));
};

  return (
    <section className="popupCase fixed w-full h-full grid place-items-center bg-myGreen z-1 left-0">   
      <div className="popup w-10/12 h-5/6 bg-myYellow flex rounded-xl relative shadow-myShadow">
        <button type="button" className="absolute right-10 top-6 text-5xl hover:scale-125 transition duration-300"
        onClick={() => { handleClick()}}>X</button>
        <div className="w-4/6">
          <h2 className="py-10 text-5xl font-dancing font-bold">{allProjects[project].name}</h2>
          <img src={allProjects[project].image} alt="algo" className="w-11/12 mx-auto mt-10 border-2 border-myGray rounded shadow-myShadow" />          
          <ul className="flex justify-center flex-wrap gap-5 p-5">
          {allProjects[project].tech.map( (tech, index) => (
            <li key={index} className={tech ? 'font-bold border-2 border-myBlue bg-myPurple rounded p-2' : 'noDisplay'}>{tech}</li>
            ))}
          </ul>
        </div> 
        <div className="w-3/6 flex flex-col justify-around">          
          <p className="w-10/12 text-left text-xl">{allProjects[project].description}</p>
          <div className="flex justify-between w-8/12 mx-auto min-w-[230px]">
            <a href={allProjects[project].live} target="_blank" className="bg-myYellow p-2 w-3/12 font-bold active:bg-myGray active:text-white
              shadow-myShadow border border-myGray hover:translate-x-2 hover:translate-y-2 
              hover:shadow-none transition-all min-w-[100px]" type="button">See live <GrDeploy className="w-4 inline"/></a>

            <a href={allProjects[project].source} target="_blank" className="bg-myYellow p-1 w-4/12 font-bold active:bg-myGray active:text-white
              shadow-myShadow border border-myGray hover:translate-x-2 hover:translate-y-2 
              hover:shadow-none transition-all min-w-[120px]">See Source <FiGithub className="w-4 inline"/></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popup;
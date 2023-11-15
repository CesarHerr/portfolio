import carpet from '../assets/carpet.png';

function Projects() {
  return(
    <section className="flex flex-col justify-end items-center h-screen
     gap-4 leftSide relative font-bold bg-green-300" 
    id="computer">
      <h2 className="text-6xl absolute top-2" id="projects">Projects</h2>
        <div className="flex justify-center items-center w-full gap-10">
          <img src={carpet} className="w-3/12" />
          <p className="w-5/12 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="flex justify-center items-center w-full gap-10">
        <p className="w-5/12 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <img src={carpet} className="w-3/12" />
        </div>
        <div className="flex justify-center items-center w-full gap-10">
          <img src={carpet} className="w-3/12" />
          <p className="w-5/12 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="flex justify-center items-center w-full gap-10">
        <p className="w-5/12 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <img src={carpet} className="w-3/12" />
        </div>
    </section>
  );
}

export default Projects;
import { useEffect, useMemo } from 'react';
import { setProject } from '../redux/projectSlice';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import images from '../assets/images';
import { setOnProject } from '../redux/projectSlice';

function Projects() {
  const { ref: refA, inView: inViewA } = useInView();
  const { ref: refB, inView: inViewB } = useInView();
  const { ref: refC, inView: inViewC } = useInView();
  const { ref: refD, inView: inViewD } = useInView();
  const { ref: refE, inView: inViewE } = useInView();
  const { ref: refF, inView: inViewF } = useInView();
  const { ref: refProjectTitle, inView: inViewProjectTitle } = useInView();
  const { ref: refProject, inView: inViewProject } = useInView();
  const { ref: refProjectB, inView: inViewProjectB } = useInView();
  const { ref: refProjectC, inView: inViewProjectC } = useInView();
  const dispatch = useDispatch();
  const inViews = useMemo(
    () => [inViewProject, inViewProjectB, inViewProjectC],
    [inViewProject, inViewProjectB, inViewProjectC]
  );

  const handleClick = (id) => {
    dispatch(setProject(id));
  };

  useEffect(() => {
    const inViewAnyProject = inViews.some((inView) => inView);
    dispatch(setOnProject(inViewAnyProject));
  }, [dispatch, inViews]);

  return (
    <section
      className="flex flex-col gap-8 items-center lg:w-[65%] md:w-[55%]
      relative pb-28 md:ml-[20%] xl:ml-[30%]  overflow-hidden "
      id="projects"
    >
      <span ref={refProjectTitle}>
        <h2
          className={`container text-center my-10 md:my-14 text-4xl md:text-4xl font-bold ${
            inViewProjectTitle ? 'titleAnimation' : 'hidden'
          }`}
        >
          Projects
        </h2>
      </span>
      <div>
        <div
          ref={refA}
          className="flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center w-full gap-10 mb-24 md:w-10/12 mx-auto md:gap-0 lg:mb-26"
        >
          <div
            ref={refProject}
            className={`${
              inViewA
                ? 'moveLeft  w-10/12 max-w-[300px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(0);
            }}
          >
            <img
              src={images.rfad2}
              alt="rent for a day"
              className="w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow"
            />
            <img
              src={images.carpet}
              alt="carpet"
              className="w-full absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-500"
            />
            <p className="group-hover:animate-bounce text-myBlue mt-7 md:mt-12">
              Click for more 👆
            </p>
          </div>
          <div
            className={`${
              inViewA ? 'moveRight flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}
          >
            <p className="text-3xl xl:text-4xl text-left mb-3 font-dancing text-myBlue">
              Rent for a day
            </p>
            <p className="md:text-xl text-left">
              This is a reservation-based application to rent a
              property/accommodation for a day.
            </p>
          </div>
        </div>

        <div
          ref={refB}
          className="flex flex-col lg:flex-row justify-center lg:justify-around items-center w-full gap-10 mb-24 md:w-10/12 mx-auto md:gap-0 lg:mb-26"
        >
          <div
            className={`${
              inViewB ? 'moveLeft flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}
          >
            <p className="text-3xl xl:text-4xl text-left lg:text-right mb-3 font-dancing text-myBlue">
              Paid Ups
            </p>
            <p className="md:text-xl text-left lg:text-right">
              This application is designed to help you manage your finances and
              expenses.
            </p>
          </div>
          <div
            ref={refProjectC}
            className={`${
              inViewB
                ? 'moveRight  w-10/12 max-w-[450px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(1);
            }}
          >
            <img
              src={images.paids}
              alt="paid ups"
              className="w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow"
            />
            <p className="opacity-0 group-hover:animate-bounce group-hover:opacity-100 text-myBlue mt-7 xl:mt-10">
              Click for more 👆
            </p>
            <img
              src={images.carpet}
              alt="carpet"
              className="w-full absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300"
            />
          </div>
        </div>

        <div
          ref={refC}
          className="flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center w-full gap-10 mb-24 md:w-10/12 mx-auto md:gap-0 lg:mb-26"
        >
          <div
            className={`${
              inViewC
                ? 'moveLeft  w-10/12 max-w-[450px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(2);
            }}
          >
            <img
              src={images.recipe}
              alt="recipe app"
              className="w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow"
            />
            <p className="opacity-0 group-hover:animate-bounce group-hover:opacity-100 text-myBlue mt-7 xl:mt-10">
              Click for more 👆
            </p>
            <img
              src={images.carpet}
              alt="carpet"
              className="w-full absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300"
            />
          </div>
          <div
            className={`${
              inViewC ? 'moveRight flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}
          >
            <p className="text-3xl xl:text-4xl text-left mb-3 font-dancing text-myBlue">
              Recipe App
            </p>
            <p className="md:text-xl text-left">
              The Recipe app keeps track of all your recipes, ingredients, and
              inventory.
            </p>
          </div>
        </div>

        <div
          ref={refD}
          className="flex flex-col lg:flex-row justify-center lg:justify-around items-center w-full gap-10 mb-24 md:w-10/12 mx-auto md:gap-0 lg:mb-26"
        >
          <div
            className={`${
              inViewD ? 'moveLeft flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}
          >
            <p className="text-3xl xl:text-4xl text-left lg:text-right mb-3 font-dancing text-myBlue">
              Botw Encyclopedia
            </p>
            <p className="md:text-xl text-left lg:text-right">
              This is a SPA serving as an encyclopedia for all the interactive
              in-game items in the world of Hyrule.
            </p>
          </div>
          <div
            className={`${
              inViewD
                ? 'moveRight  w-10/12 max-w-[450px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(3);
            }}
          >
            <img
              src={images.zelda}
              alt="bow encyclopedia"
              className="w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow"
            />
            <p className="opacity-0 group-hover:animate-bounce group-hover:opacity-100 text-myBlue mt-7 xl:mt-10">
              Click for more 👆
            </p>
            <img
              src={images.carpet}
              alt="carpet"
              className="w-full absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300"
            />
          </div>
        </div>

        <div
          ref={refE}
          className="flex flex-col-reverse lg:flex-row justify-center lg:justify-around items-center w-full gap-10 mb-24 md:w-10/12 mx-auto md:gap-0 lg:mb-26"
        >
          <div
            ref={refProjectB}
            className={`${
              inViewE
                ? 'moveLeft  w-10/12 max-w-[450px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(4);
            }}
          >
            <img
              src={images.space}
              alt="space web"
              className="w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow"
            />
            <p className="opacity-0 group-hover:animate-bounce group-hover:opacity-100 text-myBlue mt-7 xl:mt-10">
              Click for more 👆
            </p>
            <img
              src={images.carpet}
              alt="carpet"
              className="w-full absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300"
            />
          </div>
          <div
            className={`${
              inViewE ? 'moveRight flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}
          >
            <p className="text-3xl xl:text-4xl text-left mb-3 font-dancing text-myBlue">
              Space Traveler&apos;s Hub
            </p>
            <p className="md:text-xl text-left">
              This app is a Web application for a company that provides
              commercial and scientific space travel services.
            </p>
          </div>
        </div>

        <div
          ref={refF}
          className="flex flex-col lg:flex-row justify-center lg:justify-around items-center w-full gap-10 mb-24 md:w-10/12 mx-auto md:gap-0 lg:mb-26"
        >
          <div
            className={`${
              inViewF ? 'moveLeft flex flex-col w-10/12 lg:w-5/12' : 'hidden'
            }`}
          >
            <p className="text-3xl xl:text-4xl text-left lg:text-right mb-3 font-dancing text-myBlue">
              Hiking and Adventure Sports
            </p>
            <p className="md:text-xl text-left lg:text-right">
              This is a web about Adventure Sports experiences.
            </p>
          </div>
          <div
            className={`${
              inViewF
                ? 'moveRight  w-10/12 max-w-[450px] lg:w-5/12 relative group cursor-pointer'
                : 'hidden'
            }`}
            onClick={() => {
              handleClick(5);
            }}
          >
            <img
              src={images.hiking}
              alt="adventure sports web"
              className="w-11/12 rounded h-fit group-hover:scale-110  lg:group-hover:scale-125 transition-all duration-400 group-hover:shadow-myShadow"
            />
            <p className="opacity-0 group-hover:animate-bounce group-hover:opacity-100 text-myBlue mt-7 xl:mt-10">
              Click for more 👆
            </p>
            <img
              src={images.carpet}
              alt="carpet"
              className="w-full absolute top-0 opacity-100 group-hover:opacity-0 hover:translate-y-10 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

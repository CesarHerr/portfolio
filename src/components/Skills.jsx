import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import Language from './Language';
import Frameworks from './Frameworks';
import { setOnSkills } from '../redux/projectSlice';

function Skills() {
  const dispatch = useDispatch();
  const { ref, inView } = useInView();

  useEffect(() => {
    dispatch(setOnSkills(inView));
  }, [inView, dispatch]);

  return (
    <section
      className="h-screen md:ml-[20rem] xl:ml-[25rem] bg-myYellow md:bg-green-300"
      id="skills"
    >
      <h2
        ref={ref}
        className={`text-4xl md:text-5xl font-bold pb-28 mt-14 ${
          inView ? 'titleAnimation' : 'opacity-0'
        }`}
      >
        Tech Skills
      </h2>
      <div className="grid place-content-center">
        <div className="grid h-96">
          <Language />
          <Frameworks />
        </div>
      </div>
    </section>
  );
}

export default Skills;

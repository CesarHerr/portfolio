import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import { setOnContact } from "../redux/projectSlice";

function ContactForm() {
  const { ref, inView } = useInView();
  const { ref: refContact, inView: inViewContact } = useInView();
  const { ref: refContactName, inView: inViewContactName } = useInView();
  const { ref: refContactEmail, inView: inViewContactEmail } = useInView();
  const { ref: refContactMessage, inView: inViewContactMessage } = useInView();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOnContact(inViewContact));
  }, [inViewContact, dispatch]);

  return (
    <section className="grid  h-screen leftSide md:ml-[43%] lg:ml-[40%] xl:ml-[35%] 2xl:ml-[45%]" id="contactForm">
      <h2 ref={ref} className={`text-4xl md:text-6xl font-bold mt-14 ${inView ? 'titleAnimation' : ''}`}>Contact</h2>

      <form ref={refContact} className="w-10/12 max-w-md mx-auto" action="https://formspree.io/f/myyanyge" method="POST" target="_blank">

        <div className={`relative z-0 w-full mb-10 group ${inViewContactName ? 'moveLeft' : ''}`} ref={refContactName}>
          <input type="text" name="floating_name" className="block py-2.5 px-0 w-full text-lg text-myGray pl-2
          bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-myPurple peer" placeholder=" " required />
          
          <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-myGray dark:text-gray-400 duration-300 
          transform -translate-y-9 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
          peer-focus:text-blue-600 peer-focus:dark:text-myPurple peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-9">Name </label>
        </div>

        <div className={`relative z-0 w-full mb-5 group ${inViewContactEmail ? 'moveRight' : ''}`} ref={refContactEmail}>
          <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-lg text-myGray pl-2
          bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-myPurple peer" placeholder=" " required />
          
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-myGray dark:text-gray-400 duration-300
          transform -translate-y-9 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto
          peer-focus:text-blue-600 peer-focus:dark:text-myPurple peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-9">Email address</label>
        </div>
        
        <div ref={refContactMessage} className="">
          <textarea rows="4" className={`block p-2.5 w-full text-lg text-myGray bg-myYellow rounded-lg border
          border-gray-300 focus:ring-blue-500 focus:border-blue-500 ${inViewContactMessage ? 'moveBottom' : 'opacity-0'}`}
          placeholder="Leave a comment..." aria-label="write me"></textarea>

        <button className={`bg-myYellow p-2 w-2/4 font-bold active:bg-myGray active:text-white shadow-myShadow 
          border border-myGray hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all mt-14
          ${inViewContactMessage ? 'moveBottom' : 'opacity-0'}`}>
        Submit</button>
        </div>

      </form>
    </section>
  );
}

export default ContactForm;
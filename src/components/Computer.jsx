import zed from '../assets/zCat.png';
import tail from '../assets/tailsReverse.png';

function Computer() {
  return(
    <section className="flex justify-center items-center h-screen
    bg-blue-100bg-blue-100 leftSide" 
    id="computer">
      <div className="computer">
        <div className="light"></div>
        <div className="computer__screen">
          <iframe src="https://giphy.com/embed/3oEdvbRHem1psqd7a0" className="giphy-embed"></iframe>
        </div>
        <img src={zed} alt="sleep" className="computer__zed"/>
        <img src={tail} alt="tail" className="computer__tail" />
      </div>
    </section>
  );
}

export default Computer;

import { useSelector } from 'react-redux';
import './App.css'
import Navigate from './components/Navigate';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Popup from './components/Popup';
import TicTacToe from './components/TicTacToe';
import About from './components/About';

function App() {
  const { project } = useSelector((state) => state.project);

  return (
    <section className="flex flex-col max-w-screen-xl mx-auto">
      <About />
      <Navigate />      
      <Projects />
      <Skills />
      <ContactForm />
      {project !== null && <Popup />}
    </section>
  )
}

export default App

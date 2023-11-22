import './App.css'
import Navigate from './components/Navigate';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';

function App() {

  return (
    <section className="flex flex-col max-w-screen-xl mx-auto relative">
      <Navigate />
      <Projects />
      <Skills />
      <ContactForm />
    </section>
  )
}

export default App

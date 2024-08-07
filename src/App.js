import './App.css';
import About from './component/About/About'
import Projects from "./component/project/Projects"
import ContactForm from './component/Contact';
import Skills from './component/skill/card';
import Education from './component/Education';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  return (
    <div className="App bg-[#021526]">
    <Header/>
    <div id="about">
      <About/>
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <ContactForm/>
      </div>
      

      <Footer/>
      
    </div>
  );
}

export default App;

import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import{ useState, useEffect } from "react";
import './App.css';

function App() {

  const [current, setCurrent] = useState("about");
  
  useEffect(() => {

    const about = document.querySelector('#Intro');
    const skill = document.querySelector('#Skills');
    const footer = document.querySelector('#Footer')

    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= footer.offsetTop) {
        setCurrent("contact");
      } else if (window.scrollY > (skill.offsetTop * 2 + skill.offsetHeight) / 2) {
        setCurrent("work");
      } else if (window.scrollY > (about.offsetHeight) / 2) {
        setCurrent("skill");
      } else {
        setCurrent("about");
      };
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="App">
      <NavBar current={current} />
      <div className="main">
        <Intro />
        <Skills />
        <Works />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

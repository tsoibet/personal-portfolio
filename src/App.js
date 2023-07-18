import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Intro />
        <Skills />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;

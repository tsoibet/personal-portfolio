import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
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

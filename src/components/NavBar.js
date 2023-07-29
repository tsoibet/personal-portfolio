export default function NavBar() {
  return(
    <nav id="NavBar">
      <ul>
        <li className="about">
          <a href="#Intro">
            <span className="desktop">ABOUT ME</span>
            <span className="mobile">ABOUT</span>
          </a>
        </li>
        <li className="skill">
          <a href="#Skills">
            <span className="desktop">SKILLS & TOOLS</span>
            <span className="mobile">SKILLS</span>
          </a>
        </li>
        <li className="work">
          <a href="#Works">
            <span className="desktop">MY WORK</span>
            <span className="mobile">WORK</span>
          </a>
        </li>
        <li className="contact">
          <a href="#Contact">
            <span className="desktop">CONTACT ME</span>
            <span className="mobile">CONTACT</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

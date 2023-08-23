export default function NavBar({ current }) {

  let aboutClass = `about${current === "about" ? " active" : ""}`;
  let skillClass = `skill${current === "skill" ? " active" : ""}`;
  let workClass = `work${current === "work" ? " active" : ""}`;
  let contactClass = `contact${current === "contact" ? " active" : ""}`;

  return(
    <nav id="NavBar">
      <ul>
        <li className={aboutClass}>
          <a href="#Intro">
            <span className="desktop">ABOUT ME</span>
            <span className="mobile">ABOUT</span>
          </a>
        </li>
        <li className={skillClass}>
          <a href="#Skills">
            <span className="desktop">SKILLS & TOOLS</span>
            <span className="mobile">SKILLS</span>
          </a>
        </li>
        <li className={workClass}>
          <a href="#Works">
            <span className="desktop">MY WORK</span>
            <span className="mobile">WORK</span>
          </a>
        </li>
        <li className={contactClass}>
          <a href="#Contact">
            <span className="desktop">CONTACT ME</span>
            <span className="mobile">CONTACT</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

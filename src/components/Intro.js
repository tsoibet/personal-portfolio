import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si"

export default function Intro() {

  return(
    <div id="Intro">
      <picture>
        <source media="(max-width: 999px)" srcset="https://placehold.co/200" alt="placeholder" />
        <img src="https://placehold.co/300" alt="placeholder" />
      </picture>
      <div id="about-me">
        <h1>
          About me
        </h1>
        <p>
          Doggo ipsum yapper woofer very taste wow very hand that feed shibe heckin good boys and girls, clouds what a nice floof he made many woofs. Heckin good boys and girls pupper such treat porgo, ur givin me a spook.
        </p>
        <ul className="panel">
          <li>
            <SiLinkedin />
          </li>
          <li>
            <SiGithub />
          </li>
          <li>
            <SiLeetcode />
          </li>
        </ul>
      </div>
    </div>
  );
}

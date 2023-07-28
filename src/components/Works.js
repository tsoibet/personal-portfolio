import { SiGithub } from "react-icons/si"
import { RxOpenInNewWindow } from "react-icons/rx"

export default function Works() {
  return(
    <div id="Works">
      <h1>
        My work
      </h1>
      <div className="display-board">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

function Project() {
  return(
    <div className="project">
      <img src="https://placehold.co/400x300" alt="placeholder" />
      <div>
        <div className="header">
          <h3>
            Project Name
          </h3>
          <ul className="panel">
            <li>
              <SiGithub />
            </li>
            <li>
              <RxOpenInNewWindow />
            </li>
          </ul>
        </div>
        <p>
          Short description: Doggo ipsum yapper woofer very taste wow very hand that feed shibe heckin good boys and girls, clouds what a nice floof he made many woofs.
        </p>
      </div>
    </div>
  );
}
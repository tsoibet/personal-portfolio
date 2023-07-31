import { getWorks } from "../data";
import { SiGithub } from "react-icons/si"
import { RxOpenInNewWindow } from "react-icons/rx"

export default function Works() {

  let workArray = getWorks();

  return(
    <div id="Works">
      <h1>
        My work
      </h1>
      <div className="display-board">
        {workArray.map((work, index) => (
          <Project key={index} name={work.name} description={work.description} screenshot={work.screenshotPath} repoUrl={work.repoUrl} demoUrl={work.demoUrl} />
        ))}
      </div>
    </div>
  );
}

function Project({name, description, screenshot, repoUrl, demoUrl }) {

  return(
    <div className="project">
      <a href={demoUrl ? demoUrl : repoUrl} target="_blank" rel="noreferrer">
        <img src={screenshot} alt="Project Screenshot" />
      </a>
      <div>
        <div className="header">
          <h3>
            {name}
          </h3>
          <ul className="panel">
            <li>
              <a href={repoUrl} target="_blank" rel="noreferrer">
                <SiGithub />
              </a>
            </li>
            <li>
              { demoUrl ? 
              <a href={demoUrl} target="_blank" rel="noreferrer">
                <RxOpenInNewWindow />
              </a> : <RxOpenInNewWindow className="dummy"/> }
            </li>
            
          </ul>
        </div>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
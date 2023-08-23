import { getSkills } from "../data";

export default function Skills() {

  let objArray = getSkills();

  return(
    <div id="Skills">
      <h1>
        Skills & Tools
      </h1>
      <ul>
        {objArray.map((skill, index) => (
          <li key={index}>
            {skill.icon}
            <p>
              {skill.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { getContactTextArray } from "../data";
import Panel from "./Panel";

export default function Contact() {

  let textArray = getContactTextArray();

  return(
    <div id="Contact">
      <div>
        <h1>
          Contact me
        </h1>
        {textArray.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
        <Panel />
      </div>
    </div>
  );
}

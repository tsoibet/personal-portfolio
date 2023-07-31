import { aboutMePhotoS_path, aboutMePhotoM_path, aboutMePhotoL_path, getAboutMeTextArray } from "../data";
import Panel from "./Panel";

export default function Intro() {

  let textArray = getAboutMeTextArray();

  return(
    <div id="Intro">
      <picture>
        <source media="(max-width: 599px)" srcset={aboutMePhotoS_path} alt="Tsoibet" />
        <source media="(min-width: 600px) and (max-width: 999px)" srcset={aboutMePhotoM_path} alt="Tsoibet" />
        <img src={aboutMePhotoL_path} alt="Tsoibet" />
      </picture>
      <div id="about-me">
        <h1>
          About me
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

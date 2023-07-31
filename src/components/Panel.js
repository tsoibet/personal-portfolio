import {  getAboutMeUrls } from "../data";
import { SiGithub, SiLinkedin, SiLeetcode } from "react-icons/si";

export default function Panel() {

  let urlObj = getAboutMeUrls();

  return (
    <ul className="panel">
      <li>
        <a href={urlObj["Linkedin"]} title="Linkedin" target="_blank" rel="noreferrer">
          <SiLinkedin />
        </a>
      </li>
      <li>
        <a href={urlObj["Github"]} title="Github" target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
      </li>
      <li>
        <a href={urlObj["Leetcode"]} title="Leetcode" target="_blank" rel="noreferrer">
          <SiLeetcode />
        </a>
      </li>
    </ul>
  );
}
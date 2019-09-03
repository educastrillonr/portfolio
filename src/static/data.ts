import { TileProps } from "../static/Interfaces/Interfaces";
import hedira from "../assets/images/hedira.png";
import simon from "../assets/images/simon.png";
import logo from "../assets/images/logo.png";

const info: TileProps[] = [
  {
    demo: "https://simon.educastrillon.xyz/",
    code: "https://github.com/educastrillonr/minigame",
    tags: ["hmtl", "javascript", "jquery", "scss"],
    img: simon
  },
  {
    demo: "https://app.hedira.io",
    code: "#",
    tags: ["react", "javascript", "scss", "firebase"],
    img: hedira
  },
  {
    demo: "#",
    code: "https://github.com/educastrillonr/portfolio",
    tags: ["React", "Typescript", "scss"],
    img: logo
  }
];

export default info;

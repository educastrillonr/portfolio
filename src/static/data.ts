import { TileProps } from "../static/Interfaces/Interfaces";
import hedira from "../assets/images/hedira.png";
import simon from "../assets/images/simon.png";
import logo from "../assets/images/logo.png";

const info: TileProps = {
  featured: [
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
  ],
  rest: [
    {
      demo: "#",
      code: "https://github.com/educastrillonr/calendar-brief",
      tags: ["React", "JavaScript", "Material-UI", "scss", "GAPI"],
      img: "https://via.placeholder.com/300/169/fff.png"
    },
    {
      demo: "http://test3.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/tug-of-war",
      tags: ["HTML", "JavaScript", "css"],
      img: "https://via.placeholder.com/300/169/fff.png"
    },
    {
      demo: "https://albums.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/music-library-brief",
      tags: ["React", "JavaScript"],
      img: "https://via.placeholder.com/300/169/fff.png"
    },
    {
      demo: "https://todo.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/todo-brief",
      tags: ["React", "JavaScript", "scss", "firebase"],
      img: "https://via.placeholder.com/300/169/fff.png"
    },
    {
      demo: "http://morse.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/morse-brief",
      tags: ["html", "JavaScript"],
      img: "https://via.placeholder.com/300/169/fff.png"
    },
    {
      demo: "https://shea.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/shea-brief",
      tags: ["React", "JavaScript", "scss"],
      img: "https://via.placeholder.com/300/169.png"
    }
  ]
};

export default info;

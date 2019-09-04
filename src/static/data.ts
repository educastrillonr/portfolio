import { TileProps } from "../static/Interfaces/Interfaces";
import hedira from "../assets/images/hedira.png";
import simon from "../assets/images/simon.png";
import portfolio from "../assets/images/portfolio.png";
import shea from "../assets/images/shea-hair.jpg";
import music from "../assets/images/music.png";
import calendar from "../assets/images/calendar.jpg";
import tug from "../assets/images/tug.png";
import morse from "../assets/images/morse.jpg";
import todo from "../assets/images/todo.jpg";

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
      img: portfolio
    }
  ],
  rest: [
    {
      demo: "https://kidie.educastrillon.xyz",
      code: "https://github.com/educastrillonr/calendar-brief",
      tags: ["React", "JavaScript", "Material-UI", "scss", "GAPI"],
      img: calendar
    },
    {
      demo: "http://test3.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/tug-of-war",
      tags: ["HTML", "JavaScript", "css"],
      img: tug
    },
    {
      demo: "https://albums.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/music-library-brief",
      tags: ["React", "JavaScript"],
      img: music
    },
    {
      demo: "https://todo.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/todo-brief",
      tags: ["React", "JavaScript", "scss", "firebase"],
      img: todo
    },
    {
      demo: "http://morse.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/morse-brief",
      tags: ["html", "JavaScript"],
      img: morse
    },
    {
      demo: "https://shea.educastrillon.xyz/",
      code: "https://github.com/educastrillonr/shea-brief",
      tags: ["React", "JavaScript", "scss"],
      img: shea
    }
  ]
};

export default info;

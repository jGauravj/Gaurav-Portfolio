import PasteApp from "./assets/PasteApp-img.png";
import foodzzz from "./assets/foodzzz.png";
import usengineering from "./assets/usengineering.png";
import animatedui from "./assets/animatedUi.png";
import portfolio from "./assets/portfolio.png";
import github from "./assets/github.png";

const projects = [
  {
    name: "PasteApp",
    technologies: ["React.js", "Tailwind CSS", "Redux-Toolkit", "LocalStorage"],
    image: PasteApp,
  },
  {
    name: "US Engineering",
    technologies: ["Next.js", "TypeScript", "ShadCN UI", "Tailwind CSS"],
    image: usengineering,
  },
  {
    name: "Foodzzz",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Redux-Toolkit"],
    image: foodzzz,
  },

  {
    name: "Animated UI",
    technologies: ["HTML", "CSS","JavaScript", "GSAP", ],
    image: animatedui,
  },
  {
    name: "Old Portfolio",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: portfolio,
  },
  {
    name: "GitHub",
    technologies: ["Visit my GitHub for complete details and code."],
    image: github,
  },
];

export default projects;

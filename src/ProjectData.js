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
    link: "https://pastedotcom.vercel.app/",
  },
  {
    name: "US Engineering",
    technologies: ["Next.js", "TypeScript", "ShadCN UI", "Tailwind CSS"],
    image: usengineering,
    link: "https://usengineering.vercel.app/",
  },
  {
    name: "Foodzzz",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Redux-Toolkit"],
    image: foodzzz,
    link: "https://foodzzzbygaurav.netlify.app/",
  },

  {
    name: "Animated UI",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    image: animatedui,
    link: "https://jgauravj.github.io/jranimated.github.io/",
  },
  {
    name: "Old Portfolio",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: portfolio,
    link: "https://gauravjangir.vercel.app/",
  },
  {
    name: "GitHub",
    technologies: ["Visit my GitHub for complete details and code."],
    image: github,
    link: "https://github.com/jGauravj?tab=repositories",
  },
];

export default projects;

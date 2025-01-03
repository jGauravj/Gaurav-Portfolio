import { MapPin } from "lucide-react";
import github from "../assets/github-logo.webp";
import vite from "../assets/vite-logo.webp";
import figma from "../assets/figma-logo.webp";
import vscode from "../assets/vscode-logo.webp";
import { MoveRight } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { Send } from "lucide-react";
import { Handshake } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Projects from "../components/Projects";
import Connect from "../components/Connect";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "TailwindCSS",
  "Bootstrap",
  "Next.js 14",
  "TypeScript",
  "ShadCN UI",
  "Figma",
  "Github",
  "Redux-Toolkit",
  "UI/UX",
];

const backenSkills = ["Node Js", "Express Js", "Mongodb"];

const Home = () => {
  return (
    <div className=" flex flex-col min-h-screen gap-[10px] lg:mt-34 md:mt-32 mt-14">
      <div className="flex flex-col gap-[10px]">
        <div className="relative">
          <h5 className="text-base font-semibold text-white/80">Hey there!</h5>
          <h1 className="text-white text-[42px] font-semibold w-full lg:w-8/12">
            I&apos;m Gaurav, a frontend developer building intuitive and
            responsive web experiences with clean, efficient code.
          </h1>
          <div className="lg:w-1/2 w-full absolute inset-0 bottom-0 bg-gradient-to-t from-[#0D0D0F] opacity-50 via-transparent to-transparent pointer-events-none z-10"></div>
        </div>
        <div className="flex items-center gap-4 mt-2 ">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
            <p className="text-white/50 text-xs">
              Available for Full-Time Work
            </p>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={12} strokeWidth={2} color="orange" />
            <p className="text-white/50 text-xs">Jaipur, IND</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-2 mt-20">
        <div className="card">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-white/80 text-lg font-bold">
                Skills & Expertise
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h1 className="text-white/80 text-semibold">Frontend</h1>
                <MoveRight size={18} className="text-white/80" />
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span key={index} className="skills_btn">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <h1 className="text-white/80 text-semibold flex items-center gap-2">
                  Backend{" "}
                  <span className="text-white/50 text-xs px-2 py-1 border border-[rgba(255,255,255,0.04)] rounded-full">
                    Beginner
                  </span>
                </h1>
                <MoveRight size={18} className="text-white/80" />
              </div>
              <div className="flex flex-wrap gap-3">
                {backenSkills.map((bk, index) => (
                  <span key={index} className="skills_btn">
                    {bk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-2">
          <div className=" border rounded-3xl border-[rgba(255,255,255,0.01)] box-shadow bg-[rgba(255,255,255,0.02)] p-8 flex-1 ">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h1 className="text-white/80 text-lg font-bold">Experience</h1>
                <span className=" border text-xs text-white/50 border-[rgba(255,255,255,0.04)] rounded-full py-1 px-2">
                  02 years
                </span>
              </div>
              <div className="w-full flex flex-col">
                <div className="flex gap-4">
                  <div className="flex flex-col w-3 items-center">
                    <div className="flex items-center justify-center w-3 h-3 bg-green-500/30  rounded-full">
                      <div className="h-[5.5px] w-[6px] rounded-full bg-green-500"></div>
                    </div>
                    <div className="w-[1px] h-[50px] bg-[rgba(255,255,255,0.06)]"></div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex justify-between items-center">
                        <h1 className="text-white text-sm font-medium">
                          Freelancing
                        </h1>
                        <p className="text-white/50 text-xs">2024 - Present</p>
                      </div>
                      <p className="text-white/50 text-xs">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col w-3 items-center">
                    <div className="flex items-center justify-center w-3 h-3 bg-[rgba(255,255,255,0.04)]  rounded-full">
                      <div className="h-[5.5px] w-[6px] rounded-full bg-white/20"></div>
                    </div>
                    <div className="w-[1px] h-[40px] bg-[rgba(255,255,255,0.06)]"></div>
                  </div>
                  <div className="w-full">
                    <div className="flex flex-col gap-2 ">
                      <div className="flex justify-between items-center">
                        <h1 className="text-white text-sm font-medium">
                          InfoObjects
                        </h1>
                        <p className="text-white/50 text-xs">2023 - 23</p>
                      </div>
                      <p className="text-white/50 text-xs">
                        Frontend Developer & UX/UI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card  ">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-white/80 text-lg text-bold">
                  Essential Stacks
                </h1>
                <p className="text-xs text-white/50">
                  A Comprehensive Collection of Useful Tools to Support and
                  Optimize My Workflow
                </p>
              </div>
              <div className="flex gap-4 items-center lg:mt-0 md:mt-4 ">
                <span className=" w-[34px] h-[34px] p-1 bg-white/90 rounded-xl">
                  <img src={github} alt="github-logo" />
                </span>
                <span className=" w-[34px] h-[34px] p-1 bg-white/90 rounded-xl">
                  <img src={vite} alt="github-logo" />
                </span>
                <span className=" w-[34px] h-[34px] p-1 bg-white/90 rounded-xl">
                  <img src={vscode} alt="github-logo" />
                </span>
                <span className=" w-[34px] h-[34px] p-1 bg-white/90 rounded-xl">
                  <img src={figma} alt="github-logo" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="card h-[440px]">
          <div className="flex flex-col gap-6 h-full">
            <div>
              <h1 className="text-white/80 text-lg font-bold">Connect</h1>
            </div>
            <div className="flex flex-col">
              <a href="https://www.linkedin.com/in/gaurav-jangir-4b2427221/" target="_blank" className="p-3 flex items-center gap-3 cursor-pointer">
                <Linkedin size={18} className="text-white/80" />
                <p className="text-sm  text-white/80 hover:text-white transition-all ease-linear">
                  LinkedIn
                </p>
              </a>
              <a href="https://github.com/jGauravj" target="_blank" className="p-3 flex items-center gap-3 cursor-pointer">
                <Github size={18} className="text-white/80" />
                <p className="text-sm  text-white/80 hover:text-white transition-all ease-linear">
                  Github
                </p>
              </a>
              <a href="https://www.instagram.com/jr.gaurav/" target="_blank" className="p-3 flex items-center gap-3 cursor-pointer">
                <Instagram size={18} className="text-white/80" />
                <p className="text-sm  text-white/80 hover:text-white transition-all ease-linear">
                  Instagram
                </p>
              </a>
              <a href="#" className="p-3 flex items-center gap-3 cursor-pointer">
                <Send size={18} className="text-white/80" />
                <p className="text-sm  text-white/80 hover:text-white transition-all ease-linear">
                  Telegram
                </p>
              </a>
            </div>
            <div className="h-full flex flex-col justify-end gap-6">
              <div className="h-[2px] w-full bg-[rgba(255,255,255,0.04)] rounded-full"></div>
              <div className="flex items-center gap-3">
                <span className="w-[38px] h-[38px] flex justify-center items-center bg-[rgba(255,255,255,0.04)] rounded-md">
                  <Handshake size={26} className="text-white/80" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-white/50">
                    Let&apos;s Work Together!
                  </p>
                  <p className="flex items-center text-xs text-white/50">
                    Send Email <ArrowRight size={12} />{" "}
                    <a  href="mailto:gouraw1@gmail.com" className="text-xs text-white ml-1 hover:text-blue-600 cursor-pointer hover:underline transition-all ease-linear">
                      gouraw1@gmail.com
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="text-lg text-bold text-white/80">
              Works & Projects
            </h1>
            <p className="text-xs text-white/50">
              Check out some of my projects
            </p>
          </div>
          <Projects />
        </div>
      </div>

      <div className="card">
        <div className="p-4 flex justify-center items-center ">
          <Connect />
        </div>
      </div>
    </div>
  );
};

export default Home;

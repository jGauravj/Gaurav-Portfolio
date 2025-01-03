import avatar from "../assets/avatar1.png";
import { UserRound } from "lucide-react";
import { NotebookText } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const whatsappNumber = "916376700373";
  const message = "Hello!";

  return (
    <div className="w-full flex justify-center sticky top-0 z-30 ">
      <div className="bg-[rgba(0,0,0,0.06)] backdrop-blur-md p-[6px]  border border-[rgba(255,255,255,0.02)] mt-16 rounded-full">
        <div className="bg-[rgba(20,20,22,0.9)] border-t border-r border-l border-[rgba(255,255,255,0.01)] p-3 rounded-full box-shadow">
          <div className="flex justify-center gap-3">
            <div className=" w-11 h-11 flex justify-center items-center rounded-full border-[1.5px] border-[rgba(255,255,255,0.04)] ">
              <Link to="/">
                <div className="w-10 h-10 rounded-full border-[1.5px] border-[rgba(255,255,255,0.02)] ">
                  <img
                    src={avatar}
                    alt="avatar"
                    className="hover:scale-90 transition-transform duration-150 ease-in-out"
                  />
                </div>
              </Link>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "active-link w-10 h-10 rounded-full flex items-center justify-center border-[1.5px]  border-[rgba(255,255,255,0.02)]  group"
                  : "w-10 h-10 rounded-full flex items-center justify-center border-[1.5px]  border-[rgba(255,255,255,0.02)] link group"
              }
            >
              <UserRound
                strokeWidth={1.5}
                size={19}
                className="text-[#A2A2A3] group-hover:scale-90 transition-transform duration-150 ease-in-out"
              />
            </NavLink>

            <a
              href="https://drive.google.com/uc?export=download&id=1QKgHyE5GioF-Jc-ayHvCdcxjdj1onnpR"
              className=" w-10 h-10 border-[1.5px]  border-[rgba(255,255,255,0.02)] link rounded-full flex justify-center items-center group"
            >
              <NotebookText
                strokeWidth={1.5}
                size={19}
                className="text-[#A2A2A3] group-hover:scale-90 transition-transform duration-150 ease-in-out"
              />
            </a>
            <div className="w-[2px] rounded-md h-10 bg-[rgba(255,255,255,0.1)]"></div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 justify-center py-2 px-3 border-2 border-[rgba(255,255,255,0.01)] rounded-full btn-shadow cursor-pointer group">
                <h1 className="text-white font-medium ">Say Hello!</h1>
                <span className="group-hover:animate-waving-hand">👋</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

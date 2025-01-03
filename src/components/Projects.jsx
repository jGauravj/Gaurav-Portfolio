import projects from "../ProjectData";

const Projects = () => {
  return (
    <div className="flex felx-row items-center gap-[10px] flex-wrap">
      {projects.map((project, index) => (
        <div
          key={index}
          className=" flex-1 flex flex-col items-center min-h-[273px] px-[14px] pt-[14px] pb-[18px] sm:min-w-[300px] min-w-[250px] bg-[rgba(255,255,255,0.02)] box-shadow rounded-xl"
        >
          <div className="w-full h-[170px] rounded-lg">
            <img
              src={project.image}
              alt={project.name}
              className=" w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full flex flex-col gap-[6px] pt-[10px] px-[6px] pb-[2px]">
            <h1 className="text-lg text-white/80 font-bold">{project.name}</h1>
            <p className="text-xs text-white/50">
              {project.technologies.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

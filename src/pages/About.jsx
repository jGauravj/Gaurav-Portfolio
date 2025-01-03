import Connect from "../components/Connect";

const About = () => {
  return (
    <div className=" flex flex-col min-h-screen gap-[10px] lg:mt-34 md:mt-32 mt-14">
      <div className="flex flex-col gap-[10px]">
        <div className=" relative">
          <h1 className="text-white text-[42px] font-semibold w-full ">
            Hey there! I&apos;m Gaurav, a 24-year-old frontend developer from
            Jaipur, Rajasthan, India. Passionate about crafting seamless user
            experiences and building dynamic, visually engaging web
            applications.
          </h1>
          <div className=" w-full absolute inset-0 bottom-0 bg-gradient-to-t from-[#0D0D0F] opacity-50 via-transparent to-transparent pointer-events-none z-10"></div>
        </div>
        <p className="text-lg text-white/45 font-normal">
          With nearly two years of experience and a knack for modern tools and
          frameworks, I specialize in turning ideas into responsive, functional,
          and aesthetically pleasing digital products. I thrive on solving
          complex problems and love diving into the details of frontend
          development and design.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-2 mt-20">
        <div className="card">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-white/80 text-lg font-bold">Education</h1>
            </div>
            <div className="flex flex-col gap-[38px]">
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-medium text-white/80">
                  B.Tech Graduate
                </h1>
                <p className="text-xs text-white/50">
                  B K Birla Institute of Engineering & Technology, Pilani
                </p>
                <p className="text-xs text-white/50">2019-2023</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-medium text-white/80">
                  12th Science Maths
                </h1>
                <p className="text-xs text-white/50">Subodh School,Nawalgarh</p>
                <p className="text-xs text-white/50">2017</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm font-medium text-white/80">10th</h1>
                <p className="text-xs text-white/50">Subodh School,Nawalgarh</p>
                <p className="text-xs text-white/50">2014</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-white/80 text-lg font-bold">Resume</h1>
            </div>
          </div>
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

export default About;

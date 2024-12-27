const Connect = () => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full h-full relative flex justify-center">
        <h1 className="text-[32px] font-bold md:w-[60%] text-center bg-gradient-to-tl from-white/70 via-white/80 to-[#ffffff] bg-clip-text text-transparent">
          Have a project in mind or looking for a dedicated developer?
        </h1>
      </div>
      <p className="text-white/50 md:w-[60%] mt-[10px] text-center text-xs font-medium">
        <span className="text-white/80 font-[400]">
          Let’s work together to craft seamless and intuitive web solutions.
        </span>{" "}
        Available for full-time, part-time, or freelance opportunities—let’s
        make it happen! ✨
      </p>
      <button className="flex items-center gap-2 justify-center py-2 px-3 border-2 border-[rgba(255,255,255,0.01)] rounded-full btn-shadow cursor-pointer group mt-6">
        <h1 className="text-white font-medium">Let&apos;s Talk</h1>
        <span>🤩</span>
      </button>
    </div>
  );
};

export default Connect;

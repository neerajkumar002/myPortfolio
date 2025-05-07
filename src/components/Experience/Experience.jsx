const Experience = () => {
  return (
    <section
      className="h-screen flex flex-col items-center py-10"
      id="experience"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-opacity='0.12'%3E%3Cpath d='M0 0.5H31.5V32'/%3E%3C/svg%3E")`,
        backgroundSize: "32px 32px",
        backgroundRepeat: "repeat",
      }}
    >
      <div>
        <div>
          <h1 className="text-center lg:text-7xl font-Montserrat leading-[1.5] bg-clip-text text-transparent font-semibold bg-gradient-to-br from-neutral-50 to-neutral-400 uppercase">
            Experience
          </h1>
        </div>

        <div className="flex   justify-center">
          <div
            className="w-[100%] lg:w-[800px]  rounded-md px-5 py-5 backdrop-blur-lg border-[1px] bg-neutral-700/30 border-neutral-800 shadow-xl shadow-neutral-800"
            style={{ opacity: 1, willChange: "auto", transform: "none" }}
          >
            <div className="flex items-center gap-4">
              <h3 className="text-2xl">Brilica Services </h3>{" "}
              <p className="text-xl text-gray-400">Frontend Developer</p>
            </div>
            <p>Junuaray 2025 - Present</p>
            <ul className=" list-disc pl-4 space-y-4 text-gray-200  py-2">
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, perspiciatis.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, perspiciatis.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, perspiciatis.
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi, perspiciatis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

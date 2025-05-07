import { useState } from "react";
const ProjectCard = ({ title, description, videoUrl, githubUrl, liveUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative p-[4px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute   inset-0 z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        style={{
          backgroundSize: "400% 400%",
          backgroundPosition: "15.0522% 50%",
          willChange: "auto",
        }}
      ></div>
      <div
        className="absolute inset-0 rounded-xl z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        style={{
          backgroundSize: "400% 400%",
          backgroundPosition: "15.0522% 50%",
          willChange: "auto",
        }}
      ></div>
      <div className="relative z-10 rounded-2xl bg-white dark:bg-zinc-900">
        <div className="relative w-full  h-[200px] md:w-[700px] md:h-[322px] bg-[#1a1a1a] text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
          <div className="absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 opacity-100">
            {/* <img
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="AI-Powered Twitter Agent"
              className="w-full h-full object-cover"
            /> */}
            <video
              autoPlay
              muted
              loop
              className="w-full h-full transform scale-125"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
          <div
            className="absolute inset-0 bg-black backdrop-blur-sm p-4 flex flex-col justify-between items-center transition-all duration-300 opacity-40"
            style={{
              transform: isHovered
                ? "translateY(0px) scale(1.02)"
                : "translateY(50px) scale(0)",
              transition:
                "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease-in-out",
              opacity: 0.5,
            }}
          >
            <div className="h-full flex flex-col justify-center items-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-Montserrat font-bold text-white mb-2 text-center">
                {title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-poppins font-light text-gray-200 text-center line-clamp-3 mb-4">
                {description}
              </p>
            </div>
            <div className="flex gap-4 mt-auto">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="  text-sm sm:text-base font-poppins bg-white text-black px-3 py-1 rounded-full"
              >
                GitHub
              </a>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className=" text-sm sm:text-base font-Montserrat bg-white text-black px-3 py-1 rounded-full"
                style={{ willChange: "auto", transform: "none" }}
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

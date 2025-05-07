import ProjectCard from "./ProjectCard";
import { projectData } from "../../data/index.js";
const Project = () => {
  return (
    <section
      className="h-screen  pt-20"
      id="projects"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-opacity='0.12'%3E%3Cpath d='M0 0.5H31.5V32'/%3E%3C/svg%3E")`,
        backgroundSize: "32px 32px",
        backgroundRepeat: "repeat",
      }}
    >
      <h2 className="lg:text-7xl bg-clip-text text-transparent bg-gradient-to-br from-neutral-50 to-neutral-400 font-semibold font-Montserrat leading-[1.5] px-8">
        Projects I've Worked on
      </h2>
      <div className="flex flex-col gap-6 mt-3 px-8 lg:flex-row ">
        {projectData.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            videoUrl={item.videoUrl}
            githubUrl={item.githubUrl}
            liveUrl={item.liveUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;

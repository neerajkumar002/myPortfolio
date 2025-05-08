import htmlImage from "../../assets/html-1.svg";
import cssImage from "../../assets/css-3.svg";
import jsImage from "../../assets/JavaScript.svg";
import reactJsImage from "../../assets/React JS.svg";
import tailwindcssImage from "../../assets/Tailwind CSS.svg";
import nodejsImage from "../../assets/Node JS.svg";
import githubImage from "../../assets/GitHub.svg";
import vsCodeImage from "../../assets/Vs Code.svg";
import expressImage from "../../assets/Express JS.svg";
import mongoDbImage from "../../assets/MongoDB.svg";
import Badge from "../Badge/Badge";
import wordpressImage from "../../assets/wordpress.svg";

const skills = [
  {
    image: htmlImage,
    title: "HTML",
  },
  {
    image: cssImage,
    title: "CSS",
  },
  {
    image: jsImage,
    title: "JavaScript",
  },
  {
    image: reactJsImage,
    title: "React JS",
  },
  {
    image: tailwindcssImage,
    title: "Tailwind CSS",
  },
  {
    image: nodejsImage,
    title: "Node JS",
  },
  {
    image: githubImage,
    title: "GitHub",
  },
  {
    image: vsCodeImage,
    title: "Vs Code",
  },
  {
    image: expressImage,
    title: "Express JS",
  },
  {
    image: mongoDbImage,
    title: "MongoDB",
  },
  {
    image: wordpressImage,
    title: "Wordpress",
  },
];

const Skills = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center "
      id="skills"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-opacity='0.12'%3E%3Cpath d='M0 0.5H31.5V32'/%3E%3C/svg%3E")`,
        backgroundSize: "32px 32px",
        backgroundRepeat: "repeat",
      }}
    >
      <div>
        <h2 className=" text-center text-5xl lg:text-7xl font-Montserrat leading-[1.5] bg-clip-text text-transparent font-semibold bg-gradient-to-br from-neutral-50 to-neutral-400 ">
          TECH STACK
        </h2>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center py-4">
        {skills.map((item, index) => (
          <Badge key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

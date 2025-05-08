import reactSvg from "/public/react.svg";

const About = () => {
  return (
    <section
      className="h-screen flex  justify-center items-center  "
      id="about"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80 [mask-image:radial-gradient(white,transparent)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Define the dot pattern */}
          <pattern
            id="dot-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <circle cx="1" cy="1" r="1" fill="pattern-circle" />
          </pattern>
        </defs>

        {/* Apply pattern to background */}
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#dot-pattern)"
        />
      </svg>
      <div>
        <div className="flex flex-col justify-center items-center lg:gap-6 space-y-6 ">
          <h1 className="text-3xl lg:text-8xl font-bold text-center ">
            Hey! i am Neeraj Kumar, a
            <span className="lg:text-8xl inline-block mt-6  font-bold bg-gradient-to-r from-pink-500 to-yellow-500 via-red-500 rounded-lg px-2  lg:pb-6 ">
              Frontend Developer.
            </span>
          </h1>
          <h2 className="font-bold lg:text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#61dafb] to-[#ffe539] flex  items-center gap-2">
            <span>I dream in </span>
            <img
              src={reactSvg}
              alt="react"
              className="h-6 w-6 inline-block"
            />{" "}
            React and eat components for breakfast!
          </h2>
          <p className="text-center font-light text-[#9b9b9b] text-xl mx-auto lg:w-[80%] font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            doloribus fugit beatae sapiente exercitationem ipsa eligendi veniam
            reiciendis harum? Quis, itaque voluptatum tenetur, veniam sequi
            facere odio at aliquam porro sint et deleniti modi quasi culpa
            eligendi. Totam asperiores expedita dignissimos, laborum nam
            aspernatur quas quisquam delectus dolore maxime, perferendis quidem
            repellat rerum vel at laboriosam ipsam itaque similique soluta error
            cumque repellendus voluptas? Provident quas sit debitis.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ opacity: 1, willChange: "auto", transform: "none" }}
          >
            <button className="rounded-full bg-[#1A1A1A] px-7 py-2 text-2xl border-[1px] border-gray-600 cursor-pointer font-medium text-white  bg-gradient-to-r from-gray-900 to-black">
              View Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

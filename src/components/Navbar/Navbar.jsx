import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed w-full backdrop-blur-md py-3 z-50">
      <div className="max-w-7xl mx-auto  ">
        <div className="flex justify-between  ">
          <div>Neeraj Kumar</div>
          <ul className="flex gap-2 text-gray-400 text-base lg:text-[1.1rem]">
            <li>
              <a href="#about" className="hover:text-white">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white">
                Experience
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

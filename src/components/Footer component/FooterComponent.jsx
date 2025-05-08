import { GithubIcon, LinkedinIcon } from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="flex flex-col gap-3  items-center py-5">
      <h1 className="font-semibold text-2xl">Neeraj Kumar </h1>
      <div className="flex gap-3 ">
        <a href="https://github.com/neerajkumar002" target="_blank">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/neerajkumar22/" target="_blank">
          <LinkedinIcon />
        </a>
      </div>
      <p className="text-sm">&copy; 2025 All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;

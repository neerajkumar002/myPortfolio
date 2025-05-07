// import { GithubIcon, LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3  items-center py-5">
      <h1 className="font-semibold text-2xl">Neeraj Kumar </h1>
      <div className="flex gap-3 ">
        {/* <GithubIcon />
        <LinkedinIcon /> */}
      </div>
      <p className="text-sm">&copy; 2025 All rights reserved.</p>
    </footer>
  );
};

export default Footer;

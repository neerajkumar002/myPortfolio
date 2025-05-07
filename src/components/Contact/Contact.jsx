import { Mail } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-black relative  " id="contact">
      <div className="h-screen flex flex-col    items-center justify-center px-4  ">
        <h1
          className="text-2xl lg:text-6xl font-semibold text-center bg-gradient-custom bg-gradient-to-br bg-clip-text from-neutral-50 to-neutral-400  text-transparent uppercase  mb-12"
          style={{ opacity: 1, willChange: "auto", transform: "none" }}
        >
          Get in Touch with Me
        </h1>
        <div className="w-full max-w-[700px]">
          <form className="flex flex-col space-y-4 ">
            <div className="  ">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-[#e2e8f0] mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-lg text-[#e2e8f0] focus:border-[#9b9b9b] focus:outline-none"
              />
            </div>
            <div className="  ">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#e2e8f0] mb-1"
              >
                Email Address
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email address"
                className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-lg text-[#e2e8f0] focus:border-[#9b9b9b] focus:outline-none"
              />
            </div>
            <div className="  ">
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-[#e2e8f0] mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter your subject"
                className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-lg text-[#e2e8f0] focus:border-[#9b9b9b] focus:outline-none"
              />
            </div>
            <div className="  ">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-[#e2e8f0] mb-1"
              >
                Message
              </label>
              <input
                type="text"
                id="message"
                placeholder="Enter your message "
                className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-lg text-[#e2e8f0] focus:border-[#9b9b9b] focus:outline-none"
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="flex gap-3 bg-gradient-to-r from-gray-900  to-black rounded-full border border-gray-600  cursor-pointer font-medium text-white py-3  px-7 duration-200 opacity-50 hover:cursor-not-allowed"
              >
                <Mail />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

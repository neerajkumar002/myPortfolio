import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import FooterComponent from "./components/Footer component/FooterComponent";
function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white  ">
      <Navbar />
      <About />
      <Project />
      <Skills />
      <Experience />
      <Contact />
      <FooterComponent />
    </div>
  );
}

export default App;

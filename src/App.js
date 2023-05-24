import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import SkillSet from "./components/SkillSet";
import FooterComp from "./components/Footer";
import { Button } from "flowbite-react";
import { MdOutlineArrowUpward } from "react-icons/md";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [display, setDisplay] = useState("none");

  const scrollFunc = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };
  window.onscroll = function () {
    scrollFunc();
  };
  const TopFunc = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div>
      <Button
        size="sm"
        id="btn"
        onClick={TopFunc}
        className={display === "none" ? "" : "show"}
      >
        <MdOutlineArrowUpward size={25} />
      </Button>
      <Header />
      <div className="mt-4">
        <Home />
        <About />
        <SkillSet />
        <Projects />
        <Contact />
        <FooterComp />
      </div>
      <ToastContainer />
    </div>
  );
}
export default App;

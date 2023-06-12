import React from "react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <div className="px-8 py-0 text-center">
      <div className="flex flex-col items-center justify-between gap-4 lg:block">
        <h2 className="text-gray-900 text-3xl lg:text-5xl dark:text-white font-bold">
          Hi, I'm Aluko Samuel
        </h2>
        <p className="text-gray-500 text-xl lg:text-2xl my-3 dark:text-white">
          {/* I'm a FullStack Developer with experience working with HTML, CSS,
          JavaScript, ReactJS, NodeJS, MongoDB, TailwindCSS, Bootstrap and Git. */}
          Web Designer • JavaScript Developer • FullStack Developer
          {/* •••••• */}
        </p>
        <div className="flex flex-row items-center justify-start flex-nowrap gap-3">
          <a href="#projects">
            <Button size="lg">My Projects</Button>
          </a>
          <a href="#contact">
            <Button size="lg" color="dark">
              Hire/Contact Me
            </Button>
          </a>
        </div>
      </div>
      {/* <img
        className="w-3/4 lg:w-4/12"
        src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950553/photo_pl6yox.jpg"
        alt="profilePic"
      /> */}
    </div>
  );
};

export default Home;

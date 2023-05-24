import { Carousel } from "flowbite-react";
import React from "react";
// h-56 sm:h-64 xl:h-80 2xl:h-96

const Projects = () => {
  return (
    <div className="lg:p-8 p-4" id="projects">
      <div className="text-left mb-5">
        <h3 className="text-2xl lg:text-3xl">My Projects</h3>
        <p className="text-gray-500 text-md lg:text-xl mt-3 dark:text-white">
          Here are some of my projects...
        </p>
      </div>
      <div className="lg:h-96 h-80">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;

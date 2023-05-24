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
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950536/inex_guovj6.png"
            alt="inex website"
          />
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950529/countries_okg8cu.png"
            alt="knowcountry website"
          />
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950523/taskmanager_bdu7cg.png"
            alt="taskmanager website"
          />
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950520/gitx_naamkf.png"
            alt="gitx website"
          />
          <img
            src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950512/calc_d1jgx4.png"
            alt="tcalc website"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;

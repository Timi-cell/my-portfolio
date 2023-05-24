import { Carousel } from "flowbite-react";
import React from "react";
// h-56 sm:h-64 xl:h-80 2xl:h-96

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-left lg:px-8 px-4 pt-4 mb-5">
        <h3 className="text-2xl lg:text-3xl text-gray-700">My Projects</h3>
        <p className="text-gray-500 lg:text-lg leading-7 text-base my-3">
          Here are some of my projects. Click on the image to visit the web
          application.
        </p>
        <a
          className="text-blue-500 lg:text-lg leading-7 text-base"
          href="https://github.com/Timi-cell?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          Visit my GitHub Page to see more &rarr;
        </a>
      </div>
      <div className="lg:h-96 h-80 overflow-hidden">
        <Carousel indicators={false}>
          <a
            href="https://in-ex.cyclic.app"
            className="h-full w-full"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950536/inex_guovj6.png"
              alt="inex website"
              className="h-full w-full"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://knowcountry.netlify.app"
            className="h-full w-full"
          >
            <img
              src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950529/countries_okg8cu.png"
              alt="knowcountry website"
              className="h-full w-full"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://task-app-odld.onrender.com/"
            className="h-full w-full"
          >
            <img
              src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950523/taskmanager_bdu7cg.png"
              className="h-full w-full"
              alt="taskmanager website"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://findgitx.netlify.app"
            className="h-full w-full"
          >
            <img
              src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950520/gitx_naamkf.png"
              className="h-full w-full"
              alt="gitx website"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://timicalc.netlify.app/"
            className="h-full w-full"
          >
            <img
              src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950512/calc_d1jgx4.png"
              className="h-full w-full"
              alt="tcalc website"
            />
          </a>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;

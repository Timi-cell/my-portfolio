import React from "react";
import Img from "../coding.jpg";

const About = () => {
  return (
    <div className="bg-gray-700 mt-4 flex flex-col-reverse items-center justify-center flex-nowrap gap-2 lg:justify-between text-left lg:flex-row-reverse lg:gap-5 lg:mt-0" id="about-me">
      <div className="p-4">
        <h3 className="text-white text-left text-3xl lg:text-4xl mb-4">
          A little about Samuel
        </h3>
        <p
          className="lg:text-xl text-base mb-4 lg:mb-0 text-white text-left"
          id="about-me"
        >
          My journey started when I developed interest in frontend web
          development and I went ahead to get myself proficient with HTML, CSS,
          JavaScript. Afterwards, I thought of being the man that handles not
          just the client side of my applications but also the server side of it
          so I took a liking to backend web development and learnt NodeJS, a
          runtime environment of JavaScript that can be used to manage the
          server side of an application. I also got myself familiar with MongoDB
          and later on, I transitioned into a fullstack web developer proficient
          with the MERN(MongoDB, Express, React, Node) stack and I build
          scalable web applications with it.
        </p>
      </div>
      <img
        className="object-cover w-full p-0 lg:w-1/2"
        src={Img}
        alt="aboutPic"
      />
    </div>
  );
};

export default About;

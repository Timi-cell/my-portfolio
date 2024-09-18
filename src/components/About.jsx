import React from "react";

const About = () => {
  return (
    <div
      className="bg-gray-700 mt-4 flex flex-col-reverse items-center justify-center flex-nowrap gap-2 lg:justify-between text-left lg:flex-row-reverse lg:gap-5 lg:mt-0"
      id="about-me"
    >
      <div className="p-4">
        <h3 className="text-white text-left text-3xl lg:text-4xl mb-4">
          A little about Samuel
        </h3>
        <p
          className="lg:text-lg leading-7 text-base mb-4 lg:mb-0 text-white text-left"
          id="about-me"
        >
          My journey started when I developed interest in front-end web
          development and I went ahead to get myself proficient with HTML, CSS
          and its frameworks like Tailwind and Bootstrap, then JavaScript and I
          also mastered ReactJS, a JavaScript library for building scalable and
          responsive user interfaces. Hit me up for your creative websites now, Let's build!
          {/* Afterwards, I thought of being the man that handles not
          just the client side of my applications but also the server side of it
          so I took a liking to back-end web development and learnt and mastered NodeJS, a
          back-end JavaScript runtime environment that can be used to manage the
          server side of an application. I also got myself familiar with ExpressJS, Git, MongoDB
          and later on, I transitioned into a fullstack web developer proficient
          with the MERN(MongoDB, Express, React, Node) stack and I build
          scalable web applications with it. */}
        </p>
      </div>
      <img
        className="object-cover w-full p-0 lg:w-1/2"
        src="https://res.cloudinary.com/dzqaqbrng/image/upload/v1684950548/coding_ztvrax.jpg"
        alt="aboutPic"
      />
    </div>
  );
};

export default About;

import React from "react";
import { DiHtml5 } from "react-icons/di";
import {
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrReactjs, GrNode } from "react-icons/gr";
import { ImGit } from "react-icons/im";

const SkillSet = () => {
  return (
    <div className="md:p-8 p-4">
      <h3 className="text-2xl lg:text-3xl text-gray-700">My Skill set</h3>
      <div className="flex flex-row gap-8 mt-5 items-center flex-wrap justify-around logo">
        <div>
          <DiHtml5 size={70} color="#e34c26" />
        </div>
        <div>
          <SiCss3 size={70} color="#264de4" />
        </div>
        <div>
          <SiJavascript size={70} color="#fff200" />
        </div>
        <div>
          <GrReactjs size={70} color="#61dbfb" />
        </div>
        <div>
          <SiTailwindcss size={70} color="#3490dc" />
        </div>
        <div>
          <SiBootstrap size={70} color="#563d7c" />
        </div>
        <div>
          <GrNode size={70} color="#3c873a" />
        </div>
        <div>
          <SiMongodb size={70} color="#4db33d" />
        </div>
        <div>
          <SiExpress size={70} color="#000" />
        </div>
        <div>
          <ImGit size={70} color="#f1502f" />
        </div>
      </div>
    </div>
  );
};

export default SkillSet;

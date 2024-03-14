import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project1.png"
          title="Modern Next.js Portfolio"
          description="An extremely modern and minimalistic portfolio. Made with Next.js and ReactThreeFiber. Using Framer Motion for the 3D animations."
        />
        <ProjectCard
          src="/project2.png"
          title="Interactive Website Cards"
          description="An interactive website cards using Framer Motion. Made with Next.js. Tailwind CSS and Framer Motion. I use it as my portfolio. "
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="This is my space themed website. I made this using Next.js and Tailwind CSS. I use it as my portfolio. "
        />
      </div>
    </div>
  );
};

export default Projects;

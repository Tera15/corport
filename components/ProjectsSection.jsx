import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="">
        <h2 className="text-base text-gray-700 text-6xl font-semibold tracking-wide mb-10">
          Check out
          <br />
          my....
        </h2>
        <p className="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl">
          Projects
        </p>
      </div>

      <div className="mt-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default ProjectsSection;

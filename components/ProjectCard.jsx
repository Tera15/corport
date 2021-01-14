import Image from "next/image";
const ProjectCard = () => {
  return (
    <div className="p-4 rounded-md text-gray-700">
      <div className="flex">
        <Image
          className="rounded-md"
          src="/test.jpg"
          width={300}
          height={300}
        />
        <div className=" px-8 flex flex-col items-center justify-around">
          <h3 className="text-3xl">Project Title</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            facere laborum, corporis quod esse accusamus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

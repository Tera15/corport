import SocialContainer from "./SocialContainer";

const Hero = () => {
  return (
    <section className="h-screen flex-col flex justify-center items-center text-gray-600 tracking-wide ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl mb-4 ">Hey There!</h1>
        <h1 className="text-7xl ">
          Welcome to <span className="text-yellow-400">Cory's</span> portfolio.
        </h1>

        <div className="flex w-full justify-between pt-20 ">
          <SocialContainer>Resume</SocialContainer>
          <SocialContainer>Github</SocialContainer>
          <SocialContainer>LinkedIn</SocialContainer>
          <SocialContainer>Contact</SocialContainer>
        </div>
      </div>
    </section>
  );
};

export default Hero;

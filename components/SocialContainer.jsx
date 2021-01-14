const SocialContainer = ({ children }) => {
  return (
    <div className="h-24 w-24 rounded-xl bg-yellow-400 shadow">
      <div className="container flex h-full justify-center items-center text-white text-xl ">
        <p className=""> {children}</p>
      </div>
    </div>
  );
};

export default SocialContainer;

const ProjectContainer = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="mt-[150px] max-w-[1080px] md:px-10 px-5">{children}</div>
  );
};

export default ProjectContainer;

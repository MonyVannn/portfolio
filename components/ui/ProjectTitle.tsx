interface ProjectTitleProps {
  title: string;
  description: string;
  tags: Array<string>;
}

const ProjectTitle = ({ title, description, tags }: ProjectTitleProps) => {
  return (
    <div>
      <div className="flex items-start justify-between">
        <h1 className="text-8xl font-bold w-full text-[#017167]">{title}</h1>
        <div className="uppercase">
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
      <p className="text-lg font-medium mt-5 max-w-[700px] leading-6">
        {description}
      </p>
    </div>
  );
};

export default ProjectTitle;

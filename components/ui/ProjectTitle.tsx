import { Github, ExternalLink } from "lucide-react";

interface ProjectTitleProps {
  title: string;
  description: string;
  tags: Array<string>;
  github?: string;
  website?: string;
}

const ProjectTitle = ({
  title,
  description,
  tags,
  github,
  website,
}: ProjectTitleProps) => {
  return (
    <div>
      <div className="flex items-start justify-between">
        <h1 className="text-6xl md:text-8xl font-bold w-full text-[#017167]">
          {title}
        </h1>
        <div className="uppercase">
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
      <p className="text-lg font-medium mt-5 max-w-[700px] leading-6">
        {description}
      </p>

      {/* Project Links */}
      {(github || website) && (
        <div className="flex items-center gap-4 mt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-[#017167] text-[#017167] rounded-lg hover:bg-[#017167] hover:text-white transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          )}
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#FF8031] text-white rounded-lg hover:bg-[#e6722b] transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-medium">Live Site</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectTitle;

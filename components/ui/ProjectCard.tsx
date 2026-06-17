import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tools?: string[];
  liveLink?: string;
  slug?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tools = [],
  liveLink,
  slug,
}) => {
  const cardContent = (
    <div className="w-full bg-black rounded-lg border border-gray-700 shadow-md overflow-hidden hover:shadow-lg hover:border-yellow-500/30 transition-all duration-300 cursor-pointer flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 bg-black flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Text Section */}
      <div className="p-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tools */}
        {tools.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        )}

        {/* Buttons — pushed to bottom */}
        <div className="flex gap-2 pt-2 mt-auto">
          {slug && (
            <span className="flex-1 bg-yellow-500 text-black text-sm font-medium py-2 px-4 rounded-md flex items-center justify-center hover:bg-yellow-400 transition-colors duration-200">
              View Details
            </span>
          )}
          {liveLink && !slug && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-yellow-500 text-black text-sm font-medium py-2 px-4 rounded-md flex items-center justify-center hover:bg-yellow-400 transition-colors duration-200"
            >
              View Live
            </a>
          )}
        </div>
      </div>
    </div>
  );

  if (slug) {
    return <Link href={`/project/${slug}`}>{cardContent}</Link>;
  }

  return cardContent;
};

export default ProjectCard;

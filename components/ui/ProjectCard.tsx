const ProjectCard = () => {
  return (
    <div className="w-full max-w-md bg-black rounded-lg border-1 border-gray-700 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <Image
        src=""
        alt="Renal Dialysis App Screenshot"
        width={400}
        height={300}
        className="w-full h-full object-cover"
      /> */}
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-white line-clamp-2">
            Renal Dialysis Management App
          </h3>
        </div>

        <div className="mb-4">
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            A comprehensive healthcare application for managing renal dialysis
            patients. Features include patient scheduling, treatment tracking,
            medical history management, and real-time monitoring dashboards for
            healthcare providers.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm cursor-pointer font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm cursor-pointer font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm cursor-pointer font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm cursor-pointer font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm cursor-pointer font-medium">
              Next.js
            </span>
            <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-sm cursor-pointer font-medium">
              Next.js
            </span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button className="w-1/2 bg-yellow-500 flex items-center justify-center  hover:bg-gray-400 text-black text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200">
            View Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

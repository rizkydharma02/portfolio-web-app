import { useState } from 'react';
import { projects } from '../constant/constant';

interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  github: string;
  webapp: string;
}

const Works = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project): void => {
    setSelectedProject(project);
  };

  const handleCloseModal = (): void => {
    setSelectedProject(null);
  };

  return (
    <section id="works" className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">A showcase of the projects I have worked on, highlighting my skills and experience in various technologies.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="
              group cursor-pointer
              bg-gray-900 border border-white/20 rounded-2xl
              overflow-hidden
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(130,69,236,0.6)]
            "
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col h-[260px]">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

              <p className="text-gray-400 text-sm line-clamp-3 mb-4">{project.desc}</p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-[#251f38] text-xs text-purple-400 font-semibold px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="bg-gray-900 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative">
            {/* Close */}
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-3xl text-white hover:text-purple-500 transition">
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col">
              {/* Image */}
              <div className="w-full max-h-[420px] bg-black flex justify-center items-center">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-contain" />
              </div>

              {/* Info */}
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>

                <p className="text-gray-400 mb-6 leading-relaxed">{selectedProject.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="bg-[#251f38] text-xs text-purple-400 font-semibold px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition">
                    View Code
                  </a>
                  <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition">
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;

import { experiences } from '../constant/constant';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">A collection of my work experience and the roles I have taken in various organizations</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white -translate-x-1/2 hidden sm:block" />

        <div className="space-y-16 sm:space-y-20">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={exp.id} className="relative flex flex-col sm:flex-row">
                {/* Left Spacer */}
                {isLeft && <div className="hidden sm:block w-1/2" />}

                {/* Content Card */}
                <div
                  className={`
                    w-full sm:w-[420px]
                    bg-gray-900 border border-white rounded-2xl
                    p-6 sm:p-8
                    shadow-[0_0_20px_rgba(130,69,236,0.5)]
                    transition-transform duration-300 hover:scale-105
                    ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}
                  `}
                >
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white rounded-md overflow-hidden flex-shrink-0">
                      <img src={exp.img} alt={exp.company} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-white break-words">{exp.role}</h3>
                      <p className="text-sm text-gray-300 break-words">{exp.company}</p>
                      <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">{exp.desc}</p>

                  {/* Skills */}
                  <div className="mt-6">
                    <h5 className="text-white font-medium mb-3">Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="bg-[#8245ec]/20 text-purple-300 border border-[#8245ec] px-3 py-1 text-xs rounded-lg whitespace-nowrap">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Spacer */}
                {!isLeft && <div className="hidden sm:block w-1/2" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

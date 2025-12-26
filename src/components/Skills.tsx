import { SkillsInfo } from '../constant/constant';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">A collection of my technical skills and expertise honed through projects and real-world experience.</p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="
              bg-gray-900/80 backdrop-blur-md
              rounded-2xl p-8
              border border-white/20
              shadow-[0_0_30px_rgba(130,69,236,0.35)]
              transition-transform duration-300 hover:-translate-y-1
            "
          >
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.title}</h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    flex items-center gap-3
                    px-4 py-2
                    bg-[#1a1625]
                    rounded-xl
                    border border-white/10
                    text-gray-300 text-sm
                    transition-all duration-300
                    hover:border-purple-500
                    hover:shadow-[0_0_15px_rgba(130,69,236,0.5)]
                  "
                >
                  <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

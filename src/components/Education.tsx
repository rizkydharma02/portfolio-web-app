import { education } from '../constant/constant';

const Education = () => {
  return (
    <section id="education" className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">My education has been a journey of learning and development.</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white -translate-x-1/2 hidden sm:block" />

        <div className="space-y-20">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={edu.id} className="relative flex flex-col sm:flex-row">
                {/* Left Spacer */}
                {isLeft && <div className="hidden sm:block w-1/2" />}

                {/* Card */}
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
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                      <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-sm text-gray-300">{edu.school}</p>
                      <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  {/* Grade */}
                  <p className="mt-4 text-gray-300 font-semibold">
                    Grade: <span className="text-purple-400">{edu.grade}</span>
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
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

export default Education;

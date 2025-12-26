import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/profil-image.png';

const About = () => {
  return (
    <section id="about" className="py-24 px-[12vw] md:px-[8vw] lg:px-[16vw] font-sans">
      <div className="flex flex-col-reverse md:flex-row items-center gap-14 max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">Hi, I am</h1>

          <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">Rizky Dharma Andika Raya</h2>

          <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-purple-500">
            <span className="text-white">I am a </span>
            <Typewriter words={['Junior Web Developer', 'Junior Data Analyst', 'Programmer']} loop={0} cursor cursorStyle="|" typeSpeed={80} deleteSpeed={60} delaySpeed={1200} />
          </h3>

          <p className="mt-8 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Recent Information Systems graduate with hands-on experience as a Junior Full Stack Web Developer through a bootcamp (React.js & Express.js) and participant in the Kampus Merdeka Independent Study Program in Data Analytics and
            Software Engineering. Proven ability to lead projects, develop scalable systems, and deliver data-driven insights using modern technologies.
          </p>

          <a
            href="https://drive.google.com/file/d/1wI7fd7qMKkI5qjYGOD_UIBfA5wGTBnBR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block mt-10 px-8 py-3
              text-white text-lg font-semibold
              rounded-full
              bg-gradient-to-r from-purple-500 to-purple-700
              shadow-[0_0_25px_rgba(130,69,236,0.6)]
              transition-all duration-300
              hover:scale-105 hover:shadow-[0_0_40px_rgba(130,69,236,0.8)]
            "
          >
            Download Resume
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img
              src={profileImage}
              alt="Rizky Dharma Andika Raya"
              className="
                w-full h-full object-cover rounded-full
                shadow-[0_0_40px_rgba(130,69,236,0.6)]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/profil-image.png';

const About = () => {
  return (
    <section id="about" className="py-4 px-[7xw] md:px-[7xw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">Hi, I am</h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">Rizky Dharma Andika Raya</h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold  mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a</span>
            <Typewriter words={['Junior Web Developer', 'Junior Data Analyst', 'Programmer']} typeSpeed={100} deleteSpeed={100} delaySpeed={500} cursorColor="#8245ec" cursor={true} />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Recent Information Systems graduate with hands-on experience as a Junior Full Stack Web Developer through a bootcamp (React.js & Express.js) and participant in the Kampus Merdeka Independent Study Program in Data Analytics and
            Software Engineering. Proven ability to lead projects, develop scalable systems and deliver data- driven insights using modern technologies. Highly motivated to contribute and grow in an internship or entry-level role.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1wI7fd7qMKkI5qjYGOD_UIBfA5wGTBnBR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{ background: 'linear-gradient(90deg, #a855f7)', boxShadow: '0 0  2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec' }}
          >
            Download My Resume
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src={profileImage} alt="Rizky Dharma Andika Raya" className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69, 236, 0.5)]" />
        </div>
      </div>
    </section>
  );
};

export default About;

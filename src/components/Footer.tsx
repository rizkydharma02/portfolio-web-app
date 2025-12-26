import { FaLinkedin, FaYoutube, FaGithub, FaMedium } from 'react-icons/fa';

interface NavItem {
  name: string;
  id: string;
}

interface SocialItem {
  icon: React.ReactNode;
  link: string;
}

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems: NavItem[] = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'works' },
  ];

  const socialLinks: SocialItem[] = [
    {
      icon: <FaMedium />,
      link: 'https://medium.com/@rizkydharma02',
    },
    {
      icon: <FaYoutube />,
      link: 'https://www.youtube.com/@rizkydharmaandikaraya7448',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/rizky-dharma-andika-raya/',
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/rizkydharma02',
    },
  ];
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[17vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name and Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Rizky Dharma Andika Raya</h2>
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {navItems.map((item, index) => (
            <button key={index} onClick={() => handleScroll(item.id)} className="hover:text-purple-500 text-sm sm:text-base my-1">
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110">
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-400">&copy; {new Date().getFullYear()} Rizky Dharma Andika Raya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

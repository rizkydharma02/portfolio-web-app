import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaMedium, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  /* Scroll detect (DISABLE when mobile menu open) */
  useEffect(() => {
    if (isOpen) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  /* Smooth scroll */
  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'works', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full
          z-50
          transition-all duration-300
          px-[7vw] md:px-[7vw] lg:px-[20vw]
          ${isScrolled && !isOpen ? 'bg-[#050414] backdrop-blur-md shadow-lg' : 'bg-transparent'}
        `}
      >
        <div className="flex justify-between items-center py-5 text-white">
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span>Raya Dev</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] transition ${activeSection === item.id ? 'text-[#8245ec]' : ''}`}>
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>

          {/* Desktop Social */}
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/rizkydharma02" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rizky-dharma-andika-raya" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
              <FaLinkedin size={24} />
            </a>
            <a href="https://medium.com/@rizkydharma02" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
              <FaMedium size={24} />
            </a>
            <a href="https://www.youtube.com/@rizkydharmaandikaraya7448" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
              <FaYoutube size={24} />
            </a>
          </div>

          {/* Mobile Button (ALWAYS ABOVE OVERLAY) */}
          <div className="md:hidden z-[60]">
            {isOpen ? <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} /> : <FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />}
          </div>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU (OUTSIDE NAV) */}
      {isOpen && (
        <div
          className="
            fixed inset-0 z-[40]
            bg-[#050414]/95 backdrop-blur-xl
            flex flex-col items-center justify-center
            md:hidden
            animate-[fadeIn_0.25s_ease-out]
          "
        >
          <ul className="flex flex-col items-center space-y-8 text-2xl text-gray-200">
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer transition hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec] font-semibold' : ''}`}>
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>

          <div className="w-20 h-[2px] bg-[#8245ec]/60 my-12 rounded-full" />

          <div className="flex space-x-10">
            <a href="https://github.com/rizkydharma02" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/rizky-dharma-andika-raya" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
              <FaLinkedin size={30} />
            </a>
            <a href="https://medium.com/@rizkydharma02" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
              <FaMedium size={30} />
            </a>
            <a href="https://www.youtube.com/@rizkydharmaandikaraya7448" target="_blank" className="text-gray-300 hover:text-[#8245ec]">
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

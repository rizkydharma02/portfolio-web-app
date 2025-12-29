import { RocketIcon } from 'lucide-react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// env email js
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    // validation
    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email configuration is missing. Please check your environment variables.', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
      console.error('Missing EmailJS configuration:', {
        serviceId: !!serviceId,
        templateId: !!templateId,
        publicKey: !!publicKey,
      });
      return;
    }

    emailjs
      .sendForm(
        serviceId, // Service ID
        templateId, // Template ID
        formRef.current,
        publicKey // Public Key
      )
      .then(
        () => {
          formRef.current?.reset();
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 5000,
            theme: 'dark',
          });
        },
        (error) => {
          console.error(error);
          toast.error('Something went wrong!', {
            position: 'top-right',
            autoClose: 5000,
            theme: 'dark',
          });
        }
      );
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[6vw] lg:px-[20vw]">
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">I’d love to hear from you—reach out for any opportunities or questions!</p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          Contact With Me
          <RocketIcon className="w-4 h-4" />
        </h3>

        <form ref={formRef} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
          <input type="email" name="user_email" placeholder="Your Email" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />

          <input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />

          <input type="text" name="subject" placeholder="Subject" required className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500" />

          <textarea name="message" placeholder="Your Message" required rows={5} className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 resize-none" />

          <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

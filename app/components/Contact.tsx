'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, Send } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sudarshan-chikkathimmaiah',
    icon: Linkedin,
    color: 'text-blue-600 dark:text-blue-400',
    hoverColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sudarshan',
    icon: Github,
    color: 'text-gray-900 dark:text-gray-100',
    hoverColor: 'hover:bg-gray-100 dark:hover:bg-gray-800',
  },
  {
    name: 'Email',
    url: 'mailto:sudarshan.chikkathimmaiah@sjsu.edu',
    icon: Mail,
    color: 'text-red-600 dark:text-red-400',
    hoverColor: 'hover:bg-red-50 dark:hover:bg-red-900/20',
  },
];

export default function Contact() {
  const handleResumeDownload = () => {
    // In a real implementation, you would link to an actual PDF file
    // For now, this is a placeholder
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Placeholder path
    link.download = 'Sudarshan_Chikkathimmaiah_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 mx-auto mb-12 rounded-full"></div>
          <p className="text-center text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to collaborate on your next AI/ML project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                  <p className="text-gray-400">I'm always open to discussing new opportunities</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm passionate about AI/ML innovation and always excited to collaborate on challenging projects. 
                Whether you're looking for expertise in medical imaging, NLP solutions, or cutting-edge LLM applications, 
                I'd love to hear from you.
              </p>

              <div className="space-y-3 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600 hover:border-gray-500 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                      <social.icon
                        className="text-white group-hover:scale-110 transition-transform"
                        size={18}
                      />
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-white">{social.name}</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              <motion.button
                onClick={handleResumeDownload}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/50"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                  <p className="text-gray-400">Or reach out directly via email</p>
                </div>
              </div>
              
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800/50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 backdrop-blur-sm transition-all duration-200 hover:border-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800/50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 backdrop-blur-sm transition-all duration-200 hover:border-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-gray-800/50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none backdrop-blur-sm transition-all duration-200 hover:border-gray-500"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/50"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </motion.button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-center text-gray-400 text-sm">
                  Prefer email? <a href="mailto:sudarshan.chikkathimmaiah@sjsu.edu" className="text-gray-300 hover:text-white transition-colors">sudarshan.chikkathimmaiah@sjsu.edu</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


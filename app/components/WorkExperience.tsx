'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'LTIMindtree',
    location: 'Bangalore, India',
    startDate: '2022/07',
    endDate: '2023/12',
    description: [
      'Built and deployed agentic LLM services with function calling and multi-step orchestration using Flask/FastAPI, optimizing latency and improving workflow efficiency by 30%',
      'Developed RAG + web-search pipelines with LangChain and Qdrant, implementing ReAct-style chaining for context-grounded responses in production',
      'Designed automated evaluation loops with success metrics for grounded accuracy and response reliability, enabling self-healing retries and auditable outputs',
      'Deployed containerized LLM/RAG services on AWS with CI/CD, adding observability for latency/cost monitoring and implementing fail-safes and persistent memory',
    ],
    technologies: ['Python', 'FastAPI', 'Flask', 'LangChain', 'Qdrant', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    id: 2,
    title: 'Software Engineer Intern',
    company: 'Mindtree',
    location: 'Bangalore, India',
    startDate: '2022/02',
    endDate: '2022/05',
    description: [
      'Built full-stack web applications with ASP.NET Core and Angular/Django to automate internal workflows',
      'Created SQL-backed APIs and optimized queries, improving data retrieval efficiency by 20%',
      'Integrated NLP APIs (Dialogflow, Rasa) into chatbot prototypes for customer query automation, gaining early experience in conversational AI and intent classification',
    ],
    technologies: ['ASP.NET Core', 'Angular', 'Django', 'SQL', 'Dialogflow', 'Rasa'],
  },
  {
    id: 3,
    title: 'Member',
    company: 'Cynergy Coding Club',
    location: 'Bangalore, India',
    startDate: '2019/01',
    endDate: '2022/05',
    // current: true,
    description: [
      'Led coding workshops and collaborative problem-solving sessions, mentoring students on algorithms and software best practices',
      'Organized hackathons and tech events, boosting member engagement and technical skill development',
      'Contributed to open-source club projects and published educational materials',
      'Coordinated with industry professionals to deliver guest lectures on AI/ML trends',
    ],
    technologies: ['Python', 'React', 'Node.js', 'MongoDB', 'Open-Source'],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 to-gray-700 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full transform -translate-x-1/2 z-10 border-4 border-black shadow-lg"></div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-gray-400 font-semibold mb-2">
                          <Briefcase size={16} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-700 dark:text-gray-300 flex items-start"
                        >
                          <span className="text-gray-400 mr-2">▸</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code, Brain, Database } from 'lucide-react';

const technicalSkills = {
  'AI/ML': [
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'Keras', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
    { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  ],
  'Languages': [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  ],
  'NLP & LLMs': [
    { name: 'Hugging Face', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/huggingface/huggingface-original.svg' },
    { name: 'NLTK', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Nltk_logo.png' },
    { name: 'Transformers', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
    { name: 'LangChain', logo: 'https://python.langchain.com/img/langchain_stack.png' },
  ],
  'Frontend': [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Streamlit', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/streamlit.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  'Backend': [
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'FastAPI', logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.svg' },
    { name: 'ASP.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  ],
  'Cloud & DevOps': [
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  ],
  'Data & Big Data': [
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Apache Spark', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ],
  'Visualization & BI': [
    { name: 'Tableau', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tableau.svg' },
    { name: 'Power BI', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg' },
    { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/matplotlib.svg' },
  ]
};

const researchInterests = [
  { icon: Brain, title: 'NLP & LLMs', description: 'Advanced language models and their applications' },
  { icon: Database, title: 'RAG Systems', description: 'Retrieval-Augmented Generation for knowledge systems' },
  { icon: Code, title: 'AI Applications', description: 'Practical AI solutions for real-world problems' },
];

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I am a software engineer(AI/ML Focus) specializing in building production-grade 
              AI and ML solutions for healthcare, fintech, cloud, and consumer products. With deep 
              expertise in Python, modern ML frameworks, and scalable cloud deployments 
              (AWS, Azure, Kubernetes), I deliver robust, ethical, and user-centric systems, ranging
               from medical imaging diagnostics and RAG chatbots to fraud detection and recommender engines.
                I thrive in fast-paced, collaborative environments, translating business challenges into 
                impactful, resilient digital solutions while championing responsible AI and continual improvement.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="text-gray-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white">Master of Science in Artificial Intelligence</h4>
                <p className="text-sm text-gray-400">San José State University</p>
                <p className="text-xs text-gray-500">Current</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Bachelor's in Computer Science and Engineering</h4>
                <p className="text-sm text-gray-400">Ramaiah University of Applied Sciences</p>
                <p className="text-xs text-gray-500">2022</p>
              </div>
            </div>
          </motion.div>

          {/* Research Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 shadow-2xl"
          >
            <div className="flex items-center mb-6">
              <Brain className="text-gray-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-white">Research Interests</h3>
            </div>
            <div className="space-y-4">
              {researchInterests.map((interest, index) => (
                <div key={index} className="flex items-start">
                  <interest.icon className="text-gray-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-white">{interest.title}</h4>
                    <p className="text-sm text-gray-400">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Technical Skills
          </h3>
          
          {/* Single Horizontal Scrolling Container for All Categories */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-12 pb-4 scrollbar-hide scroll-smooth">
              {/* Left spacer for better logo visibility */}
              <div className="flex-shrink-0 w-8"></div>
              
              {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="flex-shrink-0"
                >
                  {/* Category Header */}
                  <h4 className="text-lg font-semibold mb-4 text-gray-300 whitespace-nowrap">
                    {category}.
                  </h4>
                  
                  {/* Skills in this Category */}
                  <div className="flex gap-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="flex-shrink-0 flex flex-col items-center"
                      >
                        <div className="w-16 h-16 flex items-center justify-center">
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) {
                                fallback.style.display = 'flex';
                              }
                            }}
                          />
                          <div className="w-16 h-16 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-sm font-bold text-gray-400 border border-gray-700" style={{display: 'none'}}>
                            {skill.name.slice(0, 2).toUpperCase()}
                          </div>
                        </div>
                        <span className="text-xs font-medium text-gray-400 mt-2 whitespace-nowrap">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
              
              {/* Right spacer for better logo visibility */}
              <div className="flex-shrink-0 w-8"></div>
            </div>
            
            {/* Gradient Fade Edges */}
            <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-black via-gray-950 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-black via-gray-950 to-transparent pointer-events-none z-10"></div>
          </div>
          
          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-8 px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-full shadow-2xl border border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">💻</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Technologies</div>
                  <div className="text-lg font-bold text-gray-200">35+</div>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">📂</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Categories</div>
                  <div className="text-lg font-bold text-gray-200">8</div>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-600"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">🤖</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Specialization</div>
                  <div className="text-lg font-bold text-gray-200">AI/ML</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Projects Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">
              Featured Projects
            </h3>
            <a
              href="#projects"
              className="text-gray-400 hover:text-gray-200 font-medium flex items-center gap-2 transition-colors duration-200"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-bold text-yellow-400">Top-Tier Project</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Chest X-Ray Diagnosis</h4>
              <p className="text-gray-300 text-sm mb-3">
                Bayesian CNN for medical imaging with uncertainty quantification and production deployment.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 text-xs bg-gray-700/50 text-yellow-400 rounded border border-gray-600">Medical AI</span>
                <span className="px-2 py-1 text-xs bg-gray-700/50 text-blue-400 rounded border border-gray-600">Deep Learning</span>
                <span className="px-2 py-1 text-xs bg-gray-700/50 text-green-400 rounded border border-gray-600">AWS</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🥈</span>
                <span className="text-sm font-bold text-blue-400">High-Tier Project</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Video Sentiment Model</h4>
              <p className="text-gray-300 text-sm mb-3">
                Multimodal emotion recognition using MELD dataset with AWS SageMaker deployment.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 text-xs bg-gray-700/50 text-purple-400 rounded border border-gray-600">Video AI</span>
                <span className="px-2 py-1 text-xs bg-gray-700/50 text-blue-400 rounded border border-gray-600">Multimodal</span>
                <span className="px-2 py-1 text-xs bg-gray-700/50 text-orange-400 rounded border border-gray-600">AWS</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🤖</span>
                <span className="text-sm font-bold text-green-400">AI Innovation</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">RAG Privacy Chatbot</h4>
              <p className="text-gray-300 text-sm mb-3">
                Advanced RAG system for privacy document analysis with vector embeddings.
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 text-xs bg-gray-700/50 text-emerald-400 rounded border border-gray-600">RAG</span>
                <span className="px-2 py-1 text-xs bg-gray-700/50 text-blue-400 rounded border border-gray-600">LLM</span>
                <span className="px-2 py-1 text-xs bg-gray-700/50 text-purple-400 rounded border border-gray-600">Privacy</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


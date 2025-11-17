'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  metrics?: {
    stars?: number;
    forks?: number;
    downloads?: number;
  };
  techStack: string[];
  rank: number;
  tier: 'top-tier' | 'high-tier' | 'mid-tier' | 'entry-level';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Chest X-Ray Diagnosis Report',
    description: 'Bayesian CNN for multi-label chest X-ray classification with uncertainty quantification.',
    longDescription: 'Implements a Bayesian Convolutional Neural Network for multi-label classification of chest X-rays (CheXpert dataset). Integrates Monte Carlo Dropout and Grad-CAM explainability to predict pathologies and quantify model confidence—critical for medical deployment. Deployed on AWS EC2 with Flask, Gunicorn, and Nginx.',
    image: '/Chest_XRAY.jpg',
    tags: ['Medical AI', 'Deep Learning', 'Bayesian NN'],
    githubUrl: 'https://github.com/SudarshanC00/Chest-X-Ray-Diagnosis-Report',
    demoUrl: 'https://chest-xray-demo.vercel.app',
    techStack: ['Python', 'PyTorch', 'EfficientNet-B0', 'Flask', 'AWS EC2', 'Grad-CAM'],
    rank: 1,
    tier: 'top-tier'
  },
  {
    id: 2,
    title: 'Video Sentiment Model',
    description: 'Multimodal emotion recognition in video conversations using MELD dataset.',
    longDescription: 'Video sentiment analysis model using the MELD (Multimodal EmotionLines Dataset) for emotion recognition in video conversations. Includes training pipeline and deployment infrastructure on AWS SageMaker.',
    image: '/video_sentiment.jpg',
    tags: ['Video Analysis', 'Multimodal', 'Deep Learning'],
    githubUrl: 'https://github.com/SudarshanC00/Video-Sentiment-Model',
    techStack: ['Python', 'PyTorch', 'AWS SageMaker', 'Computer Vision'],
    rank: 2,
    tier: 'top-tier'
  },
  {
    id: 3,
    title: 'RAG Privacy Documents Chatbot',
    description: 'Advanced RAG system for privacy document analysis and question answering.',
    longDescription: 'Retrieval-Augmented Generation (RAG) chatbot focused on privacy document analysis and question answering. Implements vector embeddings, document processing, and LLM integration for privacy applications.',
    image: '/api/placeholder/600/400',
    tags: ['RAG', 'LLM', 'Privacy'],
    githubUrl: 'https://github.com/SudarshanC00/RAG_based_CHatbot_Privacy_documents',
    demoUrl: 'https://rag-privacy-demo.vercel.app',
    techStack: ['Python', 'LangChain', 'Vector Databases', 'LLMs', 'RAG Architecture'],
    rank: 3,
    tier: 'top-tier'
  },
  {
    id: 4,
    title: 'Review Analysis Tool',
    description: 'Advanced NLP tool for product review analysis using RoBERTa and BART.',
    longDescription: 'A powerful tool to analyze and summarize product reviews using advanced NLP models. Leverages RoBERTa for sentiment classification and BART for summarization, helping businesses gain actionable insights from customer feedback quickly.',
    image: '/review_analysis.jpg',
    tags: ['NLP', 'Sentiment Analysis', 'LLM'],
    githubUrl: 'https://github.com/SudarshanC00/Review-Analysis-tool',
    demoUrl: 'https://review-analysis-demo.vercel.app',
    techStack: ['Python', 'Streamlit', 'RoBERTa', 'BART', 'Hugging Face'],
    rank: 4,
    tier: 'top-tier'
  },
  {
    id: 5,
    title: 'Text to Image Stable Diffusion',
    description: 'Text-to-image generation using Stable Diffusion models.',
    longDescription: 'Text-to-image generation using Stable Diffusion models for creating images from textual descriptions. Implements advanced diffusion models and prompt engineering techniques.',
    image: '/api/placeholder/600/400',
    tags: ['Generative AI', 'Diffusion Models', 'Computer Vision'],
    githubUrl: 'https://github.com/SudarshanC00/text-to-image-stable-diffusion',
    techStack: ['Python', 'Stable Diffusion', 'PyTorch', 'Diffusion Models'],
    rank: 5,
    tier: 'top-tier'
  },
  {
    id: 6,
    title: 'AI Blog Assistant (BlogCraft)',
    description: 'AI-powered blog post generation using Google Gemini and DALL-E.',
    longDescription: 'AI-powered tool that generates engaging blog posts based on user input. Built with Streamlit, Google Gemini, and OpenAI\'s DALL-E, allowing users to input blog details and generates complete blog posts with relevant images.',
    image: '/Blog_gen.jpg',
    tags: ['LLM', 'Generative AI', 'Full-Stack'],
    githubUrl: 'https://github.com/SudarshanC00/AI-Blog-Assistant',
    demoUrl: 'https://blogcraft-demo.vercel.app',
    techStack: ['Python', 'Streamlit', 'Google Gemini', 'OpenAI DALL-E', 'LLMs'],
    rank: 6,
    tier: 'top-tier'
  },
  {
    id: 7,
    title: 'Mask Language Modelling',
    description: 'BERT-style masked language modeling implementation for NLP tasks.',
    longDescription: 'Implementation of masked language modeling (BERT-style pretraining) for NLP tasks. Features self-supervised learning, transfer learning, and model pretraining capabilities.',
    image: '/api/placeholder/600/400',
    tags: ['NLP', 'BERT', 'Self-Supervised Learning'],
    githubUrl: 'https://github.com/SudarshanC00/Mask-Language-modelling',
    techStack: ['Python', 'Transformers', 'PyTorch', 'BERT Architecture'],
    rank: 7,
    tier: 'top-tier'
  },
  {
    id: 8,
    title: 'Deep Q-Learning Snake AI',
    description: 'Reinforcement Learning agent trained to play Snake using Deep Q-Learning.',
    longDescription: 'Reinforcement Learning project implementing Deep Q-Learning to train an AI agent to play the Snake game. Features experience replay, policy optimization, and neural network training.',
    image: '/api/placeholder/600/400',
    tags: ['Reinforcement Learning', 'Deep Q-Learning', 'Game AI'],
    githubUrl: 'https://github.com/SudarshanC00/RL-DeepQLearning-SnakeAI',
    techStack: ['Python', 'PyTorch', 'Reinforcement Learning', 'Neural Networks'],
    rank: 8,
    tier: 'top-tier'
  },
  {
    id: 9,
    title: 'Brain Tumor Classification',
    description: 'Deep learning model for brain MRI classification using ResNet architectures.',
    longDescription: 'Deep learning model for classifying brain MRI images into tumor types using PyTorch, aiding early diagnosis and treatment planning with ResNet-based models. Includes deployment with Streamlit.',
    image: '/api/placeholder/600/400',
    tags: ['Medical AI', 'Computer Vision', 'Deep Learning'],
    githubUrl: 'https://github.com/SudarshanC00/Brain-Tumor-Classification',
    demoUrl: 'https://brain-tumor-demo.vercel.app',
    techStack: ['Python', 'PyTorch', 'ResNet', 'Streamlit', 'Medical Imaging'],
    rank: 9,
    tier: 'high-tier'
  },
  {
    id: 10,
    title: 'X-Ray Report DenseNet',
    description: 'Medical image analysis system using DenseNet for X-ray report generation.',
    longDescription: 'X-ray report generation system using DenseNet architecture for medical image analysis and diagnosis. Implements transfer learning and computer vision techniques for healthcare applications.',
    image: '/api/placeholder/600/400',
    tags: ['Medical AI', 'DenseNet', 'Computer Vision'],
    githubUrl: 'https://github.com/SudarshanC00/xray_report_denseNet',
    techStack: ['Python', 'DenseNet', 'PyTorch', 'Medical Imaging'],
    rank: 10,
    tier: 'high-tier'
  },
  {
    id: 11,
    title: 'NYC Taxi Fare Prediction with PySpark',
    description: 'Big data project predicting taxi fares using distributed computing with PySpark.',
    longDescription: 'Big data project predicting NYC taxi fares using PySpark for distributed computing. Features ETL pipelines, feature engineering, and large-scale machine learning on Apache Spark.',
    image: '/api/placeholder/600/400',
    tags: ['Big Data', 'PySpark', 'Distributed Computing'],
    githubUrl: 'https://github.com/SudarshanC00/NYC-Taxi-Fare-Prediction-Using-Pyspark',
    techStack: ['PySpark', 'Apache Spark', 'Python', 'Big Data Processing'],
    rank: 11,
    tier: 'high-tier'
  },
  {
    id: 12,
    title: 'Developer Assistant - CrewAI',
    description: 'AI-powered multi-agent system for automating development tasks using CrewAI.',
    longDescription: 'AI-powered developer assistant built using CrewAI framework for automating development tasks. Implements multi-agent systems and automation for developer workflows.',
    image: '/api/placeholder/600/400',
    tags: ['AI Agents', 'Automation', 'Multi-Agent Systems'],
    githubUrl: 'https://github.com/SudarshanC00/Developer-s-Assistant---CrewAI',
    techStack: ['Python', 'CrewAI', 'LLMs', 'AI Automation'],
    rank: 12,
    tier: 'high-tier'
  },
  {
    id: 13,
    title: 'Oskibot LLM - UC Berkeley',
    description: 'Large Language Model chatbot for UC Berkeley with conversational AI capabilities.',
    longDescription: 'Large Language Model chatbot project for UC Berkeley, implementing conversational AI capabilities. Features fine-tuning, prompt engineering, and natural language understanding.',
    image: '/api/placeholder/600/400',
    tags: ['LLM', 'Chatbot', 'Fine-tuning'],
    githubUrl: 'https://github.com/SudarshanC00/Oskibot-LLM-UCBerkeley',
    techStack: ['Python', 'LLMs', 'Transformer Models', 'Chatbot Development'],
    rank: 13,
    tier: 'high-tier'
  },
  {
    id: 14,
    title: 'RAG-based Chatbot',
    description: 'General-purpose RAG chatbot for document querying and conversational AI.',
    longDescription: 'General-purpose RAG-based chatbot for document querying and conversational AI. Implements vector search, embedding models, and document retrieval systems.',
    image: '/api/placeholder/600/400',
    tags: ['RAG', 'Chatbot', 'Vector Search'],
    githubUrl: 'https://github.com/SudarshanC00/RAG-based-Chatbot',
    techStack: ['Python', 'RAG Framework', 'Vector Databases', 'LLMs'],
    rank: 14,
    tier: 'high-tier'
  },
  {
    id: 15,
    title: 'Crashes in San Jose Analysis',
    description: 'Big data analysis of traffic crashes with visualization and BI integration.',
    longDescription: 'Analyzes traffic crash data in San Jose sourced from the San Jose Open Data Portal. Conducts EDA, creates visualizations, and integrates findings into Power BI, Tableau, and React applications.',
    image: '/Crashes_SJ.jpg',
    tags: ['Big Data', 'Data Visualization', 'BI'],
    githubUrl: 'https://github.com/SudarshanC00/Crashes-in-San-Jose',
    techStack: ['Python', 'BigQuery', 'Tableau', 'Power BI', 'React.js'],
    rank: 15,
    tier: 'high-tier'
  },
  {
    id: 16,
    title: 'GPU Accelerated ML for Big Data',
    description: 'GPU acceleration techniques for machine learning on big data processing.',
    longDescription: 'Demonstrates GPU acceleration techniques for machine learning on big data, comparing performance across different hardware setups. Features CUDA programming and parallel computing optimization.',
    image: '/api/placeholder/600/400',
    tags: ['GPU Computing', 'Performance Optimization', 'Big Data'],
    githubUrl: 'https://github.com/SudarshanC00/GPU-Accelerated-ML-For-Big-Data-Processing',
    techStack: ['Python', 'CUDA', 'GPU Libraries', 'Parallel Computing'],
    rank: 16,
    tier: 'high-tier'
  },
  {
    id: 17,
    title: 'Movie Recommendation System',
    description: 'Content-based movie recommendation system with ML and API integration.',
    longDescription: 'Content-based movie recommendation system that suggests similar movies by analyzing plot descriptions using machine learning techniques. Features an interactive Streamlit interface with poster fetching via TMDB API.',
    image: '/api/placeholder/600/400',
    tags: ['Recommender Systems', 'ML', 'NLP'],
    githubUrl: 'https://github.com/SudarshanC00/Movie-Recommendation-System',
    demoUrl: 'https://movie-recommender-demo.vercel.app',
    techStack: ['Python', 'Streamlit', 'Scikit-learn', 'TMDB API', 'NLP'],
    rank: 17,
    tier: 'mid-tier'
  },
  {
    id: 18,
    title: 'Bank Customer Churn Prediction',
    description: 'Predictive model for identifying customer churn in banking services.',
    longDescription: 'Predictive model to identify customers likely to churn from banking services, enabling proactive retention strategies. Features classification models and business intelligence applications.',
    image: '/api/placeholder/600/400',
    tags: ['Classification', 'Predictive Analytics', 'BI'],
    githubUrl: 'https://github.com/sudarshanC00/Bank-Customer-Churn',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Classification Models'],
    rank: 18,
    tier: 'mid-tier'
  },
  {
    id: 19,
    title: 'Potato Disease Classification',
    description: 'Deep learning model for potato leaf disease detection in agriculture.',
    longDescription: 'Deep learning model to classify potato leaf diseases for agricultural applications using CNNs. Features computer vision, transfer learning, and web deployment with FastAPI.',
    image: '/api/placeholder/600/400',
    tags: ['Computer Vision', 'Agriculture', 'Deep Learning'],
    githubUrl: 'https://github.com/SudarshanC00/Potato-Disease-Classification',
    // demoUrl: 'https://potato-disease-demo.vercel.app',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'CNN', 'Agricultural AI'],
    rank: 19,
    tier: 'mid-tier'
  },
  {
    id: 20,
    title: 'Smishing Detection System',
    description: 'Machine learning classifier for detecting SMS phishing attacks.',
    longDescription: 'Machine learning classifier to detect potential smishing (SMS phishing) attacks, providing security against fraudulent text messages. Features text classification and cybersecurity applications.',
    image: '/api/placeholder/600/400',
    tags: ['Cybersecurity', 'Text Classification', 'NLP'],
    githubUrl: 'https://github.com/SudarshanC00/Smishing',
    techStack: ['Python', 'Scikit-learn', 'NLTK', 'Text Classification'],
    rank: 20,
    tier: 'mid-tier'
  },
  {
    id: 21,
    title: 'CDC Diabetes Classification GPU Comparison',
    description: 'GPU acceleration performance comparison for diabetes classification.',
    longDescription: 'Compares GPU acceleration performance for diabetes classification using CDC diabetes dataset. Analyzes model training efficiency across different hardware configurations.',
    image: '/api/placeholder/600/400',
    tags: ['GPU Computing', 'Healthcare', 'Benchmarking'],
    githubUrl: 'https://github.com/SudarshanC00/cdc_diabetes_classification_acceleration_comparison',
    techStack: ['Python', 'GPU Computing', 'Machine Learning', 'Healthcare Analytics'],
    rank: 21,
    tier: 'mid-tier'
  },
  {
    id: 22,
    title: 'Tax Assistance Chatbot',
    description: 'Conversational AI chatbot providing tax guidance and assistance.',
    longDescription: 'Conversational chatbot providing tax assistance and guidance to users. Features natural language understanding and domain-specific applications for tax-related queries.',
    image: '/api/placeholder/600/400',
    tags: ['Chatbot', 'NLP', 'Domain AI'],
    githubUrl: 'https://github.com/SudarshanC00/Tax-Assistance-Chatbot',
    techStack: ['Python', 'NLP Libraries', 'Chatbot Frameworks'],
    rank: 22,
    tier: 'mid-tier'
  },
  {
    id: 23,
    title: 'Tax Chatbot Flask API',
    description: 'Flask-based web application for tax assistance with RESTful API.',
    longDescription: 'Flask-based web application for tax assistance chatbot with RESTful API endpoints. Features backend development and API integration for tax services.',
    image: '/api/placeholder/600/400',
    tags: ['API Development', 'Flask', 'Backend'],
    githubUrl: 'https://github.com/SudarshanC00/Tax-Chatbot-flask',
    techStack: ['Python', 'Flask', 'REST APIs', 'Web Services'],
    rank: 23,
    tier: 'mid-tier'
  },
  {
    id: 24,
    title: 'CIFAR10 Image Classification',
    description: 'CNN architecture comparison on CIFAR-10 dataset for computer vision.',
    longDescription: 'Image classification project on the CIFAR-10 dataset implementing and comparing various CNN architectures. Features computer vision fundamentals and performance tuning.',
    image: '/api/placeholder/600/400',
    tags: ['Computer Vision', 'CNN', 'Deep Learning'],
    githubUrl: 'https://github.com/SudarshanC00/CIFAR10',
    techStack: ['Python', 'Deep Learning Frameworks', 'CNN Architectures'],
    rank: 24,
    tier: 'mid-tier'
  },
  {
    id: 25,
    title: 'MNIST Digit Classification',
    description: 'Neural network implementation for handwritten digit recognition.',
    longDescription: 'Classic computer vision project implementing digit classification on the MNIST dataset using neural networks. Features fundamental deep learning concepts and model training.',
    image: '/api/placeholder/600/400',
    tags: ['Computer Vision', 'Neural Networks', 'Deep Learning'],
    githubUrl: 'https://github.com/SudarshanC00/MNIST-Digit-Classification',
    techStack: ['Python', 'TensorFlow', 'Neural Networks', 'Computer Vision'],
    rank: 25,
    tier: 'entry-level'
  },
  {
    id: 26,
    title: 'Pizzeria Management System',
    description: 'Restaurant management system built with C# and .NET framework.',
    longDescription: 'Restaurant management or ordering system built with C#. Features object-oriented programming and .NET development for restaurant operations.',
    image: '/api/placeholder/600/400',
    tags: ['.NET', 'C#', 'Software Engineering'],
    githubUrl: 'https://github.com/SudarshanC00/Pizzeria',
    techStack: ['C#', '.NET Framework', 'OOP'],
    rank: 26,
    tier: 'entry-level'
  },
  {
    id: 27,
    title: 'ASP.NET Core Angular Web API',
    description: 'Full-stack application with ASP.NET Core backend and Angular frontend.',
    longDescription: 'Full-stack application integrating ASP.NET Core Web API backend with Angular frontend. Features RESTful APIs, TypeScript, and SPA development.',
    image: '/api/placeholder/600/400',
    tags: ['Full-Stack', 'ASP.NET', 'Angular'],
    githubUrl: 'https://github.com/SudarshanC00/Asp.Net-core-Web-API-integrated-Angular',
    techStack: ['TypeScript', 'Angular', 'ASP.NET Core', 'C#', 'Web APIs'],
    rank: 27,
    tier: 'entry-level'
  },
  {
    id: 28,
    title: 'Ziggy Food Delivery WebApp',
    description: 'Food delivery web application with ordering and management features.',
    longDescription: 'Food delivery web application with ordering and delivery management features. Implements full-stack web development with JavaScript and Node.js.',
    image: '/api/placeholder/600/400',
    tags: ['Web Development', 'Full-Stack', 'JavaScript'],
    githubUrl: 'https://github.com/SudarshanC00/Ziggy-Food-Delivery-WebApp',
    techStack: ['JavaScript', 'Node.js', 'Web Development Frameworks'],
    rank: 28,
    tier: 'entry-level'
  },
  {
    id: 29,
    title: 'New York Times Project',
    description: 'Data analysis project working with New York Times APIs and datasets.',
    longDescription: 'Data analysis or application project working with New York Times data/APIs. Features API integration, data analysis, and web scraping techniques.',
    image: '/api/placeholder/600/400',
    tags: ['API Integration', 'Data Analysis', 'Web Scraping'],
    githubUrl: 'https://github.com/SudarshanC00/New-York-Times-Project',
    techStack: ['Python', 'APIs', 'Data Analysis Libraries'],
    rank: 29,
    tier: 'entry-level'
  },
  {
    id: 30,
    title: 'VisionAI HackDavis',
    description: 'Hackathon project focusing on computer vision applications for social good.',
    longDescription: 'Hackathon project for HackDavis focusing on computer vision applications using AI. Features rapid prototyping and problem-solving for social impact.',
    image: '/api/placeholder/600/400',
    tags: ['Computer Vision', 'Hackathon', 'AI for Good'],
    githubUrl: 'https://github.com/SudarshanC00/VisionAI-HackDavis',
    techStack: ['Python', 'Computer Vision Libraries', 'AI Applications'],
    rank: 30,
    tier: 'entry-level'
  },
  {
    id: 31,
    title: 'Techademy Management System',
    description: 'Educational management system for academy administration.',
    longDescription: 'Educational management system built with C# for academy administration and student management. Features software engineering and system design for educational institutions.',
    image: '/api/placeholder/600/400',
    tags: ['.NET', 'Education', 'System Design'],
    githubUrl: 'https://github.com/SudarshanC00/Techademy-Management-System',
    techStack: ['C#', '.NET Framework', 'Database Management'],
    rank: 31,
    tier: 'entry-level'
  },
  {
    id: 32,
    title: 'SudarshanC00 Profile',
    description: 'GitHub profile README repository for personal branding.',
    longDescription: 'GitHub profile README repository. Features documentation and personal branding for professional profile management.',
    image: '/api/placeholder/600/400',
    tags: ['Documentation', 'Personal Branding'],
    githubUrl: 'https://github.com/SudarshanC00/Sudarshan-Portfolio',
    techStack: ['Markdown', 'Documentation'],
    rank: 32,
    tier: 'entry-level'
  }
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
const allTiers = Array.from(new Set(projects.map(p => p.tier)));

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'top-tier': return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
    case 'high-tier': return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white';
    case 'mid-tier': return 'bg-gradient-to-r from-green-400 to-green-600 text-white';
    case 'entry-level': return 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
    default: return 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
  }
};

const getTierIcon = (tier: string) => {
  switch (tier) {
    case 'top-tier': return '🏆';
    case 'high-tier': return '🥈';
    case 'mid-tier': return '🥉';
    case 'entry-level': return '📊';
    default: return '📁';
  }
};

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = projects.filter(project => {
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    const matchesTier = !selectedTier || project.tier === selectedTier;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesTier && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const resetFilters = () => {
    setSelectedTag(null);
    setSelectedTier(null);
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="text-gray-600 dark:text-gray-400" size={20} />
              <button
                onClick={resetFilters}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  !selectedTag && !selectedTier
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                All Projects
              </button>
              
              {/* Tier Filters */}
              <div className="flex items-center gap-2 ml-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Tier:</span>
                {allTiers.map(tier => (
                  <button
                    key={tier}
                    onClick={() => {
                      setSelectedTier(tier === selectedTier ? null : tier);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
                      selectedTier === tier
                        ? getTierColor(tier)
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    <span>{getTierIcon(tier)}</span>
                    <span className="capitalize">{tier.replace('-', ' ')}</span>
                  </button>
                ))}
              </div>
              
              {/* Tag Filters */}
              <div className="flex items-center gap-2 ml-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Tags:</span>
                {allTags.slice(0, 8).map(tag => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(tag === selectedTag ? null : tag);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedTag === tag
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800/50 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full lg:w-64 backdrop-blur-sm"
              />
              <div className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                {filteredProjects.length} projects
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 relative border border-gray-700"
              >
                {/* Tier Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${getTierColor(project.tier)}`}>
                    <span>{getTierIcon(project.tier)}</span>
                    <span>Rank #{project.rank}</span>
                  </div>
                </div>
                
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-600 relative overflow-hidden">
                  {project.image && !project.image.includes('/api/placeholder/') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain bg-gray-800"
                      onError={(e) => {
                        // Fallback to gradient if image fails to load
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div 
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ display: project.image && !project.image.includes('/api/placeholder/') ? 'none' : 'flex' }}
                  >
                    <span className="text-white text-2xl font-bold text-center px-4">{project.title}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-yellow-400 rounded border border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-12">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === 1
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Previous
            </button>
            
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentPage === pageNumber
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Next
            </button>
          </div>
        )}
        
        {/* Results Summary */}
        <div className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
          Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, filteredProjects.length)} of {filteredProjects.length} projects
          {selectedTier && (
            <span className="ml-2">
              in <span className="font-medium capitalize">{selectedTier.replace('-', ' ')}</span> tier
            </span>
          )}
          {selectedTag && (
            <span className="ml-2">
              with tag <span className="font-medium">{selectedTag}</span>
            </span>
          )}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found matching your criteria.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-200 shadow-lg"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}


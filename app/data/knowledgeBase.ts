// Knowledge base for RAG chatbot
// This contains all the portfolio content that the chatbot can reference

export interface KnowledgeEntry {
  id: string;
  category: string;
  content: string;
  metadata?: Record<string, any>;
}

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: 'about-1',
    category: 'About',
    content: 'Sudarshan Chikkathimmaiah is a Master\'s student in Artificial Intelligence at San José State University. He is currently pursuing advanced studies in AI, focusing on NLP, Computer Vision, and Large Language Models.',
  },
  {
    id: 'education-1',
    category: 'Education',
    content: 'Master of Science in Artificial Intelligence at San José State University (Current).',
  },
  {
    id: 'skills-1',
    category: 'Skills',
    content: 'Technical skills include: Python (95%), TensorFlow/PyTorch (90%), Natural Language Processing (88%), Computer Vision (85%), Large Language Models (90%), Deep Learning (92%), Machine Learning (93%), RAG Systems (85%), Transformers (88%), and GPU Computing (80%).',
  },
  {
    id: 'research-1',
    category: 'Research',
    content: 'Research interests include: NLP & LLMs (Advanced language models and their applications), RAG Systems (Retrieval-Augmented Generation for knowledge systems), and AI Applications (Practical AI solutions for real-world problems).',
  },
  {
    id: 'project-1',
    category: 'Projects',
    content: 'Advanced RAG System: A sophisticated RAG implementation using transformer models for document retrieval and generation. Features include vector embeddings, semantic search, and multi-document context aggregation. Tech stack: Python, PyTorch, Transformers, FAISS, FastAPI. GitHub: https://github.com/sudarshan/rag-system',
  },
  {
    id: 'project-2',
    category: 'Projects',
    content: 'Computer Vision Pipeline: A comprehensive computer vision system implementing state-of-the-art models for object detection, image classification, and semantic segmentation. Optimized for GPU acceleration. Tech stack: Python, TensorFlow, OpenCV, CUDA, Docker.',
  },
  {
    id: 'project-3',
    category: 'Projects',
    content: 'NLP Sentiment Analyzer: Advanced sentiment analysis tool leveraging BERT and RoBERTa models. Supports multiple languages and provides detailed sentiment breakdowns with confidence scores. Tech stack: Python, Hugging Face, Flask, React.',
  },
  {
    id: 'project-4',
    category: 'Projects',
    content: 'LLM Fine-tuning Framework: A comprehensive toolkit for fine-tuning LLMs including data preprocessing, model training, evaluation, and deployment. Supports LoRA and full fine-tuning approaches. Tech stack: Python, PyTorch, Transformers, Weights & Biases, MLflow.',
  },
  {
    id: 'experience-1',
    category: 'Experience',
    content: 'AI Research Intern at Tech Innovation Lab (Jan 2024 - Jun 2024, San Jose, CA): Developed and optimized RAG systems for enterprise knowledge bases, fine-tuned large language models for domain-specific applications, implemented vector search pipelines using FAISS and Pinecone.',
  },
  {
    id: 'experience-2',
    category: 'Experience',
    content: 'Machine Learning Engineer at AI Solutions Inc. (Jun 2023 - Dec 2023, Remote): Built computer vision models for object detection and classification, optimized deep learning models for GPU inference, developed ML pipelines for production deployment.',
  },
  {
    id: 'experience-3',
    category: 'Experience',
    content: 'Graduate Research Assistant at SJSU AI Lab (Sep 2023 - Present, San Jose, CA): Researching advanced NLP techniques for low-resource languages, publishing papers on transformer model efficiency, mentoring undergraduate students in AI/ML projects.',
  },
  {
    id: 'publication-1',
    category: 'Publications',
    content: 'Efficient Fine-tuning of Large Language Models for Domain-Specific Applications (NeurIPS 2024): Novel approach to fine-tuning large language models that reduces computational requirements by 60% while maintaining performance. Authors: Sudarshan Chikkathimmaiah, Dr. Jane Smith, Dr. John Doe.',
  },
  {
    id: 'publication-2',
    category: 'Publications',
    content: 'Retrieval-Augmented Generation for Multi-Document Question Answering (ACL 2024): Improved RAG architecture that handles multiple documents more effectively by implementing hierarchical attention mechanisms and cross-document reasoning. Authors: Sudarshan Chikkathimmaiah, Dr. Jane Smith.',
  },
  {
    id: 'publication-3',
    category: 'Publications',
    content: 'Transformer-based Models for Low-Resource Language Processing (EMNLP 2023): Explores transfer learning strategies for applying transformer models to low-resource languages, achieving state-of-the-art results on several benchmark datasets.',
  },
  {
    id: 'contact-1',
    category: 'Contact',
    content: 'Contact information: Email: sudarshan.chikkathimmaiah@sjsu.edu, LinkedIn: https://linkedin.com/in/sudarshan-chikkathimmaiah, GitHub: https://github.com/sudarshan',
  },
];

// Simple semantic search function
export function searchKnowledgeBase(query: string, limit: number = 3): KnowledgeEntry[] {
  const lowerQuery = query.toLowerCase();
  const keywords = lowerQuery.split(/\s+/).filter(k => k.length > 2);
  
  // Score each entry based on keyword matches
  const scored = knowledgeBase.map(entry => {
    const content = entry.content.toLowerCase();
    const category = entry.category.toLowerCase();
    
    let score = 0;
    keywords.forEach(keyword => {
      if (content.includes(keyword)) score += 2;
      if (category.includes(keyword)) score += 1;
      if (entry.content.toLowerCase().includes(keyword)) score += 1;
    });
    
    // Boost score for exact phrase matches
    if (content.includes(lowerQuery)) score += 5;
    
    return { entry, score };
  });
  
  // Sort by score and return top results
  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.entry);
}


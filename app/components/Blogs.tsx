'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Clock } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link?: string;
  tags: string[];
}

const blogs: Blog[] = [
  {
    id: 1,
    title: 'Understanding RAG Systems: A Comprehensive Guide',
    excerpt: 'Dive deep into Retrieval-Augmented Generation systems, exploring how they combine the power of information retrieval with large language models to create more accurate and context-aware AI applications.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI/ML',
    link: 'https://medium.com/@sudarshan.c1326/understanding-rag-systems-a-comprehensive-guide-b9f7f7d3b943',
    tags: ['RAG', 'LLM', 'NLP', 'AI'],
  },
  {
    id: 2,
    title: 'Fine-tuning Large Language Models: Best Practices',
    excerpt: 'Learn the essential techniques and strategies for fine-tuning LLMs effectively, including parameter-efficient methods, data preparation, and evaluation approaches.',
    date: '2024-02-20',
    readTime: '12 min read',
    category: 'Machine Learning',
    link: 'https://example.com/blog/llm-finetuning',
    tags: ['LLM', 'Fine-tuning', 'Deep Learning'],
  },
  {
    id: 3,
    title: 'Building Production-Ready Computer Vision Pipelines',
    excerpt: 'A practical guide to deploying computer vision models in production, covering optimization, scaling, and monitoring strategies for real-world applications.',
    date: '2024-03-10',
    readTime: '10 min read',
    category: 'Computer Vision',
    link: 'https://example.com/blog/cv-pipelines',
    tags: ['Computer Vision', 'MLOps', 'Production'],
  },
  {
    id: 4,
    title: 'The Future of AI: Trends and Predictions for 2024',
    excerpt: 'Exploring the latest trends in artificial intelligence, from multimodal models to AI agents, and what they mean for the future of technology.',
    date: '2024-04-05',
    readTime: '6 min read',
    category: 'AI/ML',
    link: 'https://example.com/blog/ai-trends-2024',
    tags: ['AI', 'Trends', 'Future Tech'],
  },
];

export default function Blogs() {
  return (
    <section
      id="blogs"
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
            Blogs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-gray-400" size={20} />
                  <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-gray-600">
                    {blog.category}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {blog.title}
              </h3>

              <p className="text-gray-400 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {blog.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded border border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {blog.link && (
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                >
                  <span className="text-sm">Read More</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Check out more articles on my{' '}
            <a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              blog
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}


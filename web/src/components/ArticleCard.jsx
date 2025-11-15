import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ArticleCard({ article }) {
  const id = encodeURIComponent(article.url);
  return (
    <motion.article whileHover={{ scale: 1.02 }} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow">
      <Link to={`/article/${id}`} state={{ article }}>
        <div className="h-44 w-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          {article.image && <img src={article.image} alt="" className="w-full h-full object-cover" />}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">{article.description}</p>
        </div>
      </Link>
    </motion.article>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function Header({ dark, setDark }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.h1 initial={{ x: -30 }} animate={{ x: 0 }} className="text-2xl font-bold">منصة الأخبار الاحترافية</motion.h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setDark(!dark)} className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700">{dark ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </header>
  );
}

import React from 'react';

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="max-w-xl mx-auto mb-6">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ابحث عن أخبار، مواضيع، أو مصادر"
        className="w-full p-3 rounded-xl shadow-sm border"
      />
    </div>
  );
}

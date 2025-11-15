import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function Article() {
  const loc = useLocation();
  const { id } = useParams();
  const article = loc.state?.article;

  if (!article) return <div>لم يتم العثور على المقالة</div>;

  return (
    <article className="prose dark:prose-invert mx-auto">
      <h1>{article.title}</h1>
      <p className="text-sm text-gray-500">{article.source?.name} — {new Date(article.publishedAt).toLocaleString()}</p>
      {article.image && <img src={article.image} alt="" className="rounded-lg" />}
      <p>{article.content || article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-600">اقرأ المصدر الأصلي</a>
    </article>
  );
}

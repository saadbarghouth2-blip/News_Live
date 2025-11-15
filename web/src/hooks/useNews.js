import { useState, useEffect, useRef } from 'react';
import { fetchNews } from '../api';
import debounce from 'lodash.debounce';

export default function useNews(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const doFetch = async (q, p = 1) => {
    setLoading(true);
    try {
      const res = await fetchNews({ q, page: p, max: 12, lang: 'ar' });
      const list = res.articles || [];
      if (p === 1) setArticles(list);
      else setArticles(prev => [...prev, ...list]);
      setHasMore(list.length > 0);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const debounced = useRef(debounce((q) => { doFetch(q, 1); }, 500)).current;

  useEffect(() => { debounced(query); return () => debounced.cancel(); }, [query]);

  const loadMore = () => {
    const next = page + 1;
    setPage(next);
    doFetch(query, next);
  };

  return { query, setQuery, articles, loading, loadMore, hasMore };
}

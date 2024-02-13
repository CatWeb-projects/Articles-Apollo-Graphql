import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ArticlesItem } from './ArticlesItem';
import { ArticlesProps } from '../../interface/articles.interface';
import { getArticles } from '../services/api';

import './Articles.scss';

export const Articles = () => {
  const [items, setItems] = useState(10);
  const [scrollTop, setScrollTop] = useState<number>();
  const ref = useRef<any>(null);
  const loadingDataRef = useRef<any>(false);
  const { loading, error, data } = useQuery(getArticles(items));

  const articles = useMemo(() => data?.contents, [data?.contents])

  // const handleScroll = () => {
  //   if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
  //     return;
  //   }
  //   setItems(items + 10);
  // };

  const handleScroll = (event: any) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  useEffect(() => {
    const { clientHeight, scrollHeight } = ref?.current;
    if (!loadingDataRef.current) {
      if ((scrollTop + clientHeight ) >= scrollHeight - 20) {
        loadingDataRef.current = true
        setItems(items + 10);
      }
    }
    
    return () => {
      loadingDataRef.current = false
    }
  }, [scrollTop, items]);

  console.log(scrollTop)
  console.log(items, 'data')
  
  return (
    <div className="articles">
      <h2>Сегодня</h2>
      {loading && <div>...loading</div>}

      <div className="articles__wrapper" ref={ref} onScroll={handleScroll}>
        {articles?.length ? articles?.map((article: ArticlesProps) => (
          <ArticlesItem article={article}  key={article.id} />
        )): (
          <div>No articles</div>
        )}
      </div>

      {error && <div>{error?.message}</div>}
    </div>
  )
}
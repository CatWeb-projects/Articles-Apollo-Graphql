import { useEffect, useMemo, useRef, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ArticlesItem } from './ArticlesItem';
import { ArticlesProps } from '../../interface/articles.interface';
import { getArticles } from '../../services/api';

import './Articles.scss';

export const Articles = () => {
  const [additionalArticles, setAdditionalArticles] = useState<number>(10);
  const [articles, setArticles] = useState<ArticlesProps[]>([]);
  const [scrollTop, setScrollTop] = useState<number>();
  const ref = useRef<HTMLDivElement>(null);
  const loadingDataRef = useRef<boolean>(false);
  const { loading, error, data } = useQuery(getArticles(additionalArticles));

  useEffect(() => {
    if (!loading && loadingDataRef?.current) {
      loadingDataRef.current = false
    }
  }, [loading])

  useEffect(() => {
    if (data?.contents?.length > 0) {
      setArticles((prev) => [...prev, ...data?.contents])
    }
  }, [data?.contents])

  const handleScroll = (event: { currentTarget: { scrollTop: number }}) => {
    if (!loadingDataRef?.current) {
      setScrollTop(event.currentTarget.scrollTop);
    }
  };

  useEffect(() => {
    const { clientHeight, scrollHeight } = ref?.current!;
    if (!loadingDataRef.current) {
      if ((scrollTop! + clientHeight ) >= scrollHeight - 20) {
        loadingDataRef.current = true
        setAdditionalArticles((i) => i + 10);
        // ref.current.scrollTo({
        //   top: scrollHeight,
        //   behavior: "smooth",
        // });
      }
    }
    
    return () => {
      loadingDataRef.current = false
    }
    // eslint-disable-next-line
  }, [scrollTop]);

  useMemo(() => articles, [articles])
  
  return (
    <div className="articles">
      <h2>Сегодня</h2>
      {loading && <div>...loading</div>}

      <div className="articles__wrapper" ref={ref} onScroll={handleScroll}>
        {articles?.length > 0 && articles?.map((article: ArticlesProps) => (
          <ArticlesItem article={article}  key={article.id} />
        ))}
      </div>
      
      {articles?.length === 0 && !loading && (
         <div>No articles</div>
      )}

      {error && <div>{error?.message}</div>}
    </div>
  )
}
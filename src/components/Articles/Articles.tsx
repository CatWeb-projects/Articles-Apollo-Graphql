import React from 'react';
import { useQuery } from '@apollo/client';
import { ArticlesItem } from './ArticlesItem';
import { ArticlesProps } from '../../interface/articles.interface';
import { getArticles } from '../services/api';

import './Articles.scss';

export const Articles = () => {
  const { loading, error, data } = useQuery(getArticles);
  
  return (
    <div className="articles">
      <h2>Сегодня</h2>
      {loading && <div>...loading</div>}

      <div className="articles__wrapper">
        {data?.contents?.length ? data?.contents?.map((article: ArticlesProps) => (
          <ArticlesItem article={article} key={article.id} />
        )): (
          <div>No articles</div>
        )}
      </div>

      {error && <div>{error?.message}</div>}
    </div>
  )
}
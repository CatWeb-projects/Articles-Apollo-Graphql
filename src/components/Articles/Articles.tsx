import React from 'react';
import { useQuery, gql } from '@apollo/client';

import './Articles.scss';
import { ArticlesItem } from './ArticlesItem';
import { ArticlesProps } from '../../interface/articles.interface';

const getArticles = gql`
query articles {
  contents(
    project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
    lang: "ru", 
    skip: 0, 
    take: 10
  ) {
    id,
    url,
    lang,
    title {
      short
    }
    description {
      intro
    }
    banner
  }
}
`;

export const Articles = () => {
  const { loading, error, data } = useQuery(getArticles);
  console.log(data, 'data')
  return (
    <div className="articles">
      <h2>Сегодня</h2>
      {loading && <div>...loading</div>}
      {data?.contents?.map((article: ArticlesProps) => (
        <ArticlesItem article={article} key={article.id} />
      ))}
    </div>
  )
}
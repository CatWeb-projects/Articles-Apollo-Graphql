import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getArticle } from '../../components/services/api';
import './ArticlesPage.scss';

const ArticlePage = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(getArticle(params.url));
  const article =  useMemo(() => data?.content, [data?.content]);

  return (
    <div className="article-page">
      {loading && <div>...loading</div>}
      {error && <div>{error.message}</div>}
      {article && (
        <div className="article-page__wrapper">
          <h1 className="article-page__title">{article?.title?.short}</h1>
          <h2 className="article-page__description">{article?.description?.intro}</h2>
          <div className="article-page__banner">
            <img src={`https://i.simpalsmedia.com/point.md/news/900x900/${article.thumbnail}`} alt={article.url} />
          </div>
        </div>
      )}
    </div>
  )
}

export default ArticlePage;

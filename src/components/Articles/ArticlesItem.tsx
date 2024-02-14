import React from 'react';
import { ArticlesProps } from '../../interface/articles.interface';

interface Props {
  article: ArticlesProps;
}

export const ArticlesItem = ({ article }: Props) => {
  return (
    <article>
      <div className="article">
        <div className="article__image">
          <a href={`/${article?.lang}/${article?.url}`}>
            <img src={`https://i.simpalsmedia.com/point.md/news/370x194/${article?.thumbnail}`} alt={article.url} />
          </a>
        </div>

        <div className="article__content">
          <a href={`/${article.lang}/${article.url}`}>
            <h3 className="article__title">
              {article?.title?.short}
            </h3>
          </a>
          
          <span className="article__description">{article?.description?.intro}</span>
        </div>
      </div>
    </article>
  )
}
import React from 'react';
import { ArticlesProps } from '../../interface/articles.interface';

interface Props {
  article: ArticlesProps
}

export const ArticlesItem = ({ article }: Props) => {
  return (
    <div className="article">
      <div>
        <img src={article.banner} alt={article.url} />
      </div>
      <div>
        <h2>
          {article.title.short}
        </h2>
        <span>{article.description.intro}</span>
      </div>
    </div>
  )
}
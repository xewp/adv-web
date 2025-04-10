// ArticlePage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';


function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  return (
    <>
      <h1>{article.title}</h1>
      <h2>{article.name}</h2>
      {article.content.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </>
  );
}

export default ArticlePage;
import React from 'react';
import ArticleList from '../../components/ArticleList';  // Adjusted path
import articles from '../../article-content';           // Adjusted path

function ArticleListPage() {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </>
  );
}

export default ArticleListPage;
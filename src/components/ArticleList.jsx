import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ArticleList.css';
import articles from '../article-content'; // Import the articles data

function ArticleList() {
  return (
    <div className="article-list-page">
      <div className="article-list-header">
        <h1>JDM Knowledge Base</h1>
        <p>Deep dives into Japanese automotive culture, engineering, and history</p>
      </div>
      
      <div className="article-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <div className="article-image-container">
              <img src={article.image} alt={article.title} className="article-image" />
              <span className="article-category">{article.category}</span>
            </div>
            <div className="article-content">
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-read-time">{article.readTime}</span>
              </div>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-excerpt">{article.excerpt}</p>
              <Link to={`/articles/${article.name}`} className="read-more-btn">Read Article</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
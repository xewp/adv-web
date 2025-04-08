import React from 'react';
import { Link } from 'react-router-dom';
import jdmArticle1 from '../assets/r34.jpg';
import jdmArticle2 from '../assets/stnace.jpg';
import jdmArticle3 from '../assets/vs.jpg';
import '../styles/ArticleList.css';


function ArticleList() {
  const articles = [
    {
      id: 1,
      title: "The Legend of the R34 Skyline GT-R",
      excerpt: "Why the R34 remains the holy grail for JDM enthusiasts worldwide",
      image: jdmArticle1,
      date: "June 15, 2023",
      readTime: "8 min read",
      category: "Legends"
    },
    {
      id: 2,
      title: "The Art of JDM Stance",
      excerpt: "From bosozoku to VIP: Understanding Japanese car subcultures",
      image: jdmArticle2,
      date: "May 28, 2023",
      readTime: "6 min read",
      category: "Culture"
    },
    {
      id: 3,
      title: "2JZ vs RB26: The Ultimate JDM Engine Showdown",
      excerpt: "Technical breakdown of Japan's most legendary powerplants",
      image: jdmArticle3,
      date: "April 10, 2023",
      readTime: "10 min read",
      category: "Engineering"
    }
  ];

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
              <Link to={`/articles/${article.id}`} className="read-more-btn">Read Article</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
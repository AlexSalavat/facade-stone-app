// src/components/news/NewsList.jsx
import React from "react";
import { news } from "../../data/news";
import "./NewsList.css"; // для стилей, создадим ниже
import { useNavigate } from "react-router-dom";

const NewsList = () => {
  const navigate = useNavigate();

  return (
    <div className="news-list">
      <h2 className="news-title-main">Новости</h2>
      <div className="news-cards">
        {news.map(item => (
          <div className="news-card" key={item.id} onClick={() => item.link && navigate(item.link)}>
            {item.image && (
              <img src={item.image} alt={item.title} className="news-card-image" />
            )}
            <div className="news-card-info">
              <div className="news-card-date">{item.date}</div>
              <div className="news-card-title">{item.title}</div>
              <div className="news-card-content">{item.content}</div>
              {item.link && (
                <div className="news-card-link">Подробнее →</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;

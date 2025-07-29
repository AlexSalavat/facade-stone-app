import React from "react";
import { news } from "../../data/news";
import "../../styles/NewsGrid.css";
import BackButton from "../BackButton";

const NewsGrid = () => (
  <div>
    <BackButton />
    <h2 className="news-title-main">Новости</h2>
    <div className="news-cards-grid">
      {news.map(item => (
        <div className="news-card-simple" key={item.id}>
          <div className="news-card-imgwrap">
            <img src={item.image} alt={item.title} className="news-card-img" />
          </div>
          <div className="news-card-texts">
            <div className="news-card-title">{item.title}</div>
            <div className="news-card-content">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default NewsGrid;

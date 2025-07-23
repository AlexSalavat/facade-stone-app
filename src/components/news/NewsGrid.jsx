import React from "react";
import "../../styles/InfoGrid.css";
import BackButton from "../BackButton";
import { news } from "../../data/news";

const NewsGrid = () => (
  <div>
    <BackButton />
    <h2 className="info-title-main">Новости</h2>
    <div className="info-grid">
      {news.map((item, idx) => (
        <div className="info-card" key={idx}>
          <img src={item.image} alt={item.title} className="info-card-img" />
          <div className="info-card-title">{item.title}</div>
          <div className="info-card-content">{item.content}</div>
        </div>
      ))}
    </div>
  </div>
);

export default NewsGrid;

import React from "react";
import "../../styles/InfoGrid.css";
import BackButton from "../BackButton";

const newsData = [
  {
    icon: "🔥",
    title: "Новости индустрии",
    content: "Тренды, новые препараты, важные законы.",
  },
  {
    icon: "🎓",
    title: "Анонсы семинаров",
    content: "Вебинары и мастер-классы для косметологов.",
  },
  {
    icon: "🤝",
    title: "Партнёрские акции",
    content: "Скидки на обучение, выгодные предложения.",
  },
  {
    icon: "🆕",
    title: "Поступления",
    content: "Филлеры и другие новинки — читайте подробнее!",
  },
  {
    icon: "💬",
    title: "Интервью с экспертами",
    content: "Советы и опыт лидеров мнений.",
  },
];

const NewsGrid = () => (
  <div>
    <BackButton />
    <h2 className="info-title-main">Новости</h2>
    <div className="info-grid">
      {newsData.map((item, idx) => (
        <div className="info-card" key={idx}>
          <div className="info-card-icon">{item.icon}</div>
          <div className="info-card-title">{item.title}</div>
          <div className="info-card-content">{item.content}</div>
        </div>
      ))}
    </div>
  </div>
);

export default NewsGrid;

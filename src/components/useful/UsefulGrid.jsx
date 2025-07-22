import React from "react";
import "../../styles/InfoGrid.css";
import BackButton from "../BackButton";

const usefulData = [
  {
    icon: "📄",
    title: "Протоколы процедур",
    content: "Краткие чек-листы, PDF, видео.",
  },
  {
    icon: "💊",
    title: "База знаний",
    content: "Сравнения препаратов, схемы, сочетания.",
  },
  {
    icon: "❓",
    title: "Частые вопросы",
    content: "Разбор сложных моментов, советы.",
  },
  {
    icon: "📊",
    title: "Таблицы дозировок",
    content: "Всё для удобства расчётов.",
  },
  {
    icon: "📱",
    title: "Маркетинг и шаблоны",
    content: "Готовые сторис, посты, PDF.",
  },
  {
    icon: "⚖️",
    title: "Правовые шаблоны",
    content: "Договора, памятки, работа с ИП.",
  },
  {
    icon: "📚",
    title: "Словарь терминов",
    content: "Для новичков и профи.",
  },
  {
    icon: "🤖",
    title: "Гайды и Telegram",
    content: "Гайды по приложению, помощь ИИ.",
  },
];

const UsefulGrid = () => (
  <div>
    <BackButton />
    <h2 className="info-title-main">Полезное</h2>
    <div className="info-grid">
      {usefulData.map((item, idx) => (
        <div className="info-card" key={idx}>
          <div className="info-card-icon">{item.icon}</div>
          <div className="info-card-title">{item.title}</div>
          <div className="info-card-content">{item.content}</div>
        </div>
      ))}
    </div>
  </div>
);

export default UsefulGrid;

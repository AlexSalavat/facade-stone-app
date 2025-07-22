// src/components/useful/UsefulList.jsx
import React from "react";
import { useful } from "../../data/useful";
import "../../styles/UsefulList.css";

const UsefulList = () => {
  return (
    <div className="useful-list">
      <h2 className="useful-title-main">Полезное</h2>
      <div className="useful-cards">
        {useful.map(item => (
          <div className="useful-card" key={item.id}>
            <div className="useful-card-header">
              <div className="useful-card-type">{item.type === "protocol" ? "📄" : item.type === "comparison" ? "📊" : "💡"}</div>
              <div className="useful-card-title">{item.title}</div>
            </div>
            <div className="useful-card-content">{item.content}</div>
            {item.file && (
              <a
                href={item.file}
                className="useful-card-link"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Скачать
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsefulList;

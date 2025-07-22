import React from "react";
import "../../styles/InfoGrid.css";
import BackButton from "../BackButton";
import { useful } from "../../data/useful.js";

const UsefulGrid = () => (
  <div>
    <BackButton />
    <h2 className="info-title-main">Полезное</h2>
    <div className="info-grid">
      {useful.map((item, idx) => (
        <div className="info-card" key={idx}>
          {/* Показываем иконку, если она есть */}
          {item.icon && <div className="info-card-icon">{item.icon}</div>}
          {item.image && <img src={item.image} alt={item.title} className="info-card-img" />}
          <div className="info-card-title">{item.title}</div>
          <div className="info-card-content">{item.content}</div>
        </div>
      ))}
    </div>
  </div>
);

export default UsefulGrid;

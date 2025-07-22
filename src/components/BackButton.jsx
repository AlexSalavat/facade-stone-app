import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BackButton.css";

const BackButton = ({ to = -1, label = "Назад", className = "" }) => {
  const navigate = useNavigate();
  return (
    <button className={`back-btn ${className}`} onClick={() => navigate(to)}>
      <span className="back-arrow">←</span> {label}
    </button>
  );
};

export default BackButton;

// components/BackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

const BackButton = ({ onClick, className = "" }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`back-btn ${className}`}
      onClick={onClick ? onClick : () => navigate(-1)}
      type="button"
    >
      <span className="back-arrow">&#8592;</span> Назад
    </button>
  );
};

export default BackButton;

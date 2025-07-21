import React from "react";
import { Link } from "react-router-dom";
import '../../styles/CategoryCard.css';

const CategoryCard = ({ name, image, to }) => {
  return (
    <Link to={to} className="category-card">
      <img src={image} alt={name} className="category-image" />
      <div className="category-name">{name}</div>
    </Link>
  );
};

export default CategoryCard;

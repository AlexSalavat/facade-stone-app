import React from "react";
import { Link } from "react-router-dom";
import '../../styles/CategoryCard.css';

const CategoryCard = ({ name, image, to }) => {
  return (
    <Link to={to} className="category-card">
      <div className="category-card-image-wrap">
        <img src={image} alt={name} className="category-card-image" />
      </div>
      <div className="category-name">{name}</div>
    </Link>
  );
};

export default CategoryCard;

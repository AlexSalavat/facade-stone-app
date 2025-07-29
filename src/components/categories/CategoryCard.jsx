import React from "react";
import { Link } from "react-router-dom";
import "../../styles/CategoryCard.css";

const CategoryCard = ({ name, image, to }) => (
  <Link to={to} className="category-card-link">
    <div className="category-card-img-wrap">
      <img src={image} alt={name} className="category-card-img" />
    </div>
    <div className="category-card-title">{name}</div>
  </Link>
);

export default CategoryCard;

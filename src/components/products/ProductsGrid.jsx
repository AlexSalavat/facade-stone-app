// src/components/products/ProductsGrid.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import "./ProductsGrid.css";

const ProductsGrid = () => {
  const { category } = useParams();
  const filtered = products.filter(p => p.category === category);

  return (
    <div className="products-grid">
      {filtered.length > 0 ? (
        filtered.map(product => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p>Нет товаров в этой категории.</p>
      )}
    </div>
  );
};

export default ProductsGrid;

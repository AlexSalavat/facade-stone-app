// src/components/ProductsGrid.jsx
import React from "react";
import ProductCard from "./ProductCard";
import "./ProductsGrid.css";

export default function ProductsGrid({ products, onProductClick }) {
  if (!products?.length) {
    return <div className="products-grid-empty">Нет товаров</div>;
  }
  return (
    <div className="products-grid">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          image={item.images[0]}
          name={item.name}
          onMore={() => onProductClick(item)}
        />
      ))}
    </div>
  );
}

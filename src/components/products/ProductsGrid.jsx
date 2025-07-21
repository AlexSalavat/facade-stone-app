// components/ProductsGrid.jsx
import React from 'react';
import ProductCard from './ProductCard';
import './ProductsGrid.css';

const ProductsGrid = ({ products }) => (
  <div className="products-grid">
    {products.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductsGrid;

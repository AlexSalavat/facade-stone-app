import React from 'react';
import ProductCard from './ProductCard';
import '../../styles/ProductsGrid.css';

const ProductsGrid = ({ products }) => (
  <div className="products-grid">
    {products && products.length > 0 ? (
      products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))
    ) : (
      <div className="no-products">В этой категории пока нет товаров.</div>
    )}
  </div>
);

export default ProductsGrid;

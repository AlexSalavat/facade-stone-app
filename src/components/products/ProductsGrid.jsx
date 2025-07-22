// src/components/products/ProductsGrid.jsx

import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from './ProductCard';
import BackButton from '../BackButton';
import '../../styles/ProductsGrid.css';

const PRODUCTS_PER_PAGE = 10;
const PAGE_COUNT = 2;

function getCardsToRender(products, page) {
  const fullProducts = [...products];
  while (fullProducts.length < PRODUCTS_PER_PAGE * PAGE_COUNT) {
    fullProducts.push({ id: `placeholder-${fullProducts.length}`, placeholder: true });
  }
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  return fullProducts.slice(start, start + PRODUCTS_PER_PAGE);
}

const ProductsGrid = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const filteredProducts = products.filter(p => p.category === category);

  const [page, setPage] = useState(1);
  const cardsToRender = getCardsToRender(filteredProducts, page);

  return (
    <div>
      <div style={{ marginBottom: "8px" }}>
        <BackButton to="/catalog" />
      </div>
      <div className="products-grid">
        {cardsToRender.map((product, idx) => (
          <ProductCard key={product.id || idx} product={product} />
        ))}
      </div>
      <div className="pagination pagination-center">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
          &lt;
        </button>
        {[...Array(PAGE_COUNT)].map((_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setPage(idx + 1)}
            className={page === idx + 1 ? 'active' : ''}
          >
            {idx + 1}
          </button>
        ))}
        <button onClick={() => setPage(p => Math.min(PAGE_COUNT, p + 1))} disabled={page === PAGE_COUNT}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductsGrid;

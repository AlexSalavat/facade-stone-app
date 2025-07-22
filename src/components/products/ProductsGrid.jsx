import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../../styles/ProductsGrid.css';

const PRODUCTS_PER_PAGE = 10;
const PAGE_COUNT = 2; // всегда две страницы

function getCardsToRender(products, page) {
  // формируем массив на 20 карточек всегда (можно больше, если нужно)
  const fullProducts = [...products];
  while (fullProducts.length < PRODUCTS_PER_PAGE * PAGE_COUNT) {
    fullProducts.push({ id: `placeholder-${fullProducts.length}`, placeholder: true });
  }
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  return fullProducts.slice(start, start + PRODUCTS_PER_PAGE);
}

const ProductsGrid = ({ products }) => {
  const [page, setPage] = useState(1);

  const cardsToRender = getCardsToRender(products, page);

  return (
    <div>
      <div className="products-grid">
        {cardsToRender.map((product, idx) => (
          <ProductCard key={product.id || idx} product={product} />
        ))}
      </div>
      <div className="pagination">
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

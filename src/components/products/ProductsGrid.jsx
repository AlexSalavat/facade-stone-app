import React, { useState } from 'react';
import ProductCard from './ProductCard';
import '../../styles/ProductsGrid.css';

const PRODUCTS_PER_PAGE = 10;

function getCardsToRender(products) {
  const count = products.length;
  const placeholders = Array.from({ length: Math.max(0, PRODUCTS_PER_PAGE - count) }, (_, i) => ({
    id: `placeholder-${i}`,
    placeholder: true,
  }));
  return [...products, ...placeholders];
}

const ProductsGrid = ({ products }) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = products.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  const cardsToRender = getCardsToRender(paginatedProducts);

  return (
    <div>
      <div className="products-grid">
        {cardsToRender.map((product, idx) => (
          <ProductCard key={product.id || idx} product={product} />
        ))}
      </div>
      {pageCount > 1 && (
        <div className="pagination">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
            &lt;
          </button>
          {Array.from({ length: pageCount }, (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => setPage(idx + 1)}
              className={page === idx + 1 ? 'active' : ''}
            >
              {idx + 1}
            </button>
          ))}
          <button onClick={() => setPage(p => Math.min(pageCount, p + 1))} disabled={page === pageCount}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;

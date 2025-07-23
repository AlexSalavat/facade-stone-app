// src/components/products/ProductsGrid.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import ProductCard from './ProductCard';
import BackButton from '../BackButton';
import '../../styles/ProductsGrid.css';

const PRODUCTS_PER_PAGE = 10;

const ProductsGrid = (props) => {
  // Берём категорию из пропов или из URL (если проп не передан)
  const params = useParams();
  const category = props.category || params.category;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const from = (page - 1) * PRODUCTS_PER_PAGE;
      const to = from + PRODUCTS_PER_PAGE - 1;
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category)
        .range(from, to);
      if (!error) setProducts(data || []);
      setLoading(false);
    }
    if (category) fetchProducts();
  }, [category, page]);

  // === ЛОГИ для диагностики ===
  console.log('category:', category);
  console.log('products:', products);

  if (!category) return <div>Не выбрана категория</div>;
  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <div style={{ marginBottom: "8px" }}>
        <BackButton to="/catalog" />
      </div>
      <div className="products-grid">
        {products.map((product, idx) => (
          <ProductCard key={product.id || idx} product={product} />
        ))}
      </div>
      {/* Пагинация */}
      <div className="pagination pagination-center">
        <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>
          &lt;
        </button>
        <button
          onClick={() => setPage(1)}
          className={page === 1 ? 'active' : ''}
        >
          1
        </button>
        <button
          onClick={() => setPage(2)}
          className={page === 2 ? 'active' : ''}
        >
          2
        </button>
        <button onClick={() => setPage(p => p + 1)}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductsGrid;

import React, { useEffect, useState } from 'react';
import './Kids.css';

function Kids() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [priceRange, setPriceRange] = useState('All');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      })
      .catch(err => console.error('Error:', err));
  }, []);

  const handleFilter = (range) => {
    setPriceRange(range);
    let filteredData = [...products];

    if (range === 'Below50') {
      filteredData = products.filter(p => p.price < 50);
    } else if (range === '50to100') {
      filteredData = products.filter(p => p.price >= 50 && p.price <= 100);
    } else if (range === 'Above100') {
      filteredData = products.filter(p => p.price > 100);
    }

    setFiltered(filteredData);
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    alert(`${product.title.slice(0, 30)}... added to cart!`);
  };

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => handleFilter('All')} className={priceRange === 'All' ? 'active' : ''}>All</button>
        <button onClick={() => handleFilter('Below50')} className={priceRange === 'Below50' ? 'active' : ''}>Below $50</button>
        <button onClick={() => handleFilter('50to100')} className={priceRange === '50to100' ? 'active' : ''}>$50 - $100</button>
        <button onClick={() => handleFilter('Above100')} className={priceRange === 'Above100' ? 'active' : ''}>Above $100</button>
      </div>

      <div className="product-container">
        {filtered.map(product => (
          <div className="product-box" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3>{product.title.slice(0, 40)}...</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <p className="category">{product.category}</p>
              <p className="rating">⭐ {product.rating.rate} ({product.rating.count})</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kids;

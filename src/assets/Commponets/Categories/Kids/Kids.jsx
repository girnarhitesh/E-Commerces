// Kids.jsx
import React, { useEffect, useState } from 'react';
import './Kids.css';

// Receive addToCart and searchQuery as props
function Kids({ addToCart, searchQuery }) { // Added searchQuery here
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [priceRange, setPriceRange] = useState('All');

    // Fetch products once on component mount
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // Initial filter can also apply search query if one exists on load
                applyFiltersAndSearch(data, priceRange, searchQuery);
            })
            .catch(err => console.error('Error:', err));
    }, []);

    // Effect to re-filter products whenever searchQuery or priceRange changes
    useEffect(() => {
        applyFiltersAndSearch(products, priceRange, searchQuery);
    }, [searchQuery, priceRange, products]); // Add products to dependency array

    // Centralized function to apply both price filter and search filter
    const applyFiltersAndSearch = (allProducts, currentPriceRange, currentSearchQuery) => {
        let currentFilteredData = [...allProducts];

        // Apply price filter
        if (currentPriceRange === 'Below50') {
            currentFilteredData = currentFilteredData.filter(p => p.price < 50);
        } else if (currentPriceRange === '50to100') {
            currentFilteredData = currentFilteredData.filter(p => p.price >= 50 && p.price <= 100);
        } else if (currentPriceRange === 'Above100') {
            currentFilteredData = currentFilteredData.filter(p => p.price > 100);
        }

        // Apply search filter if query exists
        if (currentSearchQuery) {
            const lowerCaseQuery = currentSearchQuery.toLowerCase();
            currentFilteredData = currentFilteredData.filter(p =>
                p.title.toLowerCase().includes(lowerCaseQuery) ||
                p.category.toLowerCase().includes(lowerCaseQuery) ||
                p.description.toLowerCase().includes(lowerCaseQuery) // Optional: search in description too
            );
        }
        setFiltered(currentFilteredData);
    };


    const handleFilter = (range) => {
        setPriceRange(range);
        // This will trigger the useEffect, which then calls applyFiltersAndSearch
    };

    const handleAddToCartClick = (product) => {
        addToCart(product);
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
                {filtered.length > 0 ? (
                    filtered.map(product => (
                        <div className="product-box" key={product.id}>
                            <img src={product.image} alt={product.title} className="product-image" />
                            <div className="product-info">
                                <h3>{product.title.slice(0, 40)}...</h3>
                                <p className="price">${product.price.toFixed(2)}</p>
                                <p className="category">{product.category}</p>
                                <p className="rating">⭐ {product.rating.rate} ({product.rating.count})</p>
                                <button className="add-to-cart-btn" onClick={() => handleAddToCartClick(product)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found matching your criteria.</p>
                )}
            </div>
        </div>
    );
}

export default Kids;
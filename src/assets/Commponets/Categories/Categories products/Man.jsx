import React, { useState } from 'react';
import "./Man.css"

const products = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        price: 2000,
        originalPrice: 2500,
        description: "Premium quality cotton t-shirt perfect for casual wear. Comfortable fit with breathable fabric.",
        image: "https://m.media-amazon.com/images/I/91FJCIXf3bL._AC_UL640_FMwebp_QL65_.jpg",
        category: "Clothing",
        rating: 4.5,
        inStock: true
    },
    {
        id: 2,
        name: "Vintage Denim Jacket",
        price: 1499,
        originalPrice: 1899,
        description: "Stylish denim jacket with classic vintage design. Durable and trendy for all seasons.",
        image: "https://m.media-amazon.com/images/I/71GfkYTUzwL._AC_UL640_FMwebp_QL65_.jpg",
        category: "Clothing",
        rating: 4.3,
        inStock: true
    },
    {
        id: 3,
        name: "Sports Running Sneakers",
        price: 1999,
        originalPrice: 2499,
        description: "Lightweight running shoes with excellent cushioning. Perfect for workouts and daily activities.",
        image: "https://m.media-amazon.com/images/I/51907OdKiFL._AC_UL640_FMwebp_QL65_.jpg",
        category: "Footwear",
        rating: 4.7,
        inStock: true
    },
    {
        id: 4,
        name: "Executive Leather Watch",
        price: 1299,
        originalPrice: 1599,
        description: "Elegant leather strap watch with precision movement. Professional look for business meetings.",
        image: "https://m.media-amazon.com/images/I/7180ItiJxwL._AC_UL640_FMwebp_QL65_.jpg",
        category: "Accessories",
        rating: 4.4,
        inStock: true
    },
    {
        id: 5,
        name: "Chronograph Sports Watch",
        price: 2299,
        originalPrice: 2799,
        description: "Multi-functional sports watch with chronograph features. Water-resistant and durable design.",
        image: "https://m.media-amazon.com/images/I/61g+iXekY5L._AC_UL640_FMwebp_QL65_.jpg",
        category: "Accessories",
        rating: 4.6,
        inStock: true
    },
    {
        id: 6,
        name: "Digital Smart Watch",
        price: 2199,
        originalPrice: 2699,
        description: "Modern digital watch with smart features. Perfect blend of technology and style.",
        image: "https://m.media-amazon.com/images/I/71e0mZ2c7tL._AC_UL640_FMwebp_QL65_.jpg",
        category: "Accessories",
        rating: 4.2,
        inStock: false
    },
    {
        id: 7,
        name: "Classic Analog Watch",
        price: 2000,
        originalPrice: 2400,
        description: "Timeless analog watch with clean design. Suitable for both casual and formal occasions.",
        image: "https://m.media-amazon.com/images/I/61blk3yGCgL._AC_UL640_FMwebp_QL65_.jpg",
        category: "Accessories",
        rating: 4.1,
        inStock: true
    },
    {
        id: 8,
        name: "Luxury Premium Watch",
        price: 3999,
        originalPrice: 4999,
        description: "High-end luxury watch with premium materials. Statement piece for special occasions.",
        image: "https://m.media-amazon.com/images/I/61i3Mb6I5yL._AC_UL640_FMwebp_QL65_.jpg",
        category: "Accessories",
        rating: 4.8,
        inStock: true
    },
    {
        id: 9,
        name: "Military Style Watch",
        price: 2400,
        originalPrice: 2900,
        description: "Rugged military-inspired watch with tactical features. Built for adventure and outdoor activities.",
        image: "https://m.media-amazon.com/images/I/7140hIQMRrL._AC_UL640_FMwebp_QL65_.jpg",
        category: "Accessories",
        rating: 4.5,
        inStock: true
    },
    {
        id: 10,
        name: "Designer Fashion Watch",
        price: 2999,
        originalPrice: 3499,
        description: "Contemporary designer watch with unique styling. Fashion-forward accessory for trendsetters.",
        image: "https://m.media-amazon.com/images/I/71ZCqEa2vBL._AC_UL640_FMwebp_QL65_.jpg",
        category: "Accessories",
        rating: 4.3,
        inStock: true
    }
];

function Man() {
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState('All');

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const categories = ['All', ...new Set(products.map(p => p.category))];
    const filteredProducts = filter === 'All' 
        ? products 
        : products.filter(p => p.category === filter);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star filled">★</span>);
        }
        
        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">★</span>);
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }
        
        return stars;
    };

    return (
        <div className="ecommerce-container">
            <div className="section-padding">
                <div className="header-section">
                    <h1 className="main-title">Men's Collection</h1>
                    <p className="main-subtitle">Discover premium quality products for the modern man</p>
                    
                    <div className="filter-section">
                        <div className="filter-buttons">
                            {categories.map(category => (
                                <button 
                                    key={category}
                                    className={`filter-btn ${filter === category ? 'active' : ''}`}
                                    onClick={() => setFilter(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div className="cart-info">
                            <span className="cart-count">Cart: {cart.length} items</span>
                        </div>
                    </div>
                </div>

                <div className="products-container">
                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="product-image-container">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="product-image"
                                        loading="lazy"
                                    />
                                    <div className="product-badge">
                                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                    </div>
                                    {!product.inStock && (
                                        <div className="out-of-stock-overlay">
                                            <span>Out of Stock</span>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="product-info">
                                    <div className="product-category">{product.category}</div>
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>
                                    
                                    <div className="product-rating">
                                        <div className="stars">
                                            {renderStars(product.rating)}
                                        </div>
                                        <span className="rating-number">({product.rating})</span>
                                    </div>
                                    
                                    <div className="product-pricing">
                                        <div className="price-container">
                                            <span className="current-price">₹{product.price.toLocaleString()}</span>
                                            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                                        onClick={() => product.inStock && addToCart(product)}
                                        disabled={!product.inStock}
                                    >
                                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

           
        </div>
    );
}

export default Man;
import React, { useState } from 'react';
import "./Kids.css";

const kidsProducts = [
    {
        id: 1,
        name: "Colorful Building Blocks Set",
        price: 1299,
        originalPrice: 1699,
        description: "Educational building blocks set with 100 pieces. Perfect for developing creativity and motor skills.",
        image: "https://images.unsplash.com/photo-1558877385-8c3b3f4b69e8?w=400&h=400&fit=crop",
        category: "Toys",
        age: "3-6 years",
        rating: 4.8,
        inStock: true,
        colors: ["Multicolor"],
        gender: "Unisex"
    },
    {
        id: 2,
        name: "Princess Party Dress",
        price: 899,
        originalPrice: 1199,
        description: "Beautiful princess dress with sparkles and tulle. Perfect for parties and special occasions.",
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop",
        category: "Baby Dresses",
        age: "2-5 years",
        rating: 4.6,
        inStock: true,
        colors: ["Pink", "Purple", "Blue"],
        gender: "Girls"
    },
    {
        id: 3,
        name: "Interactive Learning Tablet",
        price: 2199,
        originalPrice: 2799,
        description: "Educational tablet with games, songs, and learning activities. Screen-free entertainment.",
        image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=400&fit=crop",
        category: "Educational",
        age: "3-8 years",
        rating: 4.7,
        inStock: true,
        colors: ["Blue", "Pink"],
        gender: "Unisex"
    },
    {
        id: 4,
        name: "Superhero Cape & Mask Set",
        price: 649,
        originalPrice: 899,
        description: "Complete superhero costume with cape, mask, and accessories. Let imagination soar!",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        category: "Costumes",
        age: "4-10 years",
        rating: 4.5,
        inStock: true,
        colors: ["Red", "Blue", "Black"],
        gender: "Unisex"
    },
    {
        id: 5,
        name: "Soft Plush Teddy Bear",
        price: 799,
        originalPrice: 999,
        description: "Super soft and cuddly teddy bear. Perfect companion for bedtime and playtime.",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
        category: "Toys",
        age: "0-5 years",
        rating: 4.9,
        inStock: true,
        colors: ["Brown", "White", "Pink"],
        gender: "Unisex"
    },
    {
        id: 6,
        name: "Dinosaur T-Shirt",
        price: 499,
        originalPrice: 699,
        description: "Cool dinosaur printed t-shirt made from 100% cotton. Comfortable and stylish.",
        image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=400&fit=crop",
        category: "Clothing",
        age: "2-8 years",
        rating: 4.4,
        inStock: true,
        colors: ["Green", "Blue", "Orange"],
        gender: "Boys"
    },
    {
        id: 7,
        name: "Musical Piano Mat",
        price: 1599,
        originalPrice: 1999,
        description: "Large piano mat with different sounds and songs. Dance and play music together!",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
        category: "Musical",
        age: "2-6 years",
        rating: 4.6,
        inStock: false,
        colors: ["Multicolor"],
        gender: "Unisex"
    },
    {
        id: 8,
        name: "Ballet Tutu Dress",
        price: 749,
        originalPrice: 999,
        description: "Elegant ballet tutu dress with sequins. Perfect for dance classes and performances.",
        image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=400&h=400&fit=crop",
        category: "Baby Dresses",
        age: "3-7 years",
        rating: 4.5,
        inStock: true,
        colors: ["Pink", "White", "Lavender"],
        gender: "Girls"
    },
    {
        id: 9,
        name: "Remote Control Car",
        price: 1899,
        originalPrice: 2399,
        description: "Fast remote control racing car with LED lights. Hours of outdoor fun guaranteed!",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        category: "Toys",
        age: "6-12 years",
        rating: 4.7,
        inStock: true,
        colors: ["Red", "Blue", "Yellow"],
        gender: "Boys"
    },
    {
        id: 10,
        name: "Art & Craft Supply Kit",
        price: 1199,
        originalPrice: 1599,
        description: "Complete art kit with crayons, markers, stickers, and drawing pad. Unleash creativity!",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
        category: "Educational",
        age: "3-10 years",
        rating: 4.8,
        inStock: true,
        colors: ["Multicolor"],
        gender: "Unisex"
    },
    {
        id: 11,
        name: "Unicorn Onesie Pajama",
        price: 899,
        originalPrice: 1199,
        description: "Cozy unicorn onesie pajama with hood and tail. Perfect for sleepovers and playtime.",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop",
        category: "Clothing",
        age: "2-8 years",
        rating: 4.6,
        inStock: true,
        colors: ["Pink", "Purple", "White"],
        gender: "Girls"
    },
    {
        id: 12,
        name: "LEGO Compatible Train Set",
        price: 2599,
        originalPrice: 3199,
        description: "Electric train set with tracks, stations, and mini figures. Compatible with major building blocks.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        category: "Toys",
        age: "5-12 years",
        rating: 4.9,
        inStock: true,
        colors: ["Multicolor"],
        gender: "Unisex"
    }
];

function Kids() {
    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState('All');
    const [ageFilter, setAgeFilter] = useState('All');
    const [genderFilter, setGenderFilter] = useState('All');
    const [sortBy, setSortBy] = useState('featured');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const addToCart = (product) => {
        if (!product.inStock) return;
        setCart([...cart, product]);
        showNotification(`${product.name} added to cart! 🎉`);
    };

    const showNotification = (message) => {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    };

    const categories = ['All', ...new Set(kidsProducts.map(p => p.category))];
    const ageRanges = ['All', '0-2 years', '2-5 years', '3-8 years', '5-12 years'];
    const genders = ['All', 'Boys', 'Girls', 'Unisex'];

    let filteredProducts = kidsProducts;

    // Apply filters
    if (filter !== 'All') {
        filteredProducts = filteredProducts.filter(p => p.category === filter);
    }
    if (ageFilter !== 'All') {
        filteredProducts = filteredProducts.filter(p => p.age.includes(ageFilter.split('-')[0]) || p.age === ageFilter);
    }
    if (genderFilter !== 'All') {
        filteredProducts = filteredProducts.filter(p => p.gender === genderFilter || p.gender === 'Unisex');
    }

    // Sort products
    if (sortBy === 'price-low') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'age') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.age.localeCompare(b.age));
    }

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i} className="star filled">⭐</span>);
        }
        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">⭐</span>);
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }
        return stars;
    };

    const openProductModal = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = 'hidden';
    };

    const closeProductModal = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
    };

    const getAgeIcon = (age) => {
        if (age.includes('0') || age.includes('1') || age.includes('2')) return '👶';
        if (age.includes('3') || age.includes('4') || age.includes('5')) return '🧒';
        return '👦';
    };

    const getCategoryIcon = (category) => {
        const icons = {
            'Toys': '🧸',
            'Baby Dresses': '👗',
            'Educational': '📚',
            'Costumes': '🦸',
            'Musical': '🎵',
            'Clothing': '👕'
        };
        return icons[category] || '🎈';
    };

    return (
        <div className="kids-ecommerce-container">
            <div className="section-padding">
                {/* Hero Section */}
                {/* <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">Kids Collection 🎈</h1>
                        <p className="hero-subtitle">Discover amazing toys, clothes, and educational products that spark joy and creativity in every child</p>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">{kidsProducts.length}</span>
                                <span className="stat-label">Products</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">{categories.length - 1}</span>
                                <span className="stat-label">Categories</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">{cart.length}</span>
                                <span className="stat-label">In Cart</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-decorations">
                        <div className="decoration toy">🧸</div>
                        <div className="decoration star">⭐</div>
                        <div className="decoration balloon">🎈</div>
                        <div className="decoration rainbow">🌈</div>
                    </div>
                </div> */}

                {/* Filter Section */}
                <div className="filters-container">
                    <div className="filter-group">
                        <h3>🏷️ Categories</h3>
                        <div className="filter-buttons">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`filter-btn ${filter === category ? 'active' : ''}`}
                                    onClick={() => setFilter(category)}
                                >
                                    {category !== 'All' && getCategoryIcon(category)}
                                    {category}
                                    {category !== 'All' && (
                                        <span className="count">
                                            {kidsProducts.filter(p => p.category === category).length}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* <div className="filter-group">
                        <h3>👶 Age Range</h3>
                        <div className="filter-buttons">
                            {ageRanges.map(age => (
                                <button
                                    key={age}
                                    className={`filter-btn ${ageFilter === age ? 'active' : ''}`}
                                    onClick={() => setAgeFilter(age)}
                                >
                                    {age !== 'All' && getAgeIcon(age)}
                                    {age}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h3>👧👦 Gender</h3>
                        <div className="filter-buttons">
                            {genders.map(gender => (
                                <button
                                    key={gender}
                                    className={`filter-btn ${genderFilter === gender ? 'active' : ''}`}
                                    onClick={() => setGenderFilter(gender)}
                                >
                                    {gender === 'Boys' && '👦'}
                                    {gender === 'Girls' && '👧'}
                                    {gender === 'Unisex' && '👶'}
                                    {gender}
                                </button>
                            ))}
                        </div>
                    </div> */}

                    <div className="sort-section">
                        <label htmlFor="sort">Sort by:</label>
                        <select
                            id="sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="sort-select"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                            <option value="age">Age Range</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="products-container">
                    <div className="products-header">
                        <h2>🛍️ Amazing Products for Kids</h2>
                        <p>Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}</p>
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div className="product-card" key={product.id}>
                                <div className="product-image-container">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image"
                                        onClick={() => openProductModal(product)}
                                    />
                                    <div className="product-badge">
                                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                    </div>
                                    <div className="age-badge">
                                        {getAgeIcon(product.age)} {product.age}
                                    </div>
                                    <div className="product-overlay">
                                        <button
                                            className="quick-view-btn"
                                            onClick={() => openProductModal(product)}
                                        >
                                            👀 Quick View
                                        </button>
                                    </div>
                                    {!product.inStock && (
                                        <div className="out-of-stock-overlay">
                                            <span>Out of Stock</span>
                                        </div>
                                    )}
                                </div>

                                <div className="product-info">
                                    <div className="product-header">
                                        <div className="category-info">
                                            <span className="category-icon">{getCategoryIcon(product.category)}</span>
                                            <span className="product-category">{product.category}</span>
                                        </div>
                                        <div className="gender-badge">{product.gender}</div>
                                    </div>

                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>

                                    <div className="product-details">
                                        <div className="rating-section">
                                            <div className="stars">
                                                {renderStars(product.rating)}
                                            </div>
                                            <span className="rating-text">({product.rating})</span>
                                        </div>

                                        <div className="colors-section">
                                            <span className="detail-label">Colors:</span>
                                            <div className="color-options">
                                                {product.colors.map((color, index) => (
                                                    <span key={index} className="color-tag">
                                                        {color}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-pricing">
                                        <div className="price-container">
                                            <span className="current-price">₹{product.price.toLocaleString()}</span>
                                            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                                        </div>
                                        <span className="savings">💰 Save ₹{(product.originalPrice - product.price).toLocaleString()}</span>
                                    </div>

                                    <button
                                        className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                                        onClick={() => addToCart(product)}
                                        disabled={!product.inStock}
                                    >
                                        {product.inStock ? (
                                            <>
                                                🛒 Add to Cart
                                            </>
                                        ) : (
                                            '❌ Out of Stock'
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Modal */}
                {selectedProduct && (
                    <div className="modal-overlay" onClick={closeProductModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeProductModal}>✖️</button>
                            <div className="modal-body">
                                <div className="modal-image">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                                    <div className="modal-badges">
                                        <div className="modal-age-badge">
                                            {getAgeIcon(selectedProduct.age)} {selectedProduct.age}
                                        </div>
                                        <div className="modal-gender-badge">
                                            {selectedProduct.gender}
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-info">
                                    <div className="modal-category">
                                        {getCategoryIcon(selectedProduct.category)} {selectedProduct.category}
                                    </div>
                                    <h2 className="modal-title">{selectedProduct.name}</h2>
                                    
                                    <div className="modal-rating">
                                        <div className="stars">
                                            {renderStars(selectedProduct.rating)}
                                        </div>
                                        <span>({selectedProduct.rating}) Amazing Rating!</span>
                                    </div>

                                    <p className="modal-description">{selectedProduct.description}</p>

                                    <div className="modal-features">
                                        <h4>🌟 Product Features:</h4>
                                        <ul>
                                            <li>Perfect for {selectedProduct.age} age group</li>
                                            <li>High quality and safe materials</li>
                                            <li>Designed for {selectedProduct.gender.toLowerCase()} kids</li>
                                            <li>Educational and fun experience</li>
                                        </ul>
                                    </div>

                                    <div className="modal-colors">
                                        <label>🎨 Available Colors:</label>
                                        <div className="color-list">
                                            {selectedProduct.colors.map((color, index) => (
                                                <span key={index} className="color-chip">{color}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="modal-pricing">
                                        <span className="modal-current-price">₹{selectedProduct.price.toLocaleString()}</span>
                                        <span className="modal-original-price">₹{selectedProduct.originalPrice.toLocaleString()}</span>
                                        <div className="modal-savings">
                                            🎉 You Save: ₹{(selectedProduct.originalPrice - selectedProduct.price).toLocaleString()}
                                        </div>
                                    </div>

                                    <button
                                        className={`modal-add-to-cart ${!selectedProduct.inStock ? 'disabled' : ''}`}
                                        onClick={() => {
                                            addToCart(selectedProduct);
                                            closeProductModal();
                                        }}
                                        disabled={!selectedProduct.inStock}
                                    >
                                        {selectedProduct.inStock ? '🛒 Add to Cart' : '❌ Out of Stock'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Kids;
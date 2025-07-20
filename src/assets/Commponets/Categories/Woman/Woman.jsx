import React, { useState } from 'react';
import "./Woman.css"



function Woman() {

    const products = [
        {
            id: 1,
            name: "Floral Summer Dress",
            price: 2499,
            originalPrice: 3299,
            description: "Beautiful floral print dress perfect for summer occasions. Lightweight fabric with comfortable fit.",
            image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
            category: "Dresses",
            rating: 4.6,
            inStock: true,
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Pink", "Blue", "White"]
        },
        {
            id: 2,
            name: "Designer Handbag",
            price: 3999,
            originalPrice: 4999,
            description: "Elegant leather handbag with spacious compartments. Perfect accessory for professional and casual wear.",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
            category: "Bags",
            rating: 4.8,
            inStock: true,
            sizes: ["One Size"],
            colors: ["Black", "Brown", "Tan"]
        },
        {
            id: 3,
            name: "High-Heel Sandals",
            price: 2199,
            originalPrice: 2899,
            description: "Stylish high-heel sandals with comfortable padding. Perfect for parties and special occasions.",
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
            category: "Footwear",
            rating: 4.3,
            inStock: true,
            sizes: ["5", "6", "7", "8", "9"],
            colors: ["Nude", "Black", "Red"]
        },
        {
            id: 4,
            name: "Casual Denim Jeans",
            price: 1899,
            originalPrice: 2399,
            description: "Premium quality denim jeans with perfect fit. Versatile style suitable for daily wear.",
            image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
            category: "Clothing",
            rating: 4.5,
            inStock: true,
            sizes: ["26", "28", "30", "32", "34"],
            colors: ["Light Blue", "Dark Blue", "Black"]
        },
        {
            id: 5,
            name: "Silk Blouse",
            price: 2799,
            originalPrice: 3499,
            description: "Luxurious silk blouse with elegant design. Perfect for office wear and formal occasions.",
            image: "https://images.unsplash.com/photo-1564257577-9915d6837baf?w=400&h=500&fit=crop",
            category: "Clothing",
            rating: 4.7,
            inStock: false,
            sizes: ["XS", "S", "M", "L"],
            colors: ["White", "Cream", "Light Pink"]
        },
        {
            id: 6,
            name: "Statement Earrings",
            price: 899,
            originalPrice: 1299,
            description: "Bold statement earrings to complement any outfit. Hypoallergenic and lightweight design.",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop",
            category: "Jewelry",
            rating: 4.4,
            inStock: true,
            sizes: ["One Size"],
            colors: ["Gold", "Silver", "Rose Gold"]
        },
        {
            id: 7,
            name: "Cozy Cardigan",
            price: 2299,
            originalPrice: 2899,
            description: "Soft and warm cardigan perfect for layering. Comfortable knit fabric with stylish buttons.",
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
            category: "Clothing",
            rating: 4.2,
            inStock: true,
            sizes: ["S", "M", "L", "XL"],
            colors: ["Beige", "Gray", "Navy"]
        },
        {
            id: 8,
            name: "Athletic Sneakers",
            price: 2999,
            originalPrice: 3799,
            description: "Performance athletic sneakers with advanced cushioning. Ideal for workouts and running.",
            image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=500&fit=crop",
            category: "Footwear",
            rating: 4.9,
            inStock: true,
            sizes: ["5", "6", "7", "8", "9", "10"],
            colors: ["White", "Pink", "Purple"]
        },
        {
            id: 9,
            name: "Evening Clutch",
            price: 1599,
            originalPrice: 2199,
            description: "Elegant evening clutch with crystal embellishments. Perfect for formal events and parties.",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
            category: "Bags",
            rating: 4.6,
            inStock: true,
            sizes: ["One Size"],
            colors: ["Gold", "Silver", "Black"]
        },
        {
            id: 10,
            name: "Maxi Dress",
            price: 3299,
            originalPrice: 4199,
            description: "Flowing maxi dress with bohemian print. Perfect for beach vacations and summer parties.",
            image: "https://images.unsplash.com/photo-1566479179817-c5b5f1d6ca3a?w=400&h=500&fit=crop",
            category: "Dresses",
            rating: 4.5,
            inStock: true,
            sizes: ["XS", "S", "M", "L", "XL"],
            colors: ["Coral", "Turquoise", "Yellow"]
        },
        {
            id: 11,
            name: "Leather Jacket",
            price: 4599,
            originalPrice: 5999,
            description: "Premium leather jacket with modern cut. Timeless piece that never goes out of style.",
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
            category: "Clothing",
            rating: 4.8,
            inStock: true,
            sizes: ["XS", "S", "M", "L"],
            colors: ["Black", "Brown", "Burgundy"]
        },
        {
            id: 12,
            name: "Pearl Necklace",
            price: 1999,
            originalPrice: 2599,
            description: "Classic pearl necklace with lustrous finish. Elegant accessory for special occasions.",
            image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
            category: "Jewelry",
            rating: 4.7,
            inStock: false,
            sizes: ["16 inch", "18 inch", "20 inch"],
            colors: ["White", "Cream", "Gray"]
        }
    ];


    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState('All');
    const [sortBy, setSortBy] = useState('featured');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const addToCart = (product) => {
        if (!product.inStock) return;
        setCart([...cart, product]);
        // Create a subtle notification effect
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = `${product.name} added to cart!`;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 3000);
    };

    const categories = ['All', ...new Set(products.map(p => p.category))];

    let filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    // Sort products
    if (sortBy === 'price-low') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
    }

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

    const openProductModal = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = 'hidden';
    };

    const closeProductModal = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="women-ecommerce-container">
            <div className="section-padding">
                {/* Hero Section */}
                {/* <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">Women's Collection</h1>
                        <p className="hero-subtitle">Discover the latest trends in fashion, accessories, and lifestyle products designed for the modern woman</p>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="stat-number">{products.length}</span>
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
                    <div className="hero-background"></div>
                </div> */}

                {/* Filter and Sort Section */}
                <div className="controls-section">
                    <div className="filter-section">
                        <h3>Categories</h3>
                        <div className="filter-buttons">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`filter-btn ${filter === category ? 'active' : ''}`}
                                    onClick={() => setFilter(category)}
                                >
                                    {category}
                                    {category !== 'All' && (
                                        <span className="category-count">
                                            {products.filter(p => p.category === category).length}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

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
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
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
                                        onClick={() => openProductModal(product)}
                                    />
                                    <div className="product-badge">
                                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                    </div>
                                    <div className="product-overlay">
                                        <button
                                            className="quick-view-btn"
                                            onClick={() => openProductModal(product)}
                                        >
                                            Quick View
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
                                        <span className="product-category">{product.category}</span>
                                        <div className="product-rating">
                                            <div className="stars">
                                                {renderStars(product.rating)}
                                            </div>
                                            <span className="rating-number">({product.rating})</span>
                                        </div>
                                    </div>

                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>

                                    <div className="product-details">
                                        <div className="product-colors">
                                            <span className="detail-label">Colors:</span>
                                            <div className="color-options">
                                                {product.colors.slice(0, 3).map((color, index) => (
                                                    <span key={index} className="color-option">
                                                        {color}
                                                    </span>
                                                ))}
                                                {product.colors.length > 3 && (
                                                    <span className="more-colors">+{product.colors.length - 3}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="product-sizes">
                                            <span className="detail-label">Sizes:</span>
                                            <div className="size-options">
                                                {product.sizes.slice(0, 4).map((size, index) => (
                                                    <span key={index} className="size-option">{size}</span>
                                                ))}
                                                {product.sizes.length > 4 && (
                                                    <span className="more-sizes">+{product.sizes.length - 4}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product-pricing">
                                        <div className="price-container">
                                            <span className="current-price">₹{product.price.toLocaleString()}</span>
                                            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                                        </div>
                                        <span className="savings">Save ₹{(product.originalPrice - product.price).toLocaleString()}</span>
                                    </div>

                                    <button
                                        className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                                        onClick={() => addToCart(product)}
                                        disabled={!product.inStock}
                                    >
                                        {product.inStock ? (
                                            <>
                                                <span className="btn-icon">🛍️</span>
                                                Add to Cart
                                            </>
                                        ) : (
                                            'Out of Stock'
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
                            <button className="modal-close" onClick={closeProductModal}>×</button>
                            <div className="modal-body">
                                <div className="modal-image">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                                </div>
                                <div className="modal-info">
                                    <div className="modal-category">{selectedProduct.category}</div>
                                    <h2 className="modal-title">{selectedProduct.name}</h2>
                                    <div className="modal-rating">
                                        <div className="stars">
                                            {renderStars(selectedProduct.rating)}
                                        </div>
                                        <span>({selectedProduct.rating}) Rating</span>
                                    </div>
                                    <p className="modal-description">{selectedProduct.description}</p>

                                    <div className="modal-options">
                                        <div className="option-group">
                                            <label>Available Colors:</label>
                                            <div className="color-grid">
                                                {selectedProduct.colors.map((color, index) => (
                                                    <span key={index} className="color-chip">{color}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="option-group">
                                            <label>Available Sizes:</label>
                                            <div className="size-grid">
                                                {selectedProduct.sizes.map((size, index) => (
                                                    <span key={index} className="size-chip">{size}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-pricing">
                                        <span className="modal-current-price">₹{selectedProduct.price.toLocaleString()}</span>
                                        <span className="modal-original-price">₹{selectedProduct.originalPrice.toLocaleString()}</span>
                                        <span className="modal-savings">You Save: ₹{(selectedProduct.originalPrice - selectedProduct.price).toLocaleString()}</span>
                                    </div>

                                    <button
                                        className={`modal-add-to-cart ${!selectedProduct.inStock ? 'disabled' : ''}`}
                                        onClick={() => {
                                            addToCart(selectedProduct);
                                            closeProductModal();
                                        }}
                                        disabled={!selectedProduct.inStock}
                                    >
                                        {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Woman;


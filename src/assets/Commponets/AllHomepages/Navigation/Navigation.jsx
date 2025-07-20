// Navigation.jsx
import React, { useState, useEffect, useRef } from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';

// Receive cartCount, cartItems, searchQuery, onSearchInputChange, onSearchSubmit as props
function Navigation({ cartCount, cartItems, searchQuery, onSearchInputChange, onSearchSubmit }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false); // Still managed here for UI focus state
    // searchQuery is now received from props, so remove its useState
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);
    const cartDropdownRef = useRef(null);

    const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.navbar__menu-btn')) {
                setMenuOpen(false);
            }
            if (cartDropdownRef.current && !cartDropdownRef.current.contains(event.target) && !event.target.closest('.navbar__cart-btn')) {
                setCartDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const categories = [
        { name: 'Kids', link: '/kids' },
    ];

    // This handles the input change and calls the prop function
    const handleInputChange = (e) => {
        onSearchInputChange(e.target.value);
    };

    // This handles the search submission (Enter key or button click)
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission if it's a form
        onSearchSubmit(); // Call the prop function
    };

    return (
        <nav className="navbar">
            <Link to="/">
                <div className="navbar__logo">
                    <span className="logo-icon">🛍️</span>
                    E-Shop
                </div>
            </Link>
            <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} ref={menuRef}>
                <div
                    className="navbar__dropdown"
                    ref={dropdownRef}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <button
                        className="navbar__link navbar__dropdown-toggle"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        Categories
                        <span className={`dropdown-arrow ${dropdownOpen ? 'dropdown-arrow--open' : ''}`}>▼</span>
                    </button>
                    <div className={`navbar__dropdown-menu ${dropdownOpen ? 'navbar__dropdown-menu--open' : ''}`}>
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                to={category.link}
                                className="navbar__dropdown-item"
                                onClick={() => {
                                    setMenuOpen(false);
                                    setDropdownOpen(false);
                                }}
                            >
                                <span className="dropdown-icon">{category.icon}</span>
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Mobile search */}
                <div className="navbar__search navbar__search--mobile">
                    <div className="search-container">
                        <input
                            type="text"
                            className="navbar__search-input"
                            placeholder="Search products..."
                            value={searchQuery} // Value from props
                            onChange={handleInputChange} // Uses prop function
                            onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)} // Uses prop function
                        />
                        <button onClick={handleSearchSubmit} className="navbar__search-btn"> {/* Uses prop function */}
                            🔍
                        </button>
                    </div>
                </div>
            </div>
            {/* Desktop search */}
            <div className="navbar__search navbar__search--desktop">
                <div className={`search-form ${searchFocused ? 'search-form--focused' : ''}`}>
                    <input
                        type="text"
                        className="navbar__search-input"
                        placeholder="Search products..."
                        value={searchQuery} // Value from props
                        onChange={handleInputChange} // Uses prop function
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit(e)} // Uses prop function
                    />
                    <button onClick={handleSearchSubmit} className="navbar__search-btn"> {/* Uses prop function */}
                        Search
                    </button>
                </div>
            </div>
            {/* Actions with Cart Dropdown */}
            <div className="navbar__actions">
                <div className="navbar__cart-container" ref={cartDropdownRef}>
                    <button
                        className="navbar__cart-btn"
                        aria-label="View cart"
                        onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
                    >
                        <span className="action-icon cart-icon">🛒</span>
                        {cartCount > 0 && (
                            <span className="action-count cart-bounce">{cartCount}</span>
                        )}
                    </button>
                    {cartDropdownOpen && (
                        <div className="cart-dropdown-menu">
                            {cartItems && cartItems.length > 0 ? (
                                <>
                                    <h4>Your Cart</h4>
                                    <ul>
                                        {cartItems.map((item, index) => (
                                            <li key={`${item.id}-${index}`}>
                                                {item.title.slice(0, 20)}... - ${item.price.toFixed(2)}
                                                {item.quantity && ` (x${item.quantity})`}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="cart-total">
                                        Total: ${cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0).toFixed(2)}
                                    </div>
                                    <Link to="/checkout" className="checkout-btn" onClick={() => setCartDropdownOpen(false)}>Checkout</Link>
                                </>
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                        </div>
                    )}
                </div>
                <button
                    className={`navbar__menu-btn ${menuOpen ? 'navbar__menu-btn--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="navbar__menu-icon" />
                </button>
            </div>
        </nav>
    );
}
export default Navigation;
import React, { useState, useEffect, useRef } from 'react';
import "./Navigation.css"
import { Link } from 'react-router-dom';

function Navigation() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchFocused, setSearchFocused] = useState(false);
    const [cartCount, setCartCount] = useState(3);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.navbar__menu-btn')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const categories = [
        { name: 'Men', link: '/men', },
        { name: 'Women', link: '/women', },
        { name: 'Kids', link: '/kids', },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        // Implement search logic here
    };

    return (
        <nav className="navbar">
            <a href='/'>
                <div className="navbar__logo" >
                    <span className="logo-icon" >🛍️</span>
                    E-Shop
                </div>
            </a>

            <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`} ref={menuRef}>
                {/* <a href="/" className="navbar__link">
                    Home
                </a> */}

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
                            <a
                                key={index}
                                href={category.link}
                                className="navbar__dropdown-item"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="dropdown-icon">{category.icon}</span>
                                {category.name}
                            </a>
                        ))}
                    </div>
                </div>



                <a href="/about" className="navbar__link">
                    About
                </a>

                <a href="/contact" className="navbar__link">

                    Contact
                </a>

                {/* Mobile search */}
                <div className="navbar__search navbar__search--mobile">
                    <div className="search-container">
                        <input
                            type="text"
                            className="navbar__search-input"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                        />
                        <button onClick={handleSearch} className="navbar__search-btn">
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
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => setSearchFocused(false)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                    />
                    <button onClick={handleSearch} className="navbar__search-btn">
                        Search
                    </button>
                </div>
            </div>

            {/* Actions */}
            <div className="navbar__actions">

                <button className="navbar__cart-btn" aria-label="View cart">
                    <span className="action-icon cart-icon">🛒</span>
                    {cartCount > 0 && (
                        <span className="action-count cart-bounce">{cartCount}</span>
                    )}
                </button>

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
// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './assets/Commponets/AllHomepages/Navigation/Navigation';
import Kids from './assets/Commponets/Categories/Kids/Kids';
import Hero from './assets/Commponets/AllHomepages/Hero/Hero';
// Import other components like AllHomepage, About, Contact etc.

function App() {
    const [cart, setCart] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // New state for search query

    // Function to add item to cart (already implemented)
    const addToCart = (product) => {
        setCart(prev => {
            const existingProductIndex = prev.findIndex(item => item.id === product.id);
            if (existingProductIndex > -1) {
                const newCart = [...prev];
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex],
                    quantity: (newCart[existingProductIndex].quantity || 1) + 1
                };
                return newCart;
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        alert(`${product.title.slice(0, 30)}... added to cart!`);
    };

    // Function to handle search input changes, passed down to Navigation
    const handleSearchInputChange = (query) => {
        setSearchQuery(query);
    };

    // Function to execute search (e.g., when Enter is pressed or search button clicked)
    const executeSearch = () => {
        console.log("Executing search for:", searchQuery);
        // You might want to trigger a new product fetch here or just let the
        // Kids component filter its existing products based on the searchQuery prop.
        // For this example, we'll let Kids handle the filtering.
    };

    return (

        <Router>
            <Navigation
                cartCount={cart.length}
                cartItems={cart}
                searchQuery={searchQuery} // Pass searchQuery to Navigation
                onSearchInputChange={handleSearchInputChange} // Pass input handler
                onSearchSubmit={executeSearch} // Pass submit handler
            />
            <Routes>
               <Route path='/'element={<Hero/>}/>
                <Route
                    path="/kids"
                    element={<Kids addToCart={addToCart} searchQuery={searchQuery} />}
                />
                {/* Add other routes */}
            </Routes>
        </Router>

    );
}

export default App;
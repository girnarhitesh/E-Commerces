import React from 'react';
import './App.css';
import AllHomepage from './assets/Commponets/AllHomepages/AllHomepage';
import Navigation from './assets/Commponets/AllHomepages/Navigation/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllHomepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
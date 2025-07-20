import React from 'react';
import './App.css';
import AllHomepage from "./assets/Commponets/AllHomepages/AllHomepage"
import  Navigation from "./assets/Commponets/AllHomepages/Navigation/Navigation"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Man from "./assets/Commponets/Categories/Categories products/Man"
import Woman from "./assets/Commponets/Categories/Woman/Woman"
import Kids from './assets/Commponets/Categories/Kids/Kids';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllHomepage />} />
        <Route path="/men" element={<Man />} />
        <Route path="/woman" element={<Woman />} />
        <Route path='/kids' element={<Kids/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

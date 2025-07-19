import react from 'react'
import './App.css'
import AllHomepage from './assets/Commponets/AllHomepages/AllHomepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './assets/Commponets/AllHomepages/Navigation/Navigation'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<AllHomepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

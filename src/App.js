import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/header/headers';
import Footer from './components/footer/footer';
import HomePage from './pages/homePage/homePage';
import Catalog from './pages/catalog/catalog';
import DeskDetail from './pages/deskDetail/deskDetail';

function App() {
  return (
    <Router>
      <Headers/>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Catalog/:id" element={<DeskDetail />} /> {/* Remove deskData prop */}
        <Route path="/Cart" element={<div class="cart">soon...</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

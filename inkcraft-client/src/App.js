import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './assets/styles/styles.css'
import { LandingPage } from './pages/public/LandingPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element="not Found" />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />

      </Routes>
    </Router>
  );
}

export default App;

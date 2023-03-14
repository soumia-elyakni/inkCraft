import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './assets/styles/styles.css'
import { LandingPage } from './pages/public/LandingPage';
import {Login} from './pages/auth/Login'
import { Register } from './pages/auth/Register';
import { WritterDashboard } from './pages/writter/WritterDashboard';
import { TranslatorDashboard } from './pages/translator/TranslatorDashboard';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element="not Found" />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dash" element={<WritterDashboard/>} />
        <Route path="/tdash" element={<TranslatorDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles/styles.css'
import { LandingPage } from './pages/public/LandingPage';
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register';
import { WritterDashboard } from './pages/writter/WritterDashboard';
import { StoriesListe } from './pages/writter/outlet/StoriesListe';
import { TranslatorDashboard } from './pages/translator/TranslatorDashboard';

import './App.css';
import { StorieDetails } from './pages/writter/outlet/StorieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element="not Found" />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dash" element={<WritterDashboard />} >
          <Route path="stories" element={<StoriesListe />} />
          <Route path="stories/:id" element={<StorieDetails />} />
          <Route path="persons" element="{<persons/>}" />
          <Route path="places" element="{<places/>}" />
          <Route path="events" element="{<events/>}" />
          <Route path="chapters" element="{<chapters/>}" />
          <Route path="tools" element="{<tools/>}" />
          <Route path="settings" element="{<settings/>}" />
        </Route>
        <Route path="/tdash" element={<TranslatorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminPage from './components/AdminPage';
import InfoPage from './components/InfoPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  </Router>
);

export default App;

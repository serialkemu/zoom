import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import AdminPage from './AdminPage';
import InfoPage from './InfoPage';

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

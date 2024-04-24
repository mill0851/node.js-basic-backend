import React from 'react';
import './scss/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Usenavigate } from 'react';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

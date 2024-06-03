import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Reviews from './Components/Reviews';
import Download from './Components/Download';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Policies from './Components/Policies'; // Make sure to create this component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/download" element={<Download />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
        <br />
        <Reviews />
        <br />
        <br />
        <Download />
      </div>
    </Router>
  );
}

export default App;

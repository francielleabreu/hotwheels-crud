import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, AddCar, Cars } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
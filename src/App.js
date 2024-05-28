import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Home, About, AddCar, Carslist, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/addCar" element={<AddCar />} />
          <Route path="/carsList" element={<Carslist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
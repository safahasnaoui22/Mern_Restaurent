import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // Corrected import
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/succ' element={<Success />} /> 
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster /> 
    </Router>
  );
};

export default App;

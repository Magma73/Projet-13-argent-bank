import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Error from './pages/Error'
import Home from './pages/Home';
import Error from './pages/Error';
// import Header from './components/Header'
// import SlideNav from './components/SlideNav'
// import styled from 'styled-components';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Navigate to="/user/12" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </div>
);

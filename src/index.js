import React from 'react';
import { BrowserRouter, NavLink, Link, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import PP from './PagePrincipale/PP';
import AP from './APropos/AP';
import reportWebVitals from './reportWebVitals';
import logo from './Assets/img/LOGO.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header className="PP-header">
      <img src={logo} alt="logo" />
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"} >Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "link"} >À Propos</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<PP />} />
      <Route path="/about" element={<AP />} />
    </Routes>
    <footer>
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  </BrowserRouter>
);


reportWebVitals();

import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import PrincipalPage from './PrincipalPage/PrincipalPage';
import About from './About/About';
import CardsPage from './CardsPage/CardsPage';
import ErrorPage from './ErrorPage/ErrorPage'; 
import reportWebVitals from './reportWebVitals'; 
import logo from './Assets/img/LOGO.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"} >Accueil</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "link"} >À Propos</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<PrincipalPage />} />
      <Route path="/about" element={<About />} />
      <Route path="card/:id" element={<CardsPage />} />
      <Route path="404" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <footer>
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  </BrowserRouter>
);

reportWebVitals();

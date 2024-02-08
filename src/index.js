import React from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import PPage from './PagePrincipale/PP';
import APropos from './APropos/AP';
import PCartes from './PageCartes/PC';
import PErreur from './404/404'; 
import reportWebVitals from './reportWebVitals'; 
import logo from './Assets/img/LOGO.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <header className="PP-header">
      <img src={logo} alt="logo" />
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "link"} >Accuei</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "link"} >À Propos</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<PPage />} />
      <Route path="/about" element={<APropos />} />
      <Route path="card/:id" element={<PCartes />} />
      <Route path="404" element={<PErreur />} />
      <Route path="*" element={<PErreur />} />
    </Routes>
    <footer>
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  </BrowserRouter>
);

reportWebVitals();

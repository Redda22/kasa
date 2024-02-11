import React from 'react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'; // "/client" ajoute une partie expérimentale nécessaire pour l'utilisation de createRoot.

import './index.scss';

import PrincipalPage from './PrincipalPage/PrincipalPage';
import About from './PageComponents/About/About';
import CardsPage from './PageComponents/CardsPage/CardsPage';
import ErrorPage from './PageComponents/ErrorPage/ErrorPage';

import logo from './Assets/img/LOGO.svg';

// Point d'entrée de la route principale de l'app, où mes composants react serons rendus.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // gestion des routes.
  <BrowserRouter>
    <header>
      <img src={logo} alt="logo" />
      <nav>

        <NavLink to="/"
          // Conditionnement de la classe du lien selon la raçine de l'url.
          className={({ isActive }) => isActive ? "active-link" : ""} >
          Accueil</NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} >À Propos</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<PrincipalPage />} />
      <Route path="/about" element={<About />} />
      <Route path="card/:id" element={<CardsPage />} /> {/* :id indique une valeurs dynamique, l'id de la page concerné */}
      <Route path="404" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} /> {/* Capture toutes les URLs qui n'on pas de routes */}
    </Routes>
    <footer>
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  </BrowserRouter>
);
reportWebVitals();

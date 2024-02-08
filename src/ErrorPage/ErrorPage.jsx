import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

function ErrorPage() {
  return (
    <div className="ErrorPage">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={{pathname: '/'}}> Retourner sur la page d'accueil </Link>
    </div>
  );
}

export default ErrorPage;

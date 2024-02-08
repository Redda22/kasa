import React from 'react';
import { Link } from 'react-router-dom';
import './404.scss';

function OPS() {
  return (
    <div className="OPS">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={{pathname: '/'}}> Retourner sur la page d'accueil </Link>
    </div>
  );
}

export default OPS;

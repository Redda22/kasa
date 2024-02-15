import React from 'react';
import {Link} from 'react-router-dom';

import './PrincipalPage.scss';
import cards_data from '../PageComponents/cards.json'; /**/

import titleImg from '../Assets/img/Image2.png';

function PrincipalPage() {

  return (
    <div className="PrincipalPage">

      <div className='banner'>
        <img src={titleImg} alt="PP" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      
      <div className='cards'>
        {cards_data.map((dataGroup, index) => (
          <Link

            key={index} // Attribution d'une clé aux Links.

            to={{
              pathname: `card/${dataGroup.id}`
            }}>

            <div className='card'>
              <img src={dataGroup.cover} alt="cover" />
              <h2>{dataGroup.title}</h2>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default PrincipalPage;

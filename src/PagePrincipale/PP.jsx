import React from 'react';
import './PP.scss';
import title from '../Assets/img/Image2.png';
import cards_data from '../Assets/cards.json';
import {Link} from 'react-router-dom';

function PP() {

  return (
    <div className="PP">
      <div className='title'>
        <img src={title} alt="PP" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className='cards'>
        {cards_data.map((dataGroup, index) => (

          <Link 
            to={{
              pathname: `card/${dataGroup.id}`
            }}
            key={index}>

            <div className='card' key={index}>
              <img src={dataGroup.cover} alt="cover" />
              <h2>{dataGroup.title}</h2>
            </div>

          </Link>
        ))}
      </div>
    </div>
  );
}

export default PP;

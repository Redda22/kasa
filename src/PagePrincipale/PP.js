import React from 'react';
import { Link } from 'react-router-dom';
import './PP.scss';
import title from '../Assets/img/Image2.png';

function PP() {
  return (
    <div className="PP">
      <div className='title'>
        <img src={title} alt="" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className='cards'>

      </div>
    </div>
  );
}

export default PP;

import { React } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import GalleryImg from '../OthersComponents/GalleryImg/galleryImg';
import Collapse from '../OthersComponents/Collapse/collapse';

import './CardsPage.scss';
import cards_data from '../cards.json';

function CardsPage() {
  const id = useParams().id; // Accès à l'url et saisi de l'id.
  const dataGroup = cards_data.find(dataGroup => dataGroup.id === id); // Selection du groupe de données correspondant à l'id passé dans l'url.

  if (!dataGroup) {
    return <Navigate to="/404" />;
  }
  else {
    return (
      <div className="CardsPage">
        
        <GalleryImg
          id={id}
        />

        <div className='info'>
          <div className='sec12'>
            <div className='info-section info-section1'>

              <div className='title-and-loc'>
                <h2>{dataGroup.title}</h2>
                <p>{dataGroup.location}</p>
              </div>
              <div className='tags'>
                {dataGroup.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>
            
            <div className='info-section info-section2'>
              <div className='account-info'>
                <p>{dataGroup.host.name}</p>
                <img src={dataGroup.host.picture} alt="pp" />
              </div>
              <div className='stars-rating'>
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={`fa-solid fa-star ${index < dataGroup.rating ? 'active-star' : 'disabled-star'}`}
                  >
                  </i>
                ))}
              </div>
            </div>
          </div>

          <div className='info-section info-section3'>
            <Collapse
              title="Description"
              content={dataGroup.description}
            />
            <Collapse
              title="Équipement"
              content={dataGroup.equipments.map((equipment, index) => (<span key={index}>{equipment}</span>))}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardsPage;

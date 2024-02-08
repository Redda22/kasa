import { React, useState, useEffect, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './CardsPage.scss';
import cards_data from '../Assets/cards.json';

function CardsPage() {
  const { id } = useParams();
  const dataGroup = cards_data.find(card => card.id === id);

  const images = dataGroup.pictures;
  const [imageStates, setImageStates] = useState(Array(images.length).fill(false));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pRef1 = useRef(null); 
  const pRef2 = useRef(null);
  const [IActif1, setIActif1] = useState(0);
  const [IActif2, setIActif2] = useState(0);
  const [divHeight1, setDivHeight1] = useState("5.5");
  const [divHeight2, setDivHeight2] = useState("5.5");
  const changeDivHeight1 = (newHeight) => {
    setDivHeight1(newHeight);
  }
  const changeDivHeight2 = (newHeight) => {
    setDivHeight2(newHeight);
  }
  const IClick1 = (id) => {
    setIActif1(prevId => prevId === id ? null : id);
  }
  const IClick2 = (id) => {
    setIActif2(prevId => prevId === id ? null : id);
  }

  useEffect(() => {
    setImageStates(prevImageStates => {
      const newImageStates = [...prevImageStates];
      newImageStates[currentImageIndex] = true;
      return newImageStates;
    });
  }, [currentImageIndex]);

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    updateImageState(currentImageIndex, nextIndex);
    setCurrentImageIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    updateImageState(currentImageIndex, prevIndex);
    setCurrentImageIndex(prevIndex);
  };

  const updateImageState = (prevIndex, nextIndex) => {
    imageStates.fill(false);
    const newImageStates = [...imageStates];
    newImageStates[prevIndex] = false;
    newImageStates[nextIndex] = true;
    setImageStates(newImageStates);
  };

  if (!dataGroup) {
    return <Navigate to="/404" />;
  }
  else {
    return (
      <div className="CardsPage">

        <div className='img-div'>
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`img${index}`}
              className={imageStates[index] ? 'active' : 'disabled'}
            />
          ))}

          {dataGroup.pictures.length > 1 && (
            <>
              <div className='left-right-div'>
                <span className='left' onClick={prevImage} ><i className="fa-solid fa-chevron-left"></i></span>
                <span className='right' onClick={nextImage} ><i className="fa-solid fa-chevron-right"></i></span>
              </div>
              <p>{currentImageIndex + 1 + "/" + dataGroup.pictures.length}</p>
            </>
          )}
        </div>

        <div className='info'>

          <div className='sec12'>
            <div className='info-section info-section1'>

              <div className='title-and-loc'>
                <h2>{dataGroup.title}</h2>
                <p>{dataGroup.location}</p>
              </div>
              <div className='tags'>

                {dataGroup.tags.map((tags, index) => (
                  <p key={index}>{tags}</p>
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
                  ></i>
                ))}
              </div>
            </div>
          </div>



          <div className='info-section info-section3'>
            <div className={`description ${IActif1 === 1 ? "active" : ""}`} style={{ height: `${divHeight1}vh` }}>
              <h3>Description
                <i onClick={() => {
                  IClick1(1);
                  if (IActif1 === 1) {
                    changeDivHeight1(5.5);
                  } else {
                    changeDivHeight1(((pRef1.current.offsetHeight / window.innerHeight) * 100) + 5.5);
                  }
                }} className='fa-solid fa-chevron-up'></i>
              </h3>
              <p ref={pRef1}>{dataGroup.description}</p>
            </div>
            <div className={`equipement ${IActif2 === 1 ? "active" : ""}`} style={{ height: `${divHeight2}vh` }}>
              <h3>Équipement
                <i onClick={() => {
                  IClick2(1);
                  if (IActif2 === 1) {
                    changeDivHeight2(5.5);
                  } else {
                    changeDivHeight2(((pRef2.current.offsetHeight / window.innerHeight) * 100) + 5.5);
                  }
                }} className='fa-solid fa-chevron-up'></i>
              </h3>

              <div ref={pRef2}>
                {dataGroup.equipments.map((equipment, index) => (
                  <p key={index}>
                    {equipment}
                    {index < dataGroup.equipments.length - 1 && <br />}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }


}

export default CardsPage;

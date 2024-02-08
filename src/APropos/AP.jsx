import React, { useState, useRef } from 'react';
import './AP.scss';
import bannerImg from "../Assets/img/Image1.png";

function AP() {
  const pRef1 = useRef(null);
  const pRef2 = useRef(null);
  const pRef3 = useRef(null);
  const pRef4 = useRef(null);

  const [IActif1, setIActif1] = useState(0);
  const [IActif2, setIActif2] = useState(0);
  const [IActif3, setIActif3] = useState(0);
  const [IActif4, setIActif4] = useState(0);

  const [divHeight1, setDivHeight1] = useState("5.5");
  const [divHeight2, setDivHeight2] = useState("5.5");
  const [divHeight3, setDivHeight3] = useState("5.5");
  const [divHeight4, setDivHeight4] = useState("5.5");

  const changeDivHeight1 = (newHeight) => {
    setDivHeight1(newHeight);
  }
  const changeDivHeight2 = (newHeight) => {
    setDivHeight2(newHeight);
  }
  const changeDivHeight3 = (newHeight) => {
    setDivHeight3(newHeight);
  }
  const changeDivHeight4 = (newHeight) => {
    setDivHeight4(newHeight);
  }

  const IClick1 = (id) => {
    setIActif1(prevId => prevId === id ? null : id);
  }
  const IClick2 = (id) => {
    setIActif2(prevId => prevId === id ? null : id);
  }
  const IClick3 = (id) => {
    setIActif3(prevId => prevId === id ? null : id);
  }
  const IClick4 = (id) => {
    setIActif4(prevId => prevId === id ? null : id);
  }

  return (
    <div className="AP">
      <div className='banner'>
        <img src={bannerImg} alt="banner" />
      </div>

      <div className='content'>


        <div className={`serie ${IActif1 === 1 ? "active" : ""}`} style={{ height: `${divHeight1}vh` }}>
          <h3>Fiabilité
            <i onClick={() => {
              IClick1(1);
              if (IActif1 === 1) {
                changeDivHeight1(5.5);
              } else {
                changeDivHeight1(((pRef1.current.offsetHeight / window.innerHeight) * 100) + 5.5);
              }
            }} className='fa-solid fa-chevron-up'></i>
          </h3>
          <p ref={pRef1}>
            Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </p>
        </div>

        <div className={`serie ${IActif2 === 1 ? "active" : ""}`} style={{ height: `${divHeight2}vh` }}>
          <h3>Respect
            <i onClick={() => {
              IClick2(1);
              if (IActif2 === 1) {
                changeDivHeight2(5.5);
              } else {
                changeDivHeight2(((pRef2.current.offsetHeight / window.innerHeight) * 100) + 5.5);
              }
            }} className='fa-solid fa-chevron-up'></i>
          </h3>
          <p ref={pRef2}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
            du voisinage entraînera une exclusion de notre platforme.
          </p>
        </div>

        <div className={`serie ${IActif3 === 1 ? "active" : ""}`} style={{ height: `${divHeight3}vh` }}>
          <h3>Service
            <i onClick={() => {
              IClick3(1);
              if (IActif3 === 1) {
                changeDivHeight3(5.5);
              } else {
                changeDivHeight3(((pRef3.current.offsetHeight / window.innerHeight) * 100) + 5.5);
              }
            }} className='fa-solid fa-chevron-up'></i>
          </h3>
          <p ref={pRef3}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
            du voisinage entraînera une exclusion de notre platforme.
          </p>
        </div>

        <div className={`serie ${IActif4 === 1 ? "active" : ""}`} style={{ height: `${divHeight4}vh` }}>
          <h3>Sécurité
            <i onClick={() => {
              
              if (IActif4 === 1) {
                IClick4(1);
                changeDivHeight4(5.5);
              } else {
                IClick4(1);
                changeDivHeight4(((pRef4.current.offsetHeight / window.innerHeight) * 100) + 5.5);
              }
            }} className='fa-solid fa-chevron-up'></i>
          </h3>
          <p ref={pRef4}>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
            chaque logement correspond aux critères de sécurité établis par nos services.
            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes
            de vérifier que les standards sont bien respectés. Nous organisons également des ateliers
            sur la sécurité domestique pour nos hôtes.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AP;

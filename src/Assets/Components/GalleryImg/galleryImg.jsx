import React, { useState } from 'react';
import cards_data from '../../cards.json';

function GalleryImg(props) {

    const id = props.id;
    const images = cards_data.find(dataGroup => dataGroup.id === id).pictures; // récupération des images au groupe de données correspondant à l'id.

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    console.log(currentImageIndex);

    function nextImage() {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }
    function prevImage() {
        setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
    }


    return (
        <div className='img-div'>
            {images.map((imageUrl, index) => (
                <img
                    key={index}
                    src={imageUrl}
                    alt="img"
                    className={index === currentImageIndex ? 'active' : 'disabled'}
                />
            ))}


            <div className='left-right-div'>
                <span className='left' onClick={prevImage}><i className="fa-solid fa-chevron-left"></i></span>
                <span className='right' onClick={nextImage}><i className="fa-solid fa-chevron-right"></i></span>
            </div>
            <p>{currentImageIndex + 1}/{images.length}</p>

        </div>
    );
};

export default GalleryImg;

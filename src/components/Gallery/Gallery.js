import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';
import ErrorImg from './error.png';

const Gallery = ({ clickedImg }) => {

    const [images, setImages] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
            .then(res => {
                setImages(res.data);
            })
            .catch(err => {
                setError(true);
            })
    },[]);

    return (
      
            <div className="card-list">
                { error && <img src={ErrorImg} alt="error" /> }
                {images.map(image => (
                    <div key={image.id} onClick={() => clickedImg(image.urls.regular)} >
                    <img className="card--image" 
                        src={image.urls.regular} 
                        alt={image.alt_description}       
                    />
                    </div>
                ))}
            </div>
    )
}

export default Gallery;

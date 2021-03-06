import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = ({ clickedImg }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        axios
            .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
            .then(res => {
                setImages(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    },[]);

    return (
        <div className="card-list">
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

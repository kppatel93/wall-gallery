import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = () => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
            .then(res => {
                setImages(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    },[]);

    return (
        <div className="card-list">
            {images.map(image => (
                <div key={image.id}>
                    <img className="card--image" src={image.urls.regular} alt={image.alt_description}/>
                </div>
            ))}
        </div>
    )
}

export default Gallery;

import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image)=> {
        // Can look in the console to see the regular property
        // image.id comes from the API, use this for better performance
        // Just need to pass in the image now to props
        return <ImageCard  key={image.id} image={image} />
    });

    return <div className="image-list">{images}</div>;
    
};

export default ImageList;   
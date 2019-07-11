import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({description, id, urls})=> {
        // Can look in the console to see the regular property
        // image.id comes from the API, use this for better performance
        return <img alt={description} key={id} src={urls.regular} />
    });

    return <div>{images}</div>;
    
};

export default ImageList;   
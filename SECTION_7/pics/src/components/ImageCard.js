// Shows one image by itself
import React from 'react';

class ImageCard extends React.Component {
    render(){
        // Destructuring code
        const {description, urls } = this.props.image
        return (
            <div>
                {/* Pass a prop of our image object */}
                <img 
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;
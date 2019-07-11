// Shows one image by itself
import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {spans:0}
        // Assign to instance variable so can refer to it later
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        // When image loads, it emits this 'load' event that will let us know
        // when loaded
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        // Used to determine the height value
        const height = this.imageRef.current.clientHeight;
        //  Figure out how many rows to be 
        const spans = Math.ceil(height / 10 + 1);
        // Set the spans which
        this.setState({
            spans
        })
    }
    render(){
        // Destructuring code
        const {description, urls } = this.props.image
        return (
            // Set the style of the grid-row-end to the state
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                {/* Pass a prop of our image object */}
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        // Specially named, belongs to JS but not mandatory
        // Called everytime new instance of app called
        // Way to initialize state
        super(props); // Call React.Component constructor function (mandatory)

        this.state = {
            // Want to initialize latitude here
            // Default to sensible value
            lat: null, // Dont know latitude yet
            errorMessage: '' 
        }
        // Dont want to initialize in render() since render called all the time
        window.navigator.geolocation.getCurrentPosition(
            // Call back when gets user location (success callback)
            // Use this to determine if in northern or southern hemisphere
            (position) => {
                // Want to use latitude alone and set the state
                this.setState({ lat: position.coords.latitude})
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }

    render() {
        // Render is required for every component otherwise get error
        // Error will be shown if error occurs, update state
        // Conditional rendering
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }
        
        return <div>Loading!</div>
        
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


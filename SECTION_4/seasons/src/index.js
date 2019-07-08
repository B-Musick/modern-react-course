import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // constructor(props){
    //     // Specially named, belongs to JS but not mandatory
    //     // Called everytime new instance of app called
    //     // Way to initialize state
    //     super(props); // Call React.Component constructor function (mandatory)

    //     this.state = {
    //         // Want to initialize latitude here
    //         // Default to sensible value
    //         lat: null, // Dont know latitude yet
    //         errorMessage: '' 
    //     }

    // }

    // Constructor will automatically be called as well as super(props)
    state = { lat: null, errorMessage: ''}

    componentDidMount(){
        // Put initial data loading requests here for best practice
        // Dont want to initialize in render() since render called all the time
        window.navigator.geolocation.getCurrentPosition(
            // Call back when gets user location (success callback)
            // Use this to determine if in northern or southern hemisphere
            (position) => this.setState({ lat: position.coords.latitude })
                // Want to use latitude alone and set the state  
            ,
            (err) => this.setState({ errorMessage: err.message })
            
        );
    };

    renderContent() {
        // Render is required for every component otherwise get error
        // Error will be shown if error occurs, update state
        // Conditional rendering
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            // Take property from state, and pass it to the SeasonDisplay component to 
            // display it
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request" />;


    };
   
    render() {
        // Content is centralized so can have a border red, instead of adding to each 
        // condition separately
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )

    }

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


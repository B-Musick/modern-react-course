// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component with JSX within
const App = () => {

    // Using JS Variables in HTML
    const buttonText = "Click Me!";

    return (
        <div>
            {/* Notice class = className */}
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            {/* Referenced the JS variable buttonText in curly braces */}
            <button style={{backgroundColor: 'blue', color:'white'}}>{buttonText}</button>
        </div>
    )
}

//Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
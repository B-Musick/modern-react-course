import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            // Call back when gets user location (success callback)
            // Use this to determine if in northern or southern hemisphere
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Latitude: </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


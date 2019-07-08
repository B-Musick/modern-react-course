import React from 'react';
import './SeasonDisplay.css'; // Webpack sees we are importing css file, takes it and places in index.html file

const seasonConfig = {
    // Objects tell us what text to use and icon
    // Makes it easier to do any updates
    summer: {
        text: 'Lets hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chill',
        iconName: 'snowflake'
    }
}
// Function to determine season
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        // If in summer months and check if in northern or southern hemisphere with ternary
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]
    
    // Instead of doing the following, make a configuration object
    // const text = season === 'winter' ?  : 'Lets hit the beach';
    // const icon = season === 'winter' ?  : 'sun';

    return (
        // Have the root class name the same as the component
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />

        </div>
    )

}

export default SeasonDisplay;
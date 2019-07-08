import React from 'react';

// Function to determine season
const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        // If in summer months and check if in northern or southern hemisphere with ternary
        return lat > 0 ? 'summer' : 'winter'
    }else{
        return lat < 0 ? 'winter' : 'summer'
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Burr, it is chill' : 'Lets hit the beach';
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    
    
    return <div>
        <i className={`${icon}`} />
        <h1>{text}</h1>
        <i className={`${icon}`} />
        
    </div>
    
}

export default SeasonDisplay;
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
    state = {videos: []};
    onTermSubmit = async term => {
        // Will make request to youtube API, called when searchbar form submitted
        // SearchBar state is 'term'

        // Preconfigured 'axios'
        // Asynchronous API request (so have to use async/await)
        // 'response' will have a ton of information about the request
            // 'data' property is the most important property, 'items' having the actual list of videos
                    // Set items as state of 'videos'
        const response = await youtube.get('/search', {
            params:{
                // q is the actual search term
                q: term
            }
        });
        this.setState({videos: response.data.items});
    }
    render(){
        return(
            <div className="ui container">
                {/* Can give the values in the SearchBar component the same name as well */}
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                {/* Check that the videos loaded */}
                I have {this.state.videos.length} videos
            </div>
            
        )
    };
};

export default App;
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{
    // Initialize the state, makes constructor automatically
    state = { images: [] }

    onSearchSubmit = async term => {
        // Pass this into the SearchBar Component which is called in render()
        // In the SearchBar Component it will be called in the 'onFormSubmit' method
        // When form submitted the term is passed into here and called
        const response = await unsplash.get('/search/photos', {
            params: {
                // Query string parameters we want to add
                query: term
            }
            // Unsplash will send back JSON file with a bunch of photos
        });
        this.setState({ images: response.data.results });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                {/* Print out number of images fetched */}
                <ImageList images={this.state.images}/>
            </div>
        )

    }

}

export default App;
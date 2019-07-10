import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{

    onSearchSubmit(term){
        // Pass this into the SearchBar Component which is called in render()
        // In the SearchBar Component it will be called in the 'onFormSubmit' method
        // When form submitted the term is passed into here and called
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
                // Query string parameters we want to add
                query: term
            },
            headers: {

                Authorization: 'Client-ID d32cebea123578bd377e968593d8aa234c605a79e5f3205c19d6cbe655b400e6'
            }
            // Unsplash will send back JSON file with a bunch of photos
        });

    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )

    }

}

export default App;
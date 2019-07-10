import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component{

    onSearchSubmit(term){
        // Pass this into the SearchBar Component which is called in render()
        // In the SearchBar Component it will be called in the 'onFormSubmit' method
        // When form submitted the term is passed into here and called
        console.log(term);
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
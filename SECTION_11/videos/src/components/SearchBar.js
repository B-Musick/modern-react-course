import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        // Callback called with event parameter, want to take the value and set it
        // to state property
        this.setState({ term: event.target.value });

    };

    onFormSubmit =  event => {
        event.preventDefault();

        //ToDo: make sure call callback from parent so can tell app that user
        // submitted form and to look for associated youtube API

        // Pass the searched term into the App
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            onChange={this.onInputChange} // Call back on the Search bar class
                            value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''}

    onFormSubmit = (event) => {
        event.preventDefault();

        // Call method coming in through props from App
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                {/* When form submitted, onFormSubmit is called and term state set, then 
                onSubmit method passed in from parent is called (term is passed to this parent
                method) */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e)=>this.setState({term: e.target.value})} 
                        />
                    </div>
                    
                </form>

            </div>
        )

    }
}
export default SearchBar;
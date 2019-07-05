import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    {/* Reference faker library for avatar image */}
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Brendan
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice Blog Post!</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
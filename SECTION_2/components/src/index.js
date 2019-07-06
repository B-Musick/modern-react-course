import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        // Semantic-UI Comment outline
        <div className="ui container comments">
            <ApprovalCard />
            <CommentDetail author="Brendan" timeAgo="Today at 4:45PM" comment="I like you" image={faker.image.avatar()}/>
            <CommentDetail author="Adam" timeAgo="Today at 3:45PM" comment="I hate you" image={faker.image.avatar()}/>
            <CommentDetail author="Davis" timeAgo="Today at 2:45PM" comment="I dig you" image={faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
import React from 'react';
import { connect } from 'react-redux';

import CommentItem from '../components/CommentItem';
import NewComment from '../components/NewComment';


let CommentBlock = (props) => {
    
    const { comments, currentAuthor, currentText } = props; 

    localStorage.setItem('comments', JSON.stringify(comments));
    localStorage.setItem('currentAuthor', JSON.stringify(currentAuthor));
    localStorage.setItem('currentText', JSON.stringify(currentText));

    return (
        <div className="comments">
            <h1>Simple comment widget (React-Redux)</h1>
            {
                comments.map((comment) => {
                    return (
                        <CommentItem
                        text={ comment.text }
                        author = { comment.author }
                        id = { comment.id }
                        key = { comment.id }
                        dateTime= { comment.dateTime }
                    />
                    )
                })
            }
            <NewComment 
                currentAuthor={ currentAuthor }
                currentText={ currentText }
                comments={ comments }
            />
        </div>
    )
};

export const myStateToProps = state => {
    return {
        comments: state.comments,
        currentAuthor: state.currentAuthor,
        currentText: state.currentText
    }
}

export default connect(myStateToProps)(CommentBlock);

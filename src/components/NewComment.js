import React from 'react';
import { connect } from 'react-redux';

import { addComment, updateInput } from '../actions/actions';
import myStateToProps from '../containers/CommentBlock';

const NewComment = (props) => {
    
    const { currentAuthor, currentText } = props;
    
    return (
        <div className="comments__new">
            <input
                type="text"
                placeholder="Your Name"
                className="comments__input comments__input--author"
                value= {currentAuthor}
                onChange={ev => props.dispatch(updateInput(ev.target.value, "author"))}
                onKeyDown={ev => {
                    if(ev.keyCode === 13) {
                        ev.preventDefault();
                        props.dispatch(addComment( currentText, currentAuthor ));
                    }
                }}
            ></input>
            <textarea
                placeholder="Your Comment"
                className="comments__input comments__input--text"
                value= {currentText}
                onKeyDown={ev => {
                    if(ev.keyCode === 13) {
                        ev.preventDefault();
                        props.dispatch(addComment( currentText, currentAuthor ));
                    }
                }}
                onChange={ev => props.dispatch(updateInput(ev.target.value, "text"))}
            ></textarea>
        </div>
    )
}

export default connect(myStateToProps)(NewComment);
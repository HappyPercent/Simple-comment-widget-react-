import React from 'react';
import { connect } from 'react-redux';

import { deleteComment } from '../actions/actions';
import myStateToProps from '../containers/CommentBlock';

const CommentItem = (props) => {

    const { author, text, dateTime, id } = props;

    return(
        <div 
            className='comment'
            >
            <div className='comment__author'>
                {author}
                <button 
                    className='comment__delete-button'
                    onClick={ ev => {
                        ev.preventDefault();
                        props.dispatch(deleteComment(id));
                    }}
                ></button>
            </div>
            <div className='comment__text'>{text}</div>
            <div className='comment__dateTime'>{dateTime}</div>
        </div>
    );
};

export default connect(myStateToProps)(CommentItem);
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import CommentBlock from './containers/CommentBlock';
import reducers from './reducers/reducers';
import checkAvaliableID from './enhancers/checkAvaliableID';

document.querySelector('body').innerHTML = '<div class="comments-react">,</div>';

const initialState = () => {
    if(!localStorage.getItem('comments')) {
        return {
            comments: [],
            currentAuthor: '',
            currentText: '',
        };
    } else {
        try {
            return {
                comments: JSON.parse(localStorage.getItem('comments')),
                currentAuthor: JSON.parse(localStorage.getItem('currentAuthor')),
                currentText: JSON.parse(localStorage.getItem('currentText')),
            }; 
        } catch (error) {
            alert('Oops, something went wrong! ヽ(ﾟ〇ﾟ)ﾉ');
            localStorage.clear();
            return {
                comments: [],
                currentAuthor: '',
                currentText: '',
            };
        }
    };
};

const store = createStore(reducers, initialState(), applyMiddleware(checkAvaliableID));

ReactDOM.render(
    <Provider store={store}>
        <CommentBlock />
    </Provider>,
    document.querySelector('.comments-react')
);
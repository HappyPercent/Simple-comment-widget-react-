import { deleteComment } from "../actions/actions";

const reducers = (state = [], action) => {
    switch (action.type) {
        case "ADD_COMMENT": 
            if(action.text && action.author) {
                return {
                    comments: [
                        ...state.comments,
                        { author: action.author, text: action.text, dateTime: action.dateTime, id: action.id }
                    ],
                    currentText: "",
                    currentAuthor: "",
                };
            } else {
                alert('Fill all the fields, pls');
                return state;
            }

        
        case "DELETE_COMMENT": 
            const newCommentsState = state.comments.filter((comment) => comment.id !== action.id);
            return {
                comments: newCommentsState,
                currentText: state.currentText,
                currentAuthor: state.currentAuthor,
            };
        
        case "UPDATE_TEXT": 
            return {
                comments: state.comments,
                currentAuthor: state.currentAuthor,
                currentText: action.currentText,
            };
        case "UPDATE_AUTHOR": 
            return {
                comments: state.comments,
                currentAuthor: action.currentAuthor,
                currentText: state.currentText,
            };

        default: 
            return state;
    }
}
    
export default reducers;
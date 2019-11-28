export const deleteComment = (id) => {

    return {
        type: "DELETE_COMMENT",
        id: id
    }
};
export const addComment = (text, author, comments) => {
    const currentDate = new Date();
    const dateTime = 
        [currentDate.getDay(), currentDate.getMonth(), currentDate.getFullYear()].join('.') 
        + ' ' 
        + [currentDate.getHours(), currentDate.getMinutes()].join(':');
    
    let nextCommentID;

    if (comments.length < 1) {
        nextCommentID = 0;
    } else {
        let allIDs = [];

        for (let i = 0; i < comments.length; i++) {
            allIDs.push(comments[i].id)
        }
        nextCommentID = Math.max.apply(null, allIDs) + 1;
    }

    return {
        type: "ADD_COMMENT",
        author: author,
        text: text,
        dateTime: dateTime,
        id: nextCommentID,
    }
};
export const updateInput = (currentInput, fieldType) => {
    if (fieldType === 'text') {
        return {
            type: "UPDATE_TEXT",
            currentText: currentInput || '',
        };
    } else if (fieldType === 'author') {
        return {
            type: "UPDATE_AUTHOR",
            currentAuthor: currentInput || '',
        };
    } else return false;
};
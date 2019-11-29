export const deleteComment = (id) => {

    return {
        type: "DELETE_COMMENT",
        id: id
    }
};
export const addComment = (text, author) => {
    const currentDate = new Date();
    const dateTime = 
        [currentDate.getDay(), currentDate.getMonth(), currentDate.getFullYear()].join('.') 
        + ' ' 
        + [currentDate.getHours(), currentDate.getMinutes()].join(':');

    return {
        type: "ADD_COMMENT",
        author: author,
        text: text,
        dateTime: dateTime,
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
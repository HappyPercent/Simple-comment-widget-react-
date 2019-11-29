const checkAvaliableID = store => next => action => {

    if(action.type === "ADD_COMMENT") {
        let nextCommentID;

        if (store.getState().comments.length < 1) {
            nextCommentID = 0;
        } else {
            let allIDs = [];
    
            for (let i = 0; i < store.getState().comments.length; i++) {
                allIDs.push(store.getState().comments[i].id)
            }
            nextCommentID = Math.max.apply(null, allIDs) + 1;
        };

        action.id = nextCommentID;
    }
    return next(action);
}

export default checkAvaliableID;
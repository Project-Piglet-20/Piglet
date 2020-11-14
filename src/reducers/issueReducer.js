const initState = {
    issueList: []
}

const IssueListReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ISSUE':
            // console.log('added issue', action.issue)
            return state;
        case 'ADD-ISSUE-ERROR':
            // console.log('add issue error', action.err)
            return state;
        default:
            return state;
    }
}

export default IssueListReducer;
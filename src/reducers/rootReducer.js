import CategoryReducer from './categoryReducer';
import IssueListReducer from './issueReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    category: CategoryReducer,
    issue: IssueListReducer
})

export default rootReducer;